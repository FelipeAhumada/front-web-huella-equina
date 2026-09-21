# Quick: Actualizar episodio principal T2E7

## What
Publicar el video de YouTube `azFnVTyT9ns` como episodio principal de la Temporada 2 en la home y agregarlo al catálogo de episodios. T2E6 pasa a las cards anteriores.

## Files
- `data/episodes.ts`
- `components/seasons-section.tsx`

## Plan de ejecución
1. Agregar T2E7 con el título, descripción y miniatura del video publicado.
2. Cambiar el episodio destacado de la home desde T2E6 a T2E7.
3. Mantener T2E6 y los episodios anteriores en las cards.
4. Ejecutar lint/build y revisar el diff.
5. Crear commit, actualizar el PR y dejar registro del resultado.

## DoD
- [x] T2E7 aparece como episodio principal con título, descripción y miniatura correctos.
- [x] T2E6 aparece en las cards junto con los episodios anteriores.
- [x] T2E7 aparece en el catálogo `/temporadas`.
- [x] El build local termina correctamente.
- [ ] El PR queda actualizado y listo para revisión.

## Estado de ejecución
- Rama: `feat/actualizar-t2e7`
- Commit: `0810c81`
- Build: `npm run build` aprobado.
- Lint: no ejecutable porque `eslint` no está instalado en el entorno (`eslint: command not found`).
- Rama publicada en `origin`; falta crear/actualizar el PR desde GitHub.
- Despliegue a producción: aprobado en Vercel con `--scope felipeahumadaaraya-gmailcoms-projects`.
- Deployment: `dpl_EKdBwvhuMAAJMagJrA3LJ6uvpcvk`.
- URL de producción: `https://huellaequina.cl`.
- Verificación HTTP: T2E7 visible en `/` y `/temporadas`.

## Status: IN_PROGRESS
