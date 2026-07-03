import path from "path"

const GALLERY_ROOT_NAME = "downloaded-galleries"

function toPosixPath(value: string) {
  return value.replace(/\\/g, "/")
}

export function galleryFileToRelativePath(filePath: string): string {
  const normalized = toPosixPath(filePath)
  const marker = `/${GALLERY_ROOT_NAME}/`
  const markerIndex = normalized.indexOf(marker)

  if (markerIndex !== -1) {
    return normalized.slice(markerIndex + marker.length)
  }

  if (path.isAbsolute(filePath)) {
    const base = path.resolve(process.cwd(), GALLERY_ROOT_NAME)
    return path.relative(base, filePath)
  }

  return filePath
}