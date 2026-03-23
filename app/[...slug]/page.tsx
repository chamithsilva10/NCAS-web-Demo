import { notFound } from "next/navigation"

export default function CmsFallbackPage() {
  // Unknown routes are resolved here so the layout-level CMS override can render
  // published custom pages created from the admin dashboard.
  notFound()
}
