# 🛒 Smart Shopping List (AppLista)

[![CI Status](https://github.com/Vyldrix/AppLista/workflows/CI/badge.svg)](https://github.com/Vyldrix/AppLista/actions)
[![Test Coverage](https://img.shields.io/badge/tests-208%20passing-brightgreen)](https://github.com/Vyldrix/AppLista/actions)
[![Accessibility](https://img.shields.io/badge/accessibility-WCAG%202.1%20AA%2FAAA-blue)](https://www.w3.org/WAI/standards-guidelines/wcag/)
[![PWA](https://img.shields.io/badge/PWA-offline--first-orange)](https://vite-pwa-org.netlify.app/)
[![Vue 3](https://img.shields.io/badge/Vue-3.5-brightgreen)](https://vuejs.org/)
[![Tailwind CSS 4](https://img.shields.io/badge/Tailwind-CSS%204-38bdf8)](https://tailwindcss.com/)

> Una Progressive Web App (PWA) moderna, offline-first y altamente accesible para gestionar listas de compras en el supermercado con funciones inteligentes como reconocimiento de voz, escaneo de códigos de barra, autocategorización de productos y optimización visual de alto contraste.

**🌐 Demo Original:** [https://smart-shopper.casdoorn.nl](https://smart-shopper.casdoorn.nl)  
**📂 Repositorio del Proyecto:** [https://github.com/Vyldrix/AppLista](https://github.com/Vyldrix/AppLista)

---

## 📋 Tabla de Contenidos

- [✨ Características Principales](#-características-principales)
- [🔄 Cambios Recientes Realizados](#-cambios-recientes-realizados)
- [🎯 Lista de Mejoras y Roadmap (Backlog Priorizado)](#-lista-de-mejoras-y-roadmap-backlog-priorizado)
- [🚀 Inicio Rápido](#-inicio-rápido)
- [🛠️ Scripts de Desarrollo](#️-scripts-de-desarrollo)
- [🧪 Pruebas y Calidad de Código](#-pruebas-y-calidad-de-código)
- [🏗️ Stack Tecnológico](#️-stack-tecnológico)
- [📖 Guía de Uso](#-guía-de-uso)
- [🚢 Despliegue](#-despliegue)
- [⚖️ Autoría, Derechos y Reconocimientos](#️-autoría-derechos-y-reconocimientos)

---

## ✨ Características Principales

### 📱 PWA Offline-First

- **Operatividad 100% sin conexión** — Creá, editá y gestioná tus listas sin necesidad de acceso a internet.
- **Service Worker con caché de 4 niveles** — Gestión inteligente de recursos estáticos, fuentes y páginas visitadas.
- **Instalable como aplicación nativa** — Añadila a la pantalla de inicio en dispositivos móviles o escritorio.
- **Actualizaciones automáticas** — Sincronización silenciosa en segundo plano al recuperar la conexión.

### 🎤 Entrada Rápida de Artículos

- **Dictado por voz** — Agregá artículos con manos libres utilizando la Web Speech API.
- **Procesamiento de lenguaje natural** — Reconoce frases naturales como _"comprar 2 botellas de leche y una docena de huevos"_.
- **Entrada múltiple por texto** — Pegá o escribí listas completas separadas por comas.

### 📸 Escáner de Códigos de Barra

- **Escaneo con la cámara del dispositivo** — Detección inmediata mediante biblioteca ZXing.
- **Base de datos local de productos** — Guarda automáticamente tus artículos escaneados para reconocimientos instantáneos futuros.
- **Carga manual alternativa** — Posibilidad de ingresar productos manualmente si no se dispone de cámara o código legible.

### 🏷️ Categorización Inteligente

- **Autocategorización** — Los productos se agrupan automáticamente según la sección correspondiente del supermercado (Lácteos, Verdulería, Panadería, etc.).
- **Aprendizaje adaptativo** — Si cambiás un producto de categoría, la aplicación aprende tu preferencia para las próximas ocasiones.
- **Categorías personalizadas** — Creación de nuevas categorías con colores e iconos propios.
- **Orden por disposición del supermercado** — Ordená las secciones para recorrer el supermercado sin tener que volver sobre tus pasos.

### 📋 Gestión de Múltiples Listas

- **Listas ilimitadas** — Creá listas independientes para distintos comercios, eventos u ocasiones.
- **Duplicado y archivado** — Reutilizá listas frecuentes como plantilla o archivá las ya completadas.
- **Personalización** — Asignación de nombres y paletas de colores representativas.

### 💾 Respaldo y Compartición

- **Exportación/Importación en JSON** — Respaldá todos tus datos (listas, artículos, preferencias) de forma local.
- **Compartir listas** — Integración nativa con Web Share API o copiado directo al portapapeles.

---

## 🔄 Cambios Recientes Realizados

En el marco de la evolución del proyecto y la aplicación de metodologías ágiles (Extreme Programming y Testing), se han implementado mejoras clave enfocadas en la experiencia de usuario, diseño inclusivo y modernización de la arquitectura de la interfaz:

### 1. 🎨 Sistema Moderno de Iconos Vectoriales (`lucide-vue-next`)

- **Migración a iconos vectoriales SVG:** Se reemplazó el uso de emojis y caracteres de texto genéricos por la biblioteca profesional [`lucide-vue-next`](https://lucide.dev/), garantizando una visualización limpia, homogénea y escalable en cualquier resolución o densidad de pantalla.
- **Componentes base modernizados:**
  - `IconButton.vue`: Ahora admite componentes de iconos Lucide como `props` o mediante `slots` personalizados de SVG, conservando retrocompatibilidad para caracteres de texto o emojis.
  - `BaseButton.vue`: Soporte nativo para iconos vectoriales alineados junto al texto de los botones de acción principal.
  - `BackButton.vue`: Incorporación del icono SVG vectorial `ArrowLeft`.
  - Actualización integral de vistas y componentes de apoyo (`EmptyState`, `ListCard`, `VoiceInputModal`, `BackupSettings`, `CategorySection`, `CategoryOrderSettings`).
- **Pruebas automáticas dedicadas:** Creación del archivo de test [`src/__tests__/icon-system.spec.ts`](src/__tests__/icon-system.spec.ts) para validar el renderizado de SVGs, preservación de accesibilidad (atributos `title` y `aria`), soporte de slots y compatibilidad regresiva.

### 2. 👁️ Accesibilidad, Contraste y Legibilidad (Estándares WCAG 2.1 AA/AAA)

- **Algoritmos de luminancia y ratio de contraste:** Se diseñó el módulo [`src/utils/colors.ts`](src/utils/colors.ts) que implementa el cálculo formal de luminancia relativa y ratio de contraste según la especificación matemática del W3C/WCAG:
  - `getRelativeLuminance(hexColor)`: Cálculo preciso de luminancia sRGB.
  - `getContrastRatio(color1, color2)`: Determinación del factor de contraste numérico entre primer plano y fondo.
  - `getAccessibleTextColor(bgColor)`: Selección dinámica de color de texto óptimo (`#111827` o `#ffffff`) para garantizar máxima legibilidad sobre cualquier color personalizado de lista o categoría.
  - `isColorDark(hexColor)`: Identificación de tonos claros y oscuros.
- **Tipografía y jerarquía visual optimizada:**
  - Aumento del tamaño tipográfico base a `text-base` y `text-lg` en campos de texto (`BaseInput.vue`) para prevenir dificultades de lectura en adultos mayores.
  - Adopción de pesos tipográficos definidos (`font-medium` y `font-semibold`) para evitar fuentes excesivamente delgadas o poco legibles.
  - Contraste de texto elevado: Texto principal a `#111827` (cumpliendo nivel **WCAG AAA** $\ge 7:1$) y texto secundario a `#374151` (cumpliendo nivel **WCAG AA** $\ge 4.5:1$).
- **Foco e indicadores interactivos claros:**
  - Anillos de enfoque visibles (`focus-visible:ring-2`) para usuarios que navegan mediante teclado o lectores de pantalla.
  - Borde reforzado (`border-2`) en casillas de verificación (checkboxes) e inputs, mejorando la percepción táctil y visual del estado completado/pendiente.
- **Semántica y roles ARIA:**
  - `ProgressBar.vue` adaptada con atributos semánticos `role="progressbar"`, `aria-valuenow`, `aria-valuemin` y `aria-valuemax`.
- **Pruebas automáticas de accesibilidad:** Creación de [`src/__tests__/accessibility-contrast.spec.ts`](src/__tests__/accessibility-contrast.spec.ts) para asegurar la matemática de contraste, la legibilidad tipográfica y la conformidad con los lineamientos WCAG.

### 3. 📈 Expansión de la Suite de Pruebas Unitarias

- **Crecimiento de la cobertura:** La suite de pruebas automatizadas con Vitest se incrementó de **189 a 208 pruebas unitarias pasando con éxito** (100% de tasa de aprobación).

---

## 🎯 Lista de Mejoras y Roadmap (Backlog Priorizado)

A continuación se detalla el listado de mejoras para que cualquier usuario pueda utilizar la aplicación de forma óptima, clasificadas según su nivel de criticidad e impacto. Se indica explícitamente el estado de cada una, destacando las **ya implementadas**, las **priorizadas para desarrollo inmediato** y las **diferidas**:

### 🔴 Críticas (P0) — Sin estas, usuarios normales no pueden usar la app

1. **Renombrar "JSON" a "Exportar Lista" / "Importar Lista"** `[📌 Muy buena, la vamos a implementar]`
   - **Diagnóstico:** Los usuarios convencionales no comprenden terminología técnica como "JSON". Los botones en `ListsView.vue:164` y `ListDetailView.vue:516` indican literalmente "Import JSON" y "Export JSON".
   - **Acción:** Renombrar las acciones a etiquetas claras como "Exportar Lista" e "Importar Lista".

2. **Agregar edición de cantidad y unidad** `[📌 Planificada para inmediata implementación]`
   - **Diagnóstico:** La capa de datos ya soporta los campos `quantity` y `unit` (`src/db/index.ts:16-17`), pero la interfaz de usuario no provee controles para que el usuario ingrese o modifique valores como "2 litros de leche" o "1 kg de arroz".
   - **Acción:** Incorporar controles de cantidad y unidad en el flujo de creación y edición del artículo.

3. **Permitir renombrar artículos** `[📌 Muy buena, la vamos a implementar]`
   - **Diagnóstico:** Si el usuario comete una equivocación de tipeo (ej: _"tomatee"_), actualmente no existe opción de renombrado; debe eliminar el artículo y volver a crearlo.
   - **Acción:** Agregar modal o edición en línea para modificar el nombre del artículo sin perder su estado ni categoría.

4. **Navegación móvil** `[⏳ Diferida para fase posterior]`
   - **Diagnóstico:** En vista móvil (`App.vue`), ciertos accesos directos pueden quedar poco visibles o relegados respecto al flujo principal.
   - **Acción:** Reorganizar la navegación en pantallas móviles mediante una barra inferior de navegación accesible.

5. **Corrección de pérdida de datos silenciosa en Backup** `[📌 Muy buena, la vamos a implementar]`
   - **Diagnóstico:** Al restaurar una copia de respaldo (`useBackup.ts:211`), únicamente se persisten nombre y categoría; se descartan silenciosamente cantidad, unidad, notas y código de barras.
   - **Acción:** Asegurar que la función de importación/restauración preserve íntegramente todos los campos del modelo de datos.

---

### 🟠 Importantes (P1) — Afectan significativamente la experiencia

6. **Eliminar / depurar el botón flotante "Modo Tienda"**
   - **Diagnóstico:** Limpieza de código muerto o botones experimentales sin clases CSS asociadas (`store-mode`) para evitar desconcierto en el usuario.

7. **Moneda y formato regional configurable**
   - **Diagnóstico:** Permitir configurar la moneda y formato regional del usuario (ARS, USD, PEN, EUR) en lugar de valores monetarios rígidos o fijos.

8. **Pantalla de bienvenida y Onboarding guiado** `[📌 Muy buena, la vamos a implementar]`
   - **Diagnóstico:** Un usuario primerizo se encuentra ante una lista vacía sin explicación de las capacidades clave (dictado por voz, escáner, categorización automática).
   - **Acción:** Implementar un carrusel o diálogo inicial de bienvenida que ilustre los flujos principales.

9. **Clarificación y unificación de botones de exportación**
   - **Diagnóstico:** "Compartir", "Exportar Lista" y exportaciones visuales se presentan juntos sin explicar claramente sus diferencias; requieren unificación o tooltips explicativos.

10. **Paleta amigable de selección de colores**
    - **Diagnóstico:** Reemplazar la exposición directa de códigos hexadecimales (`#4CAF50`) por muestras visuales de color y una paleta predefinida y accesible.

11. **Unificación lingüística integral en español**
    - **Diagnóstico:** Homogeneizar todos los mensajes y alertas residuales en inglés (ej: `ListDetailView.vue:272: "Failed to add items from voice input"`) hacia español consistente.

12. **Aviso en el aprendizaje global de categorías**
    - **Diagnóstico:** Al reasignar la categoría de un artículo, la aplicación aprende la preferencia a nivel global. Se debe añadir un toast informativo alertando al usuario de este cambio automático.

---

### 🟡 Mejoras (P2) — Hacen la app más pulida

13. **Botones de ícono con `aria-label` accesible** `[✅ YA IMPLEMENTADA]`
    - **Estado:** Resuelto con la migración al sistema vectorial `lucide-vue-next` y WCAG 2.1 AA/AAA. Se dotó a `IconButton.vue` del atributo `:aria-label="title"`, anillo de foco visible (`focus-visible:ring-2`) y suite de pruebas en `src/__tests__/icon-system.spec.ts`.

14. **Ruta y pantalla 404 (Página no encontrada)**
    - **Diagnóstico:** Si el usuario ingresa a una URL no válida, actualmente visualiza una pantalla vacía en lugar de una página 404 con enlace de retorno al inicio.

15. **Etiquetas y valores visibles en gráficos de estadísticas**
    - **Diagnóstico:** Las barras de gráficos deben reflejar números absolutos y etiquetas en el eje Y para facilitar su lectura cuantitativa.

16. **Confirmación previa al eliminar artículos individuales**
    - **Diagnóstico:** Prevenir toques accidentales en pantallas táctiles solicitando confirmación o permitiendo deshacer la eliminación.

17. **Búsqueda global entre todas las listas**
    - **Diagnóstico:** Habilitar un buscador que localice un producto determinado a través de todas las listas activas y archivadas.

18. **Listas plantilla y recurrentes**
    - **Diagnóstico:** Posibilidad de guardar una lista recurrente (ej: _"Supermercado Quincenal"_) como plantilla permanente para duplicar periódicamente.

19. **Accesibilidad del selector de color para lectores de pantalla**
    - **Diagnóstico:** Mejorar la accesibilidad del input de color nativo para que sea completamente operable por tecnologías de asistencia.

20. **Restauración fluida de respaldo sin recarga abrupta**
    - **Diagnóstico:** Reemplazar el refresco forzado (`window.location.reload()` en `BackupSettings.vue:60`) por una reactualización reactiva de los stores de Pinia.

---

### 🟢 Menores (P3) — Pulido y consistencia

21. **Consistencia en tokens y variables de diseño:** Reemplazar estilos fijos (ej: `bg-gray-50` en Settings) por tokens dinámicos (`bg-background`) para compatibilidad con futuros temas.
22. **Modo Oscuro (Dark Mode nativo):** Implementación de tema oscuro para entornos con baja luminosidad o ahorro de batería.
23. **Opción de "Deshacer" (Undo) tras eliminar:** Toast con botón de deshacer inmediato ante borrados accidentales.
24. **Formato legible de semanas y fechas:** Sustituir etiquetas numéricas ambiguas (ej: `8/20`) por formatos localizados como _"20 Ago"_ o _"Semana del 20 Ago"_.
25. **Gestión visual de errores:** Reemplazar capturas silenciosas en bloques `catch` (`console.error`) por notificaciones toast descriptivas al usuario.

---

## 🚀 Inicio Rápido

### Requisitos Previos

- **Node.js** versión `20.19.0+` o `22.12.0+`
- **npm** versión `10+`

### Instalación

1. **Clonar el repositorio:**

   ```bash
   git clone https://github.com/Vyldrix/AppLista.git
   cd AppLista
   ```

2. **Instalar dependencias:**

   ```bash
   npm install
   ```

3. **Iniciar el servidor de desarrollo:**

   ```bash
   npm run dev
   ```

4. **Abrir en el navegador:**

   Accedé a `http://localhost:5173`.

### Carga de Datos de Demostración (Opcional)

Para poblar la aplicación con listas y productos de prueba:

1. **Generar los datos de muestra:**
   ```bash
   npm run dev:seed
   ```
2. **Importarlos en la aplicación:**
   - Abrí `http://localhost:5173` en tu navegador.
   - Dirigite a **Settings** (icono de engranaje).
   - Hacé clic en **"Import Backup"**.
   - Seleccioná el archivo generado en `public/sample-data.json` y elegí **"Replace"**.

---

## 🛠️ Scripts de Desarrollo

| Comando                 | Descripción                                                                |
| :---------------------- | :------------------------------------------------------------------------- |
| `npm run dev`           | Inicia el servidor de desarrollo con Hot Module Replacement (HMR).         |
| `npm run dev:seed`      | Genera el archivo JSON con datos iniciales para demostraciones y pruebas.  |
| `npm run build`         | Compila y empaqueta la aplicación para producción en la carpeta `dist/`.   |
| `npm run preview`       | Previsualiza localmente el build de producción.                            |
| `npm test`              | Ejecuta las pruebas unitarias en modo interactivo/watch con Vitest.        |
| `npm run test:run`      | Corre la suite completa de **208 pruebas unitarias** una sola vez.         |
| `npm run test:ui`       | Abre la interfaz visual de Vitest en el navegador.                         |
| `npm run test:coverage` | Genera el reporte de cobertura de código con `@vitest/coverage-v8`.        |
| `npm run type-check`    | Valida los tipos de TypeScript con `vue-tsc`.                              |
| `npm run lint`          | Analiza el código con ESLint y corrige errores detectados automáticamente. |
| `npm run lint:check`    | Verifica el linter sin aplicar modificaciones (ideal para CI/CD).          |
| `npm run format`        | Da formato a todo el código fuente mediante Prettier.                      |
| `npm run format:check`  | Comprueba el formateo del código sin alterarlo.                            |

---

## 🧪 Pruebas y Calidad de Código

El proyecto cuenta con **208 pruebas unitarias automatizadas** que garantizan la robustez, accesibilidad y no regresión de la lógica de negocio y componentes visuales:

```bash
# Ejecutar todas las pruebas
npm run test:run
```

**Distribución de Cobertura por Funcionalidad:**

- ✅ **Entrada por voz y reconocimiento de lenguaje:** 23 tests ([`rule-1.1`](src/__tests__/rule-1.1-voice-input.spec.ts))
- ✅ **Entrada rápida y atajos PWA:** 20 tests ([`rule-1.2`](src/__tests__/rule-1.2-quick-text-entry.spec.ts), [`rule-1.3`](src/__tests__/rule-1.3-pwa-shortcuts.spec.ts))
- ✅ **Manejo de errores y resiliencia:** 14 tests ([`rule-1.4`](src/__tests__/rule-1.4-error-handling.spec.ts))
- ✅ **Funcionamiento offline y degradación elegante:** 13 tests ([`rule-2.1`](src/__tests__/rule-2.1-offline-access.spec.ts), [`rule-2.2`](src/__tests__/rule-2.2-graceful-degradation.spec.ts))
- ✅ **Copia de seguridad y restauración (JSON):** 16 tests ([`rule-2.3`](src/__tests__/rule-2.3-backup-restore.spec.ts))
- ✅ **Autocategorización y aprendizaje de preferencias:** 24 tests ([`rule-3.1`](src/__tests__/rule-3.1-auto-categorization.spec.ts), [`rule-3.2`](src/__tests__/rule-3.2-manual-categorization.spec.ts))
- ✅ **Ordenamiento según góndolas del comercio:** 13 tests ([`rule-3.3`](src/__tests__/rule-3.3-category-ordering.spec.ts))
- ✅ **Escáner de código de barras y base de datos local:** 37 tests ([`rule-4.1`](src/__tests__/rule-4.1-barcode-lookup.spec.ts), [`rule-4.2`](src/__tests__/rule-4.2-product-database.spec.ts), [`rule-4.3`](src/__tests__/rule-4.3-barcode-ux.spec.ts))
- ✅ **Gestión de múltiples listas y compartir:** 29 tests ([`rule-5.1`](src/__tests__/rule-5.1-multiple-lists.spec.ts), [`rule-5.2`](src/__tests__/rule-5.2-share-export.spec.ts), [`rule-5.3`](src/__tests__/rule-5.3-rename-duplicate.spec.ts))
- ✅ **Sistema de Iconos Vectoriales Lucide:** 7 tests ([`icon-system.spec.ts`](src/__tests__/icon-system.spec.ts))
- ✅ **Accesibilidad y Ratios de Contraste WCAG:** 12 tests ([`accessibility-contrast.spec.ts`](src/__tests__/accessibility-contrast.spec.ts))

---

## 🏗️ Stack Tecnológico

### Núcleo y Framework

- **[Vue 3](https://vuejs.org/)** — Framework progresivo (Composition API con `<script setup>`).
- **[TypeScript](https://www.typescriptlang.org/)** — Tipado estricto para máxima confiabilidad.
- **[Vite](https://vitejs.dev/)** — Entorno de desarrollo rápido y bundler de última generación.
- **[Tailwind CSS 4](https://tailwindcss.com/)** — Motor de estilos utilitarios moderno y de alto rendimiento.

### Estado y Almacenamiento Local

- **[Pinia](https://pinia.vuejs.org/)** — Gestión de estado reactiva y tipada.
- **[Dexie.js](https://dexie.org/)** — Capa de abstracción sobre IndexedDB para almacenamiento offline persistente.
- **[Vue Router](https://router.vuejs.org/)** — Enrutamiento SPA oficial.

### PWA, Iconografía y Experiencia

- **[vite-plugin-pwa](https://vite-pwa-org.netlify.app/)** y **[Workbox](https://developers.google.com/web/tools/workbox)** — Estrategias de caché y Service Worker.
- **[lucide-vue-next](https://lucide.dev/)** — Iconografía vectorial SVG moderna, accesible y ligera.
- **[@zxing/library](https://github.com/zxing-js/library)** — Procesamiento de códigos de barra mediante cámara.
- **Web Speech API** y **Web Share API** — Integración nativa con capacidades del navegador y sistema operativo.

### Testing y Calidad

- **[Vitest](https://vitest.dev/)** + **[Vue Test Utils](https://test-utils.vuejs.org/)** — Entorno de pruebas unitarias ultrarrápido con entorno Happy-DOM.
- **[ESLint](https://eslint.org/)** y **[Prettier](https://prettier.io/)** — Reglas de calidad y formateo de código unificado.
- **[Husky](https://typicode.github.io/husky/)** + **[lint-staged](https://github.com/okonet/lint-staged)** — Validación automática pre-commit.

---

## 📖 Guía de Uso

### 1. Crear una Lista

1. Presioná el botón **"New List"** en la pantalla principal.
2. Ingresá un nombre identificatorio (ej: _"Compras Semanales"_).
3. Seleccioná el color distintivo y confirmá.

### 2. Agregar Artículos

- **Por Voz 🎤:** Tocá el botón del micrófono y dictá tus artículos con naturalidad: _"Comprar manzanas, leche y detergente"_.
- **Por Teclado ⌨️:** Escribí directamente en el campo de texto. Podés añadir varios productos juntos separándolos con comas: _"papas, cebollas, arroz"_.
- **Por Código de Barras 📸:** Pulsá el botón de escáner, enfocá el código de barras con la cámara y el producto se agregará inmediatamente si ya estaba registrado (o se solicitará su nombre una única vez para guardarlo).

### 3. Durante las Compras

- Marcá cada producto tocando su casilla para enviarlo a la sección de completados.
- Editá cantidades o categorías tocando el icono de edición correspondiente.
- Organizá las categorías en los Ajustes para que se adapten al pasillo físico de tu comercio frecuente.

---

## 🚢 Despliegue

La aplicación está preparada para ser desplegada en cualquier proveedor de hosting estático moderno (Vercel, Netlify, Cloudflare Pages o GitHub Pages):

```bash
npm run build
```

El resultado listo para producción se genera en la carpeta `dist/`, configurado con soporte completo de cabeceras PWA y Service Worker.

---

## ⚖️ Autoría, Derechos y Reconocimientos

> ### 📌 Nota sobre la Idea Original y Derechos Reservados
>
> **Todos los derechos, la idea original, la concepción del producto y la arquitectura base de este proyecto están reservados a su creador original:**  
> **Cas Doorn** ([GitLab: @Cas0570](https://gitlab.com/CasDoorn) / [casdoorn.nl](https://casdoorn.nl)), desarrollado inicialmente como proyecto de la carrera de desarrollo de software en Saxion University of Applied Sciences.
>
> ---
>
> ### 👥 Desarrolladores Actuales y Mantenimiento
>
> Actualmente, la evolución, desarrollo continuo, mejoras de accesibilidad, modernización de componentes y mantenimiento de este proyecto están siendo llevados a cabo por:
>
> - **Loyola Lautaro** ([@Vyldrix](https://github.com/Vyldrix))
> - **Cristian Sasinka**
>
> _Proyecto desarrollado y adaptado en el marco de la materia **Programación Extrema y Testing** (Segundo Año)._
