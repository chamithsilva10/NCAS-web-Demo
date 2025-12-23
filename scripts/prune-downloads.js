#!/usr/bin/env node
const fs = require('fs')
const path = require('path')

const ROOT = path.resolve(process.cwd(), 'downloaded-galleries')
const CLEANED = path.join(ROOT, 'summary.cleaned.json')

function readJSON(p) {
  return JSON.parse(fs.readFileSync(p, 'utf8'))
}

function collectChosenFiles() {
  const data = readJSON(CLEANED)
  const chosen = new Set()
  for (const k of Object.keys(data)) {
    const imgs = data[k].images || []
    for (const img of imgs) {
      if (img.file) {
        const rel = path.relative(ROOT, img.file)
        chosen.add(rel)
      }
    }
  }
  return chosen
}

function walk(dir, callback) {
  const files = fs.readdirSync(dir)
  for (const f of files) {
    const full = path.join(dir, f)
    const stat = fs.statSync(full)
    if (stat.isDirectory()) {
      walk(full, callback)
    } else {
      callback(full)
    }
  }
}

function main() {
  if (!fs.existsSync(CLEANED)) {
    console.error('summary.cleaned.json not found')
    process.exit(1)
  }
  const chosen = collectChosenFiles()
  console.log(`Chosen files: ${chosen.size}`)
  let deleted = 0
  walk(ROOT, (full) => {
    const rel = path.relative(ROOT, full)
    if (!chosen.has(rel)) {
      console.log(`Deleting: ${rel}`)
      fs.unlinkSync(full)
      deleted++
    }
  })
  console.log(`Deleted ${deleted} files`)
}

main()
