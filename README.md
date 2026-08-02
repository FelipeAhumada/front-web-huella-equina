# Huella Equina — Sitio web

Sitio institucional y de difusión del programa **Huella Equina**: plataforma audiovisual y educativa que visibiliza las disciplinas ecuestres con foco en el **bienestar animal** y el respeto hacia el caballo.

**Repositorio:** [github.com/FelipeAhumada/front-web-huella-equina](https://github.com/FelipeAhumada/front-web-huella-equina)  
**Producción:** [huellaequina.cl](https://huellaequina.cl)

---

## De qué trata el proyecto

El sitio presenta la marca, el propósito del programa, episodios de **Temporadas** (YouTube embebido o enlace según configuración), la diferencia entre **Patrocinadores** (inversión en el programa: federaciones ecuestres) y **Auspiciadores** (marcas con franjas en el programa), secciones de **bienestar animal**, **comunidad y familia**, y datos de **contacto**. Incluye navegación fija responsive, enlaces a redes (Instagram, YouTube, TikTok) y crédito de desarrollo en el pie de página.

---

## Contenido y secciones (orden en la home)

| Sección | Descripción breve |
|--------|-------------------|
| **Header** | Logo, menú a todas las anclas, RRSS (móvil/tablet: menú hamburguesa; escritorio: barra completa). |
| **Hero** | Mensaje principal, CTAs a Temporadas / Ver videos, indicador de scroll. |
| **¿Quiénes somos?** | Historia, valores y propósito del programa. |
| **Patrocinadores** | Federación Ecuestre de Chile y Federación de Criadores (logos y enlaces). |
| **Temporadas** | Video principal T2 (Cloudinary, autoplay con sonido, pausa al salir de vista) + cards de episodios T2. Botón "Ver todas las temporadas" → `/temporadas`. |
| **Bienestar animal** | Compromiso y pilares (cuidado, veterinario, entrenamiento, etc.). |
| **Comunidad y familia** | Imagen, pilares y testimonios. |
| **Auspiciadores** | Marcas con franjas en el programa (tarjetas con logos). Contáctanos → escobarproduccionestv@gmail.com |
| **Footer** | Logo, RRSS, enlaces, temporadas (T1 12 caps / T2 nueva), contacto Escobar Producciones, crédito SofTech. |

### Página `/temporadas`

Página dedicada con **todas las temporadas** en grid de cards. Incluye filtro por temporada (Todas / T1 / T2). Usa el mismo Header y Footer del sitio principal. Datos centralizados en `data/episodes.ts`.

### Modal Promo (avance siguiente capítulo)

Se abre automáticamente a los **8 segundos** de visitar el sitio (excepto domingos). Video desde Cloudinary con sonido activado. Cerrable con botón X.

---

## Cómo está armado (técnico)

- **Framework:** [Next.js](https://nextjs.org/) 16 (App Router)
- **UI:** React 19, [Tailwind CSS](https://tailwindcss.com/) 4, componentes estilo shadcn/ui (`components/ui/`)
- **Fuentes / estilo:** paleta café / crema del tema (`app/globals.css`), tipografía serif para títulos
- **Rutas:**
  - `/` — página principal (`app/page.tsx`); secciones como componentes en `components/*-section.tsx`
  - `/temporadas` — página dedicada con filtros (`app/temporadas/page.tsx`)
- **Datos:** episodios centralizados en `data/episodes.ts` (T1: 12 episodios, T2: en curso)
- **Videos:** alojados en Cloudinary (cloud: `dqbsozfek`)
- **Estáticos:** imágenes y logos en `public/images/`
- **Deploy:** Vercel (auto-deploy al mergear a `main`)

### Actualizar la sección Temporadas (nuevo capítulo)

1. Agregar el episodio en `data/episodes.ts` con `season`, `episodeNumber`, `id` de YouTube, `title`, `description`, `image` (thumbnail).
2. Si es un episodio próximo a estrenarse: agregar `upcoming: true` y `premiereLabel`.
3. Una vez estrenado: remover `upcoming` y `premiereLabel`.

### Actualizar video principal o modal

- **Video principal T2:** cambiar URL en `components/seasons-section.tsx` (atributo `src` del `<video>`).
- **Video modal promo:** cambiar URL en `lib/next-chapter-video.ts` (`DEFAULT_NEXT_CHAPTER_VIDEO_URL`).

### Auspiciadores

Agregar/editar en el array `marcas` de `components/partners-section.tsx`. Logos en `public/images/auspiciadores/`.

### Scripts

```bash
npm install
npm run dev    # desarrollo — http://localhost:3000
npm run build  # compilación de producción
npm run start  # servidor tras build
npm run lint   # ESLint
```

### Docker (desarrollo)

```bash
docker compose up -d --build   # levantar
docker compose down            # detener
```

---

## Contacto del programa

- **Sebastian Escobar Villarreal** — Escobar Producciones
- Email: escobarproduccionestv@gmail.com
- Web: www.huellaequina.cl
- Tel: +56 9 72279332

---

## Alcance frente a la cotización de marketing digital

En `docs/` se encuentra la cotización **«Cotización Huella Equina 20260330»** (marketing digital: diagnóstico SEO/SEM/AEO/RRSS y propuesta de servicios).

> **Importante:** ese paquete de marketing **no está aprobado aún**; depende de la **aprobación del cliente**.

| Ítem cotizado | Relación con este proyecto |
|---------------|----------------------------|
| **SEO + AEO** | Este repo es la base del sitio; la implementación completa SEO/AEO corresponde al entregable del servicio cotizado, pendiente de contratación. |
| **SEM** | Fuera del código de este front; requiere cuentas, pauta y páginas acordadas con el cliente. |
| **Email corporativo** | Infraestructura / DNS; no forma parte del código Next.js. |
| **Producción de shorts** | Contenido audiovisual; el sitio solo incrusta o enlaza videos. |
| **Estrategia RRSS** | Consultoría y calendario; el sitio enlaza perfiles ya existentes. |

---

## Pendientes / mejoras opcionales

- [ ] Logo productora (Studio Content Pro) — esperando formato webp para habilitar en footer.
- [ ] Completar URLs de sitio web en tarjetas de auspiciadores donde aún no estén definidas.
- [ ] Sustituir enlaces placeholder de Política de Privacidad y Términos de Uso.
- [ ] Ajustes de SEO (títulos, descripciones, Open Graph, sitemap, robots.txt) una vez aprobado servicio.
- [ ] Verificar URLs de Dragfarma, Kali Derma, Idal y Lazka (son placeholder hasta confirmar).

---

## Créditos

Desarrollo web: **SofTech** / [Soft-Innova](https://www.soft-innova.com).

---

## Licencia

Proyecto privado para Huella Equina. Todos los derechos reservados salvo acuerdo explícito por escrito.
