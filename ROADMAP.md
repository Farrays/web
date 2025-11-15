# 🗺️ ROADMAP - Farray's Center Web

## 📋 Tareas Pendientes - Página Danza Barcelona

### 🔴 ALTA PRIORIDAD

#### Imágenes Open Graph
- [ ] **Crear imagen OG específica para Danza Barcelona** (`og-danza-barcelona.jpg`)
  - Dimensiones: 1200x630px
  - Incluir: foto de ballet/contemporáneo, texto "Clases de Danza en Barcelona"
  - Subtexto: "Ballet Clásico Cubano · Contemporáneo · Jazz"
  - Logo Farray's Center
  - Colores de marca (#c82260)
  - Ubicación: `/public/images/og-danza-barcelona.jpg`
  - **Estado actual:** Usando `og-classes.jpg` temporalmente (SEO.tsx línea 50)

#### Imágenes de Estilos de Danza
- [ ] **Crear imágenes específicas para cada estilo** (opcional pero recomendado)
  - Ballet Clásico: Foto de ballet con técnica cubana
  - Danza Contemporánea: Foto de movimiento contemporáneo
  - Modern Jazz: Foto de jazz moderno
  - Afro Jazz: Foto de afro jazz
  - Afro Contemporáneo: Foto de fusión afro-contemporánea
  - Stretching: Foto de flexibilidad
  - **Estado actual:** Todas las cards usan la misma imagen genérica
  - **Impacto:** Falta diferenciación visual entre estilos

### 🟡 MEDIA PRIORIDAD

#### SEO & Configuración
- [ ] Verificar que `/clases/danza-barcelona` está en `sitemap.xml`
- [ ] Verificar configuración en `robots.txt`
- [ ] Configurar prerender en Vercel para esta ruta específica
- [ ] Añadir página a `prerender.mjs` si no está

#### Optimización de Rendimiento
- [ ] Considerar WebP/AVIF para imágenes (mejor compresión)
- [ ] Evaluar implementar sprite SVG para iconos (reducir bundle size)
- [ ] Agregar preload para hero background si es necesario

### 🟢 BAJA PRIORIDAD

#### Accesibilidad
- [ ] Agregar "Skip to content" link (mejora accesibilidad)
- [ ] Revisar contraste en modo alto contraste del sistema

#### UX Mejoras
- [ ] Considerar agregar testimonios de estudiantes de danza
- [ ] Evaluar agregar galería de fotos de clases reales
- [ ] Considerar video promocional de clases

---

## ✅ Completado

- ✅ Implementación completa de traducciones ES
- ✅ Schema Markup (Breadcrumb, ItemList, FAQPage, Course)
- ✅ Meta tags SEO configurados
- ✅ 10 FAQs optimizadas
- ✅ Cards con hover descriptions
- ✅ Lazy loading en imágenes
- ✅ Accesibilidad ARIA labels
- ✅ Responsive design completo
- ✅ AnimatedCounter para stats
- ✅ 6 cards de diferenciación (Instructors, Method, Cuban School, Career, Prestige, Facilities)
- ✅ CTA optimizado para conversión y SEO ("principiantes hasta profesionales")
- ✅ Breadcrumbs funcionales
- ✅ Internal linking a páginas de estilos

---

## 📝 Notas

- Última actualización: 2025-11-15
- Página en branch: `claude/ensure-branch-work-01ChnXE28Q3nTw6CQWyPFZLM`
- Puntuación global actual: **9.0/10**
