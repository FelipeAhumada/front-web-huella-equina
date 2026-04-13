/**
 * Reproductor embebido en Temporadas (sin modal).
 * Activa con NEXT_PUBLIC_SEASONS_INLINE_PLAYER_ACTIVE=true al publicar un capítulo nuevo.
 * Los domingos no se muestra el embed (solo miniatura + enlace a YouTube).
 */
export function shouldShowSeasonsInlinePlayerNow(): boolean {
  const raw = process.env.NEXT_PUBLIC_SEASONS_INLINE_PLAYER_ACTIVE?.trim().toLowerCase()
  const enabled = raw === "true" || raw === "1"
  if (!enabled) return false
  if (typeof window === "undefined") return false
  return new Date().getDay() !== 0
}
