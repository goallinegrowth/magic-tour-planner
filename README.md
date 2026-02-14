# Magic Tour Planner - Premium Travel Agency Website

Un sitio web profesional y optimizado para conversión, diseñado para Magic Tour Planner - agencia especializada en viajes a Disney y Orlando para equipos deportivos y familias hispanas.

## 🎯 Características

### Diseño y Experiencia
- ✨ Diseño moderno con tema Disney (morado y dorado)
- 📱 100% responsive (móvil, tablet, desktop)
- 🎨 Animaciones suaves y profesionales
- ⚡ Carga rápida y optimizada
- 🌐 Contenido en español

### Funcionalidades
- 📋 Formulario de contacto inteligente (equipos vs familias)
- 🎥 Sección para video testimonial
- ❓ FAQ con acordeón interactivo
- 📅 Integración lista para calendario (Calendly)
- 📊 Proceso paso a paso claro
- 💬 Enlaces WhatsApp directos
- 🔒 Modal de confirmación de envío

## 📁 Estructura de Archivos

```
magic-tour-planner/
├── index.html          # Página principal
├── styles.css          # Estilos personalizados
├── script.js           # JavaScript interactivo
└── README.md           # Este archivo
```

## 🚀 Cómo Usar Este Sitio

### Paso 1: Personalizar Contenido

#### A) Información de Contacto
Busca y reemplaza en `index.html`:
- `info@magictourplanner.com` → Tu email real
- `+1 (555) 123-4567` → Tu teléfono real
- `15551234567` (WhatsApp) → Tu número WhatsApp

#### B) Redes Sociales
En el footer, actualiza los enlaces:
```html
<a href="https://facebook.com/tupagina" class="social-icon">
<a href="https://instagram.com/tuperfil" class="social-icon">
<a href="https://tiktok.com/@tuperfil" class="social-icon">
```

#### C) Logo
Reemplaza el texto del logo con tu imagen:
```html
<!-- Busca esto: -->
<div class="text-2xl font-bold...">✨ Magic Tour Planner</div>

<!-- Reemplaza con: -->
<img src="tu-logo.png" alt="Magic Tour Planner" class="h-12">
```

#### D) Video Testimonial
Encuentra esta sección y añade tu video:
```html
<div class="bg-gray-900 rounded-2xl...">
    <!-- Reemplaza el placeholder con: -->
    <iframe 
        width="100%" 
        height="100%" 
        src="https://www.youtube.com/embed/TU_VIDEO_ID" 
        frameborder="0" 
        allowfullscreen>
    </iframe>
</div>
```

#### E) Fotos Reales
Busca los placeholders de imágenes:
```html
<!-- Hero image -->
<div class="aspect-[4/3] bg-gradient...">
    <!-- Reemplaza con: -->
    <img src="tu-imagen-hero.jpg" alt="Equipo en Disney" class="w-full h-full object-cover">
</div>
```

### Paso 2: Integrar Calendly

Busca la sección de calendario y añade tu widget:
```html
<div class="bg-white rounded-xl p-6...">
    <!-- Reemplaza con tu código de Calendly: -->
    <div class="calendly-inline-widget" 
         data-url="https://calendly.com/tu-usuario/consulta" 
         style="min-width:320px;height:630px;">
    </div>
    <script type="text/javascript" src="https://assets.calendly.com/assets/external/widget.js"></script>
</div>
```

### Paso 3: Conectar Formulario

El formulario actualmente simula el envío. Para conectarlo:

#### Opción A: Google Sheets (Gratis)
1. Usa un servicio como [SheetDB](https://sheetdb.io) o [Google Apps Script](https://developers.google.com/apps-script)
2. En `script.js`, reemplaza:

```javascript
// Encuentra esta línea (~línea 90):
await new Promise(resolve => setTimeout(resolve, 1500));

// Reemplaza con:
await fetch('https://sheetdb.io/api/v1/TU_API_KEY', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data)
});
```

#### Opción B: Tu API Personalizada
```javascript
await fetch('https://api.magictourplanner.com/leads', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data)
});
```

#### Opción C: Servicios de Email (Formspree, EmailJS)
Usa [Formspree](https://formspree.io) o [EmailJS](https://www.emailjs.com):

```javascript
await fetch('https://formspree.io/f/TU_FORM_ID', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data)
});
```

### Paso 4: Añadir Meta Pixel (Facebook Ads)

En `index.html`, busca el comentario `<!-- Meta Pixel Code -->` y añade:

```html
<script>
!function(f,b,e,v,n,t,s)
{if(f.fbq)return;n=f.fbq=function(){n.callMethod?
n.callMethod.apply(n,arguments):n.queue.push(arguments)};
if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
n.queue=[];t=b.createElement(e);t.async=!0;
t.src=v;s=b.getElementsByTagName(e)[0];
s.parentNode.insertBefore(t,s)}(window, document,'script',
'https://connect.facebook.net/en_US/fbevents.js');
fbq('init', 'TU_PIXEL_ID');  // ← Reemplaza con tu Pixel ID
fbq('track', 'PageView');
</script>
```

## 🌐 Despliegue (Hosting)

### Opción 1: Vercel (Recomendado - GRATIS)

1. Crea cuenta en [Vercel](https://vercel.com)
2. Instala Vercel CLI:
```bash
npm install -g vercel
```
3. Desde la carpeta del proyecto:
```bash
vercel
```
4. Sigue las instrucciones
5. ¡Listo! Tu sitio estará en `https://magic-tour-planner.vercel.app`

### Opción 2: Netlify (GRATIS)

1. Arrastra la carpeta a [Netlify Drop](https://app.netlify.com/drop)
2. O conecta tu repositorio GitHub
3. Tu sitio estará live en minutos

### Opción 3: GitHub Pages (GRATIS)

1. Crea repositorio en GitHub
2. Sube los archivos
3. Ve a Settings → Pages
4. Selecciona branch `main` y carpeta `root`
5. Save - tu sitio estará en `https://tu-usuario.github.io/magic-tour-planner`

## 🎨 Personalización de Colores

Para cambiar los colores del sitio, edita `styles.css`:

```css
:root {
    --purple-primary: #7c3aed;  /* Color principal */
    --purple-dark: #5b21b6;     /* Oscuro */
    --purple-light: #a78bfa;    /* Claro */
    --gold: #fbbf24;            /* Dorado */
}
```

## 📊 Agregar Google Analytics

Antes del cierre de `</head>` en `index.html`:

```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-TU_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-TU_ID');
</script>
```

## ✅ Checklist de Lanzamiento

Antes de publicar, verifica:

- [ ] Logo actualizado
- [ ] Información de contacto real (email, teléfono, WhatsApp)
- [ ] Enlaces de redes sociales funcionando
- [ ] Video testimonial insertado
- [ ] Fotos reales subidas
- [ ] Calendly integrado
- [ ] Formulario conectado a destino final
- [ ] Meta Pixel instalado
- [ ] Google Analytics configurado
- [ ] Probado en móvil
- [ ] Probado en tablet
- [ ] Probado en desktop
- [ ] Todos los enlaces funcionan

## 🔧 Solución de Problemas

### El formulario no se envía
- Verifica la consola del navegador (F12)
- Asegúrate de que el endpoint de API es correcto
- Verifica que no haya errores de CORS

### Las animaciones no funcionan
- Asegúrate de que `script.js` está cargando
- Verifica que no hay errores en la consola

### El menú móvil no abre
- Verifica que Font Awesome está cargando
- Revisa la consola por errores de JavaScript

## 📱 Próximas Características (Opcional)

Ideas para expandir el sitio:

- [ ] Blog de consejos de viajes
- [ ] Galería de fotos de viajes pasados
- [ ] Calculadora de presupuesto
- [ ] Chat en vivo (Tidio, Intercom)
- [ ] Newsletter signup
- [ ] Testimonios en carrusel automático
- [ ] Sección de paquetes con precios
- [ ] Portal de clientes

## 💡 Soporte

Si necesitas ayuda:
1. Revisa la consola del navegador (F12 → Console)
2. Verifica que todos los archivos están en la misma carpeta
3. Asegúrate de que CDNs están cargando (Tailwind, Font Awesome)

## 📄 Licencia

Este sitio fue creado para Magic Tour Planner. Todos los derechos reservados.

---

**¿Necesitas cambios o funcionalidades adicionales?**
Consulta con el desarrollador para ajustes personalizados.

¡Mucha suerte con Magic Tour Planner! ✨🏰
