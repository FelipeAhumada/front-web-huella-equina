# Huella Equina — Sitio web

Sitio institucional y de difusión del programa **Huella Equina**: plataforma audiovisual y educativa que visibiliza las disciplinas ecuestres con foco en el **bienestar animal** y el respeto hacia el caballo.

**Repositorio:** [github.com/FelipeAhumada/front-web-huella-equina](https://github.com/FelipeAhumada/front-web-huella-equina)

---

## De qué trata el proyecto

El sitio presenta la marca, el propósito del programa, episodios de **Temporadas** (contenido en video con modal de YouTube), la diferencia entre **Patrocinadores** (inversión en el programa: federaciones ecuestres) y **Auspiciadores** (marcas con franjas en el programa), secciones de **bienestar animal**, **comunidad y familia**, y datos de **contacto**. Incluye navegación fija responsive, enlaces a redes (Instagram, YouTube, TikTok) y crédito de desarrollo en el pie de página.

---

## Contenido y secciones (orden en la home)

| Sección | Descripción breve |
|--------|-------------------|
| **Header** | Logo, menú a todas las anclas, RRSS (móvil/tablet: menú hamburguesa; escritorio: barra completa). |
| **Hero** | Mensaje principal, CTAs a Temporadas / Ver videos, indicador de scroll. |
| **¿Quiénes somos?** | Historia, valores y propósito del programa. |
| **Patrocinadores** | Federación Ecuestre de Chile y Federación de Criadores (logos y enlaces). |
| **Temporadas** | Reproductor destacado + miniaturas (E1 Horse Ball, E2 Chile Barrilete, E3 Enduro Ecuestre). |
| **Bienestar animal** | Compromiso y pilares (cuidado, veterinario, entrenamiento, etc.). |
| **Comunidad y familia** | Imagen, pilares y testimonios. |
| **Auspiciadores** | Marcas con franjas en el programa (tarjetas con iniciales o enlaces donde aplica). |
| **Footer** | Logo, enlaces, temporadas, contacto, crédito SofTech / Soft-Innova. |

---

## Cómo está armado (técnico)

- **Framework:** [Next.js](https://nextjs.org/) 16 (App Router)
- **UI:** React 19, [Tailwind CSS](https://tailwindcss.com/) 4, componentes estilo shadcn/ui (`components/ui/`)
- **Fuentes / estilo:** paleta café / crema del tema (`app/globals.css`), tipografía serif para títulos
- **Rutas:** página principal en `app/page.tsx`; secciones como componentes en `components/*-section.tsx`
- **Estáticos:** imágenes y logos en `public/images/`

### Scripts

```bash
npm install
npm run dev    # desarrollo — http://localhost:3000
npm run build  # compilación de producción
npm run start  # servidor tras build
npm run lint   # ESLint
```

---

## Alcance frente a la cotización de marketing digital

En `docs/` se encuentra la cotización **«Cotización Huella Equina 20260330»** (marketing digital: diagnóstico SEO/SEM/AEO/RRSS y propuesta de servicios).

> **Importante:** ese paquete de marketing **no está aprobado aún**; depende de la **aprobación del cliente**. Lo siguiente resume el **alcance cotizado** frente a este repositorio (sitio front):

| Ítem cotizado | Relación con este proyecto |
|---------------|----------------------------|
| **SEO + AEO** (auditoría, on-page, keywords, FAQs, schema) | Este repo es la base del sitio; la **implementación completa** SEO/AEO (metadata avanzada, FAQs estructuradas, datos estructurados, blog indexable, etc.) corresponde al **entregable del servicio cotizado**, pendiente de contratación y ejecución. |
| **SEM** (Google/Meta, remarketing, landings) | **Fuera** del código de este front; requiere cuentas, pauta y páginas acordadas con el cliente. |
| **Email corporativo** (@huellaequina.cl) | **Infraestructura / DNS**; no forma parte del código Next.js. |
| **Producción de shorts** (30 piezas por capítulo cotizado) | **Contenido audiovisual**; el sitio solo **incrusta o enlaza** videos según lo definido en Temporadas. |
| **Estrategia RRSS + crecimiento** | **Consultoría y calendario**; el sitio enlaza perfiles ya existentes. |

En síntesis: **este repositorio cubre el sitio web de presentación y contenidos acordados en desarrollo**; los ítems de la cotización de marketing son **trabajos complementarios** a aprobar y ejecutar por fases.

---

## Pendientes habituales / mejoras opcionales

- Completar **URLs** de sitio web en tarjetas de auspiciadores donde aún no estén definidas.
- Sustituir enlaces placeholder de **Política de Privacidad** y **Términos de Uso** por páginas o PDF reales.
- Ajustes de **SEO** (títulos, descripciones, Open Graph, sitemap, `robots.txt`) alineados al servicio SEO+AEO una vez aprobado.
- **Despliegue** (Vercel u otro) y dominio **huellaequina.cl** según decisión del cliente.

---

## Créditos

Desarrollo web: **SofTech** / [Soft-Innova](https://www.soft-innova.com).

---

## Licencia

Proyecto privado para Huella Equina. Todos los derechos reservados salvo acuerdo explícito por escrito.
