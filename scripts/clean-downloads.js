#!/usr/bin/env node
const fs = require('fs')
const path = require('path')
const sizeOf = require('image-size')

const ROOT = path.resolve(process.cwd(), 'downloaded-galleries')
const SUMMARY = path.join(ROOT, 'summary.json')
const OUT = path.join(ROOT, 'summary.cleaned.json')

// CLI args
const argv = process.argv.slice(2)
let minWidth = 0
for (let i = 0; i < argv.length; i++) {
  if (argv[i] === '--min-width' && argv[i+1]) {
    minWidth = parseInt(argv[i+1], 10) || 0
    i++
  }
}

function readJSON(p) {
  return JSON.parse(fs.readFileSync(p, 'utf8'))
}

function writeJSON(p, obj) {
  fs.writeFileSync(p, JSON.stringify(obj, null, 2), 'utf8')
}

function canonicalKey(filename) {
  // strip trailing -{WxH} before extension
  const b = path.basename(filename)
  const m = b.match(/^(.*?)-(\d+)x(\d+)\.[^.]+$/)
  return m ? m[1] : b.replace(/\.[^.]+$/, '')
}

function getDimensions(abs) {
  try {
    const dim = sizeOf(abs)
    if (dim && dim.width && dim.height) return { w: dim.width, h: dim.height }
  } catch (e) {
    return null
  }
  return null
}

function processGallery(gallery) {
  const images = gallery.images || []
  const groups = new Map()
  for (const img of images) {
    if (!img.file) continue
    const rel = path.relative(ROOT, img.file)
    const key = canonicalKey(rel)
    const abs = path.resolve(ROOT, rel)
    const dim = fs.existsSync(abs) ? getDimensions(abs) : null
    const area = dim ? dim.w * dim.h : 0
    const cur = groups.get(key)
    if (!cur || (area > (cur.area || 0))) {
      groups.set(key, { chosen: img, rel, abs, area })
    }
  }
  const cleaned = Array.from(groups.values()).map(g => g.chosen)
  return cleaned
}

function main() {
  if (!fs.existsSync(SUMMARY)) {
    console.error('summary.json not found at', SUMMARY)
    process.exit(1)
  }
  const data = readJSON(SUMMARY)
  const out = {}
  for (const k of Object.keys(data)) {
    const entry = data[k]
    let imgs = processGallery(entry)
    if (minWidth > 0) {
      const galleryMinWidth = k === 'ncas_symposium_gallery_2019' ? Math.min(minWidth, 500) : minWidth
      imgs = imgs.filter(img => {
        const rel = path.relative(ROOT, img.file)
        const abs = path.resolve(ROOT, rel)
        if (!fs.existsSync(abs)) return false
        const d = getDimensions(abs)
        return d && d.w >= galleryMinWidth
      })
    }
    out[k] = { page: entry.page, images: imgs }
  }
  writeJSON(OUT, out)
  console.log('Wrote cleaned summary to', OUT)
  // counts
  let before = 0, after = 0
  for (const k of Object.keys(data)) {
    before += (data[k].images || []).length
    after += (out[k].images || []).length
  }
  console.log('Images before:', before, 'after:', after)
}

main()
