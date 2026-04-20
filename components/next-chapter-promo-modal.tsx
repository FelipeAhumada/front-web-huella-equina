"use client"

import { useState } from "react"
import { getNextChapterVideoUrl, isNextChapterPromoActiveNow } from "@/lib/next-chapter-video"
import { X } from "lucide-react"

export function NextChapterPromoModal() {
  const [open, setOpen] = useState(false)

  if (!open || !isNextChapterPromoActiveNow()) {
    return null
  }

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/75 p-4">
      <div className="relative w-full max-w-4xl overflow-hidden rounded-lg bg-black shadow-2xl">
        <button
          type="button"
          aria-label="Cerrar modal"
          onClick={() => setOpen(false)}
          className="absolute top-3 right-3 z-10 rounded-full bg-black/60 p-2 text-white hover:bg-black/80"
        >
          <X className="h-5 w-5" />
        </button>
        <div className="aspect-video w-full">
          <video className="h-full w-full" src={getNextChapterVideoUrl()} controls autoPlay muted playsInline />
        </div>
      </div>
    </div>
  )
}
