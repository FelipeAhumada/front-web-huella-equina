/**
 * URL del avance.
 */
export const DEFAULT_NEXT_CHAPTER_VIDEO_URL =
  "https://res.cloudinary.com/dqbsozfek/video/upload/q_auto/f_auto/v1776306188/20260419_lhvsc2.mp4"

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
