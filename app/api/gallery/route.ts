import { NextRequest } from 'next/server'
import fs from 'fs'
import path from 'path'

export async function GET(req: NextRequest) {
  const url = req.nextUrl
  const p = url.searchParams.get('path')
  if (!p) return new Response('Missing path', { status: 400 })

  const base = path.resolve(process.cwd(), 'downloaded-galleries')
  const filePath = path.join(base, p)

  // Prevent path traversal
  if (!filePath.startsWith(base)) return new Response('Invalid path', { status: 400 })

  try {
    const stat = await fs.promises.stat(filePath)
    if (!stat.isFile()) throw new Error('Not a file')
    const nodeStream = fs.createReadStream(filePath)
    const stream = new ReadableStream({
      start(controller) {
        nodeStream.on('data', (chunk) => controller.enqueue(chunk))
        nodeStream.on('end', () => controller.close())
        nodeStream.on('error', (err) => controller.error(err))
      }
    })
    const ext = path.extname(filePath).toLowerCase()
    const mimeMap: Record<string, string> = {
      '.jpg': 'image/jpeg',
      '.jpeg': 'image/jpeg',
      '.png': 'image/png',
      '.gif': 'image/gif',
      '.webp': 'image/webp',
      '.svg': 'image/svg+xml',
      '.pdf': 'application/pdf',
    }
    const contentType = mimeMap[ext] || 'application/octet-stream'

    return new Response(stream, {
      headers: {
        'content-type': contentType,
        'cache-control': 'public, max-age=86400',
      },
    })
  } catch (e) {
    return new Response('Not found', { status: 404 })
  }
}
