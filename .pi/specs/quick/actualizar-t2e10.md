# Quick: Actualizar episodio principal T2E10

## What
Publicar el video de YouTube `v8Wfs8mHy3E` como episodio principal de la Temporada 2 en la home y agregarlo al catálogo de episodios. T2E9 pasa a las cards anteriores.

## Files
- `data/episodes.ts`
- `components/seasons-section.tsx`

## DoD
- [x] T2E10 aparece como episodio principal con título, descripción y miniatura correctos.
- [x] T2E9 aparece en las cards junto con los episodios anteriores.
- [x] T2E10 aparece en el catálogo `/temporadas`.
- [x] El build local termina correctamente.
- [x] La aplicación queda levantada localmente para verificación.

## Verificación
- Build local: `npm run build` aprobado.
- Servidor local: `http://localhost:3001` levantado.
- `/` y `/temporadas` responden HTTP 200 y contienen el video `v8Wfs8mHy3E`.
- `npm run lint` no ejecutable porque el proyecto no tiene el binario `eslint` instalado.

## Status: DONE
