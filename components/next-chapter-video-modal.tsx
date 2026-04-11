"use client"

import { useCallback, useEffect, useRef, useState } from "react"
import { createPortal } from "react-dom"
import { X } from "lucide-react"
import { getNextChapterVideoUrl } from "@/lib/next-chapter-video"

export function NextChapterVideoModal() {
  const videoSrc = getNextChapterVideoUrl()
  const [open, setOpen] = useState(false)
  const [mounted, setMounted] = useState(false)
  const videoRef = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    setMounted(true)
  }, [])

  const close = useCallback(() => {
    setOpen(false)
    const v = videoRef.current
    if (v) {
      v.pause()
      v.removeAttribute("src")
      v.load()
    }
  }, [])

  useEffect(() => {
    if (!videoSrc) return

    let cancelled = false
    const show = () => {
      if (!cancelled) setOpen(true)
    }

    const afterPaint = () => {
      requestAnimationFrame(() => {
        requestAnimationFrame(show)
      })
    }

    if (document.readyState === "complete") {
      afterPaint()
    } else {
      window.addEventListener("load", show, { once: true })
    }

    const fallbackMs = 2500
    const fallbackId = window.setTimeout(show, fallbackMs)

    return () => {
      cancelled = true
      window.removeEventListener("load", show)
      window.clearTimeout(fallbackId)
    }
  }, [videoSrc])

  useEffect(() => {
    if (!open || !videoRef.current || !videoSrc) return
    const v = videoRef.current
    v.muted = true
    const p = v.play()
    if (p !== undefined) {
      p.catch(() => {
        /* autoplay: muted + play() suele bastar */
      })
    }
  }, [open, videoSrc])

  if (!mounted || !open) return null

  const modal = (
    <div
      className="fixed inset-0 z-[200] bg-black/90 flex items-center justify-center p-4"
      role="dialog"
      aria-modal="true"
      aria-labelledby="next-chapter-video-title"
      onClick={close}
    >
      <button
        type="button"
        onClick={close}
        className="absolute top-4 right-4 text-white hover:text-primary transition-colors z-[201]"
        aria-label="Cerrar"
      >
        <X className="w-8 h-8" />
      </button>
      <div className="w-full max-w-5xl" onClick={(e) => e.stopPropagation()}>
        <h2
          id="next-chapter-video-title"
          className="font-serif text-xl md:text-2xl font-bold text-white text-center mb-4"
        >
          Próximo capítulo
        </h2>
        <div className="aspect-video rounded-lg overflow-hidden bg-black ring-1 ring-white/10">
          <video
            ref={videoRef}
            src={videoSrc}
            className="w-full h-full object-contain"
            controls
            playsInline
            autoPlay
            muted
            onError={() => {
              if (process.env.NODE_ENV === "development") {
                console.warn(
                  "[NextChapterVideoModal] No se pudo cargar el video. Revisa la URL o la red:",
                  videoSrc
                )
              }
            }}
          />
        </div>
        <p className="text-white/80 text-sm text-center mt-3">
          Activa el sonido en los controles del video si lo deseas.
        </p>
      </div>
    </div>
  )

  return createPortal(modal, document.body)
}
