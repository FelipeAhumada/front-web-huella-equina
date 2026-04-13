/**
 * URL del avance (Cloudinary u otra). El modal global de “próximo capítulo” fue retirado;
 * la URL queda disponible por si quieres usarla en otra sección o con un flag en Vercel.
 * Para reactivar promoción explícita al subir video: redeploy con
 * NEXT_PUBLIC_NEXT_CHAPTER_PROMO_ACTIVE=true (consumir en tu componente).
 */
export const DEFAULT_NEXT_CHAPTER_VIDEO_URL =
  "https://res.cloudinary.com/dqbsozfek/video/upload/v1775863843/WhatsApp_Video_2026-04-10_at_10.56.52_am2xim.mp4"

/** @deprecated Usar DEFAULT_NEXT_CHAPTER_VIDEO_URL o variables de entorno. */
export const DEFAULT_NEXT_CHAPTER_CLOUDINARY_PUBLIC_ID =
  "WhatsApp_Video_2026-04-10_at_10.56.52_am2xim"

/**
 * URL del video: NEXT_PUBLIC_NEXT_CHAPTER_VIDEO_URL si está definida;
 * si no, armar con cloud + public ID; si no hay cloud, usar DEFAULT_NEXT_CHAPTER_VIDEO_URL.
 */
export function getNextChapterVideoUrl(): string {
  const full = process.env.NEXT_PUBLIC_NEXT_CHAPTER_VIDEO_URL?.trim()
  if (full) return full

  const cloud = process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME?.trim()
  const publicId =
    process.env.NEXT_PUBLIC_NEXT_CHAPTER_CLOUDINARY_PUBLIC_ID?.trim() ||
    DEFAULT_NEXT_CHAPTER_CLOUDINARY_PUBLIC_ID

  if (cloud) {
    return `https://res.cloudinary.com/${cloud}/video/upload/${publicId}.mp4`
  }

  return DEFAULT_NEXT_CHAPTER_VIDEO_URL
}
