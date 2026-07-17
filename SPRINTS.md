# Sistema de Sprints — TCGPlayer Reimagined

Este documento describe el plan de desarrollo organizado en **sprints de 2 semanas** cada uno. El proyecto está dividido en **4 sprints** (~8 semanas en total) para llegar a un producto funcional y desplegable.

---

## Sprint 1: Fundamentos y Core UI
> **Duración:** Semana 1–2 | **Issues:** #1–#6

| # | Issue | Prioridad | Tipo |
|---|-------|-----------|------|
| 1 | Crear README completo del proyecto | 🔴 Critical | Documentación |
| 2 | Configurar estructura de rutas y navegación principal | 🔴 Critical | Feature |
| 3 | Definir sistema de diseño (tokens, colores, tipografía) | 🟡 High | Design |
| 4 | Implementar header con logo MICO y navegación | 🟡 High | Feature / Design |
| 5 | Crear página Home con hero section y categorías | 🟡 High | Feature / Design |
| 6 | Organizar estructura de carpetas del proyecto | 🟢 Medium | Refactor |

---

## Sprint 2: Funcionalidad Principal
> **Duración:** Semana 3–4 | **Issues:** #7–#12

| # | Issue | Prioridad | Tipo |
|---|-------|-----------|------|
| 7 | Implementar sistema de búsqueda de cartas/productos | 🟡 High | Feature |
| 8 | Desarrollar página de detalle de producto | 🟡 High | Feature |
| 9 | Implementar carrito de compras funcional | 🔴 Critical | Feature |
| 10 | Desarrollar flujo de checkout completo | 🔴 Critical | Feature |
| 11 | Crear sistema de filtros y categorías de productos | 🟢 Medium | Feature |
| 12 | Integrar API de datos de cartas (Scryfall/TCGPlayer) | 🟢 Medium | Feature / Infra |

---

## Sprint 3: Contenido y Blog
> **Duración:** Semana 5–6 | **Issues:** #13–#17

| # | Issue | Prioridad | Tipo |
|---|-------|-----------|------|
| 13 | Desarrollar sección de blog/artículos | 🟡 High | Feature / Docs |
| 14 | Página de organización de torneos locales | 🟢 Medium | Feature |
| 15 | Implementar sistema de newsletter/suscripción | ⚪ Low | Feature |
| 16 | Optimizar SEO del sitio | 🟢 Medium | Docs / Infra |
| 17 | Crear sistema de reseñas y ratings | ⚪ Low | Feature |

---

## Sprint 4: Pulido y Deploy
> **Duración:** Semana 7–8 | **Issues:** #18–#23

| # | Issue | Prioridad | Tipo |
|---|-------|-----------|------|
| 18 | Hacer el sitio completamente responsive | 🔴 Critical | Design |
| 19 | Implementar animaciones y transiciones suaves | 🟢 Medium | Design |
| 20 | Accesibilidad (a11y) y cumplimiento WCAG | 🟡 High | Refactor |
| 21 | Configurar CI/CD y deploy automático | 🔴 Critical | Infrastructure |
| 22 | Testing y QA del proyecto completo | 🟡 High | Bug / QA |
| 23 | Landing page final y branding MICO | 🟡 High | Design / Feature |

---

## Labels

| Label | Descripción |
|-------|-------------|
| `priority:critical` | Bloqueador, debe hacerse YA |
| `priority:high` | Importante para el sprint actual |
| `priority:medium` | Mejora importante pero no urgente |
| `priority:low` | Nice-to-have, se hace si da tiempo |
| `feature` | Nueva funcionalidad |
| `bug` | Algo no funciona correctamente |
| `documentation` | Documentación o README |
| `refactor` | Mejora de código existente |
| `design` | Trabajo de diseño visual/CSS |
| `infrastructure` | Config, deploy, CI/CD |

---

## Cómo usar este sistema

1. **Mira los milestones** en GitHub para ver el progreso de cada sprint: [Milestones](https://github.com/NotNexzu/TCGplayer-Reimagined/milestones)
2. **Filtra por label** para ver tareas por prioridad o tipo: [Labels](https://github.com/NotNexzu/TCGplayer-Reimagined/labels)
3. **Abre un issue** del sprint actual para empezar a trabajar en él
4. **Mueve el issue a In Progress** cuando empieces a trabajar
5. **Cierra el issue** cuando termines (con pull request si aplica)
6. **Avanza al siguiente sprint** cuando todos los issues del actual estén cerrados

---

*Última actualización: Julio 2026*
