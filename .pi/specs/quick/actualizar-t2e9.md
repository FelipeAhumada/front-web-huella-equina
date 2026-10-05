# Quick: Actualizar episodio principal T2E9

## What
Publicar el video de YouTube `MGZuwv4iBOg` como episodio principal de la Temporada 2 en la home y agregarlo al catálogo de episodios. T2E8 pasa a las cards anteriores.

## Files
- `data/episodes.ts`
- `components/seasons-section.tsx`

## DoD
- [x] T2E9 aparece como episodio principal con título, descripción y miniatura correctos.
- [x] T2E8 aparece en las cards junto con los episodios anteriores.
- [x] T2E9 aparece en el catálogo `/temporadas`.
- [x] El build local termina correctamente.
- [x] La aplicación queda levantada localmente para verificación.

## Estado de ejecución
- Build local: `npm run build` aprobado.
- Servidor local: `http://localhost:3001` levantado y `/temporadas` responde HTTP 200 con T2E9 presente.
- PR abierto hacia `main`: [#8](https://github.com/FelipeAhumada/front-web-huella-equina/pull/8).
- Despliegue a producción aprobado en Vercel con `--scope felipeahumadaaraya-gmailcoms-projects`.
- Deployment: `dpl_242ahXJYuLtYBiWGmyDtfAvjnC3T`.
- URL de producción: `https://huellaequina.cl`.

## Status: DONE
