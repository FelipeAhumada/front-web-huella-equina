/**
 * URL del avance – Temporada 2.
 * En desarrollo local se usa el archivo de public/videos/.
 * Para producción subir a Cloudinary y reemplazar la URL.
 */
export const DEFAULT_NEXT_CHAPTER_VIDEO_URL =
  "https://res.cloudinary.com/dqbsozfek/video/upload/v1785640402/WhatsApp_Video_2026-08-01_at_1.51.39_PM_rkimps.mp4"

/**
 * Activa la promo siempre, excepto domingos.
 * (0 = domingo en Date.getDay()).
 */
export function isNextChapterPromoActiveNow(date = new Date()): boolean {
  return date.getDay() !== 0
}

export function getNextChapterVideoUrl(): string {
  return DEFAULT_NEXT_CHAPTER_VIDEO_URL
}
