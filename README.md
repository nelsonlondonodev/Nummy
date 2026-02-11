# Nummy - Repostería Creativa

Sitio web estático para **Nummy**, una repostería creativa en Getafe, Madrid. El proyecto se centra en ofrecer una experiencia de usuario moderna, visualmente atractiva y optimizada para SEO local.

## Estado del Proyecto
*   **Rama de desarrollo:** `develop` (Actualizada con las últimas funcionalidades).
*   **Rama de producción:** `main` (Despliegue estable en Hostinger).
*   **Estado actual:** Trabajo en curso en la sección de testimonios y estilos visuales.

## Características Principales

### UI/UX y Diseño
*   **Diseño Moderno:** Uso de tema claro/oscuro (en desarrollo para componentes específicos), tipografías modernas (Nunito) y espaciado generoso.
*   **Componentes Visuales:**
    *   Botones "pill" con gradientes y sombras suaves.
    *   Tarjetas de producto con efecto de elevación (hover) y sombras difusas.
    *   Carrusel de productos y galería con `OwlCarousel`.
    *   **NUEVO:** Sección de Testimonios basada en reseñas reales de Google (en desarrollo, estilo oscuro).
*   **Navegación Móvil:**
    *   Menú hamburguesa con animación a "X".
    *   Overlay oscuro para mejor enfoque al abrir el menú.
    *   Cierre automático al hacer clic fuera o en un enlace.
    *   Barra de navegación con mayor cuerpo y legibilidad.

### Funcionalidades y Optimización
*   **Optimización de Rendimiento (Web Vitals):**
    *   **Eliminación de CLS:** Atributos de dimensión en todas las imágenes y altura fija en top-bar.
    *   **Velocidad de Carga:** Consolidación de fuentes (Nunito), eliminación de `@import` en CSS y uso de `defer` en todos los JavaScripts.
    *   **Priorización de LCP:** Uso de `fetchpriority="high"` en la imagen hero principal.
*   **Accesibilidad (A11y):** Implementación de `aria-labels` en todos los elementos interactivos sin texto (botones de imagen, iconos sociales, campos de formulario).
*   **SEO Técnico:** Unificación de jerarquía de encabezados (un solo H1) y metadatos optimizados.
*   **Optimización de Imágenes:** Implementación de `loading="lazy"` para mejorar la velocidad de carga (LCP).
*   **Formulario de Contacto:** Preparado para integración futura con **n8n** (actualmente simula envío con feedback visual).
*   **Banner de Cookies:** Funcional con almacenamiento en `localStorage` y configuración accesible.
*   **Botón Flotante de WhatsApp:** Acceso directo con etiquetas de accesibilidad.

### Contenido y SEO
*   **Sección "About" y "FAQ":** Textos refinados y simplificados. Eliminada la sección de alérgenos por petición del cliente.
*   **SEO Local:** Optimización de metadatos, títulos y textos alternativos (alt) para "Repostería creativa en Getafe".
*   **Schema Markup:** JSON-LD implementado para `Bakery` y `FAQPage` (actualizado para eliminar alérgenos).

## Estructura de Archivos (Resumen)

```
Nummy/
├── css/
│   ├── style.css       # Estilos principales y personalizaciones
│   └── bootstrap.min.css
├── img/                # Imágenes optimizadas (WebP recomendado)
│   ├── google-logo.svg # Logo local de Google para testimonios
│   └── ...
├── js/
│   ├── main.js         # Lógica principal (menú, carruseles, formularios)
│   └── ...
├── index.html          # Página principal
└── README.md           # Documentación del proyecto
```

## Próximos Pasos (Pendientes)
*   [x] **Optimización de Rendimiento:** Corregido CLS, mejorado FCP/LCP mediante carga diferida y priorización de assets.
*   [x] **Accesibilidad:** Implementados aria-labels y corrección de jerarquía H1-H2.
*   [ ] **Testimonios:** Pulir estilos de las tarjetas (consistencia visual, tamaños, espaciados).
*   [ ] **Integración n8n:** Conectar el formulario de contacto con el webhook real.

---
*Desarrollado con ❤️ para Nummy.*