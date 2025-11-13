import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

// All language/page combinations to prerender
const routes = [
  { path: '', lang: 'es', page: 'home' },
  { path: 'es', lang: 'es', page: 'home' },
  { path: 'es/clases', lang: 'es', page: 'classes' },
  { path: 'es/clases/dancehall-barcelona', lang: 'es', page: 'dancehall' },

  { path: 'ca', lang: 'ca', page: 'home' },
  { path: 'ca/clases', lang: 'ca', page: 'classes' },
  { path: 'ca/clases/dancehall-barcelona', lang: 'ca', page: 'dancehall' },

  { path: 'en', lang: 'en', page: 'home' },
  { path: 'en/clases', lang: 'en', page: 'classes' },
  { path: 'en/clases/dancehall-barcelona', lang: 'en', page: 'dancehall' },

  { path: 'fr', lang: 'fr', page: 'home' },
  { path: 'fr/clases', lang: 'fr', page: 'classes' },
  { path: 'fr/clases/dancehall-barcelona', lang: 'fr', page: 'dancehall' },
];

// Metadata for each page in each language
const metadata = {
  es: {
    home: {
      title: 'FarRays Center - Escuela de Baile Urbano en Barcelona',
      description: 'Descubre las mejores clases de baile urbano en Barcelona. Dancehall y más. Profesores experimentados y ambiente inclusivo.',
    },
    classes: {
      title: 'Clases de Baile - FarRays Center Barcelona',
      description: 'Clases de Dancehall y baile urbano para todos los niveles. Horarios flexibles en Barcelona.',
    },
    dancehall: {
      title: 'Clases de Dancehall en Barcelona - Academia de Baile Urbano | FarRays Center',
      description: 'Aprende Dancehall auténtico en Barcelona con profesores expertos. Clases para todos los niveles. Descubre el ritmo de Jamaica.',
    },
  },
  ca: {
    home: {
      title: 'FarRays Center - Escola de Ball Urbà a Barcelona',
      description: 'Descobreix les millors classes de ball urbà a Barcelona. Dancehall i més. Professors experimentats i ambient inclusiu.',
    },
    classes: {
      title: 'Classes de Ball - FarRays Center Barcelona',
      description: 'Classes de Dancehall i ball urbà per a tots els nivells. Horaris flexibles a Barcelona.',
    },
    dancehall: {
      title: 'Classes de Dancehall a Barcelona - Acadèmia de Ball Urbà | FarRays Center',
      description: 'Aprèn Dancehall autèntic a Barcelona amb professors experts. Classes per a tots els nivells. Descobreix el ritme de Jamaica.',
    },
  },
  en: {
    home: {
      title: 'FarRays Center - Urban Dance School in Barcelona',
      description: 'Discover the best urban dance classes in Barcelona. Dancehall and more. Experienced teachers and inclusive atmosphere.',
    },
    classes: {
      title: 'Dance Classes - FarRays Center Barcelona',
      description: 'Dancehall and urban dance classes for all levels. Flexible schedules in Barcelona.',
    },
    dancehall: {
      title: 'Dancehall Classes in Barcelona - Urban Dance Academy | FarRays Center',
      description: 'Learn authentic Dancehall in Barcelona with expert teachers. Classes for all levels. Discover the rhythm of Jamaica.',
    },
  },
  fr: {
    home: {
      title: 'FarRays Center - École de Danse Urbaine à Barcelone',
      description: 'Découvrez les meilleurs cours de danse urbaine à Barcelone. Dancehall et plus. Professeurs expérimentés et ambiance inclusive.',
    },
    classes: {
      title: 'Cours de Danse - FarRays Center Barcelone',
      description: 'Cours de Dancehall et danse urbaine pour tous les niveaux. Horaires flexibles à Barcelone.',
    },
    dancehall: {
      title: 'Cours de Dancehall à Barcelone - Académie de Danse Urbaine | FarRays Center',
      description: 'Apprenez le Dancehall authentique à Barcelone avec des professeurs experts. Cours pour tous les niveaux. Découvrez le rythme de la Jamaïque.',
    },
  },
};

// Basic prerendered content for each page (bots will see this)
const initialContent = {
  es: {
    home: `
      <header class="fixed top-0 left-0 right-0 z-50 bg-transparent">
        <div class="container mx-auto px-6 py-4 flex justify-between items-center">
          <div class="text-2xl font-bold text-primary-accent holographic-text">FarRays Center</div>
          <nav class="hidden md:flex space-x-8 text-neutral/90 font-medium text-lg">
            <a href="/es" class="hover:text-primary-accent transition-colors">Inicio</a>
            <a href="/es/clases" class="hover:text-primary-accent transition-colors">Clases</a>
            <a href="/es/clases/dancehall-barcelona" class="hover:text-primary-accent transition-colors">Dancehall</a>
          </nav>
        </div>
      </header>
      <main id="main-content" class="relative z-0 pt-20 pb-32 px-6 sm:px-12 text-center">
        <h1 class="text-5xl sm:text-6xl md:text-7xl font-extrabold text-neutral mb-6 holographic-text">
          FarRays Center
        </h1>
        <p class="text-xl sm:text-2xl text-neutral/80 max-w-3xl mx-auto mb-12">
          Escuela de baile urbano en Barcelona. Aprende Dancehall y más con los mejores profesores.
        </p>
        <div class="flex flex-col sm:flex-row gap-6 justify-center items-center">
          <a href="/es/clases" class="bg-primary-accent text-neutral px-10 py-4 rounded-full text-lg font-bold shadow-lg hover:bg-primary-dark transition-all">
            Ver Clases
          </a>
        </div>
      </main>
    `,
    classes: `
      <main id="main-content" class="relative z-0 pt-20 pb-32 px-6 sm:px-12">
        <h1 class="text-4xl sm:text-5xl font-bold text-neutral mb-8 text-center holographic-text">
          Nuestras Clases
        </h1>
        <p class="text-lg text-neutral/80 max-w-3xl mx-auto mb-12 text-center">
          Clases de Dancehall y baile urbano para todos los niveles. Profesores experimentados y ambiente inclusivo.
        </p>
      </main>
    `,
    dancehall: `
      <main id="main-content" class="relative z-0 pt-20 pb-32 px-6 sm:px-12">
        <h1 class="text-4xl sm:text-5xl font-bold text-neutral mb-8 text-center holographic-text">
          Clases de Dancehall en Barcelona
        </h1>
        <p class="text-lg text-neutral/80 max-w-3xl mx-auto mb-12 text-center">
          Descubre el auténtico Dancehall de Jamaica en Barcelona. Energía, cultura y ritmo en cada clase.
        </p>
      </main>
    `,
  },
  // Simplified content for other languages
  ca: {
    home: `<main id="main-content"><h1 class="holographic-text text-5xl font-extrabold">FarRays Center</h1><p class="text-xl">Escola de ball urbà a Barcelona. Aprèn Dancehall i més.</p></main>`,
    classes: `<main id="main-content"><h1 class="holographic-text text-4xl font-bold">Les nostres Classes</h1><p>Classes de Dancehall i ball urbà per a tots els nivells.</p></main>`,
    dancehall: `<main id="main-content"><h1 class="holographic-text text-4xl font-bold">Classes de Dancehall a Barcelona</h1><p>Descobreix l'autèntic Dancehall de Jamaica a Barcelona. Energia, cultura i ritme a cada classe.</p></main>`,
  },
  en: {
    home: `<main id="main-content"><h1 class="holographic-text text-5xl font-extrabold">FarRays Center</h1><p class="text-xl">Urban dance school in Barcelona. Learn Dancehall and more.</p></main>`,
    classes: `<main id="main-content"><h1 class="holographic-text text-4xl font-bold">Our Classes</h1><p>Dancehall and urban dance classes for all levels.</p></main>`,
    dancehall: `<main id="main-content"><h1 class="holographic-text text-4xl font-bold">Dancehall Classes in Barcelona</h1><p>Discover authentic Dancehall from Jamaica in Barcelona. Energy, culture and rhythm in every class.</p></main>`,
  },
  fr: {
    home: `<main id="main-content"><h1 class="holographic-text text-5xl font-extrabold">FarRays Center</h1><p class="text-xl">École de danse urbaine à Barcelone. Apprenez le Dancehall et plus.</p></main>`,
    classes: `<main id="main-content"><h1 class="holographic-text text-4xl font-bold">Nos Cours</h1><p>Cours de Dancehall et danse urbaine pour tous les niveaux.</p></main>`,
    dancehall: `<main id="main-content"><h1 class="holographic-text text-4xl font-bold">Cours de Dancehall à Barcelone</h1><p>Découvrez le véritable Dancehall de Jamaïque à Barcelone. Énergie, culture et rythme à chaque cours.</p></main>`,
  },
};

console.log('🚀 Starting prerendering process...\n');

// Read base HTML
const distPath = path.join(__dirname, 'dist');
const indexHtmlPath = path.join(distPath, 'index.html');

if (!fs.existsSync(indexHtmlPath)) {
  console.error('❌ Error: dist/index.html not found. Run "npm run build" first.');
  process.exit(1);
}

const baseHtml = fs.readFileSync(indexHtmlPath, 'utf-8');

let generatedCount = 0;

routes.forEach(route => {
  const { path: routePath, lang, page } = route;

  // Get metadata and content
  const meta = metadata[lang][page];
  const content = initialContent[lang][page];

  // Generate hreflang alternates
  let pagePath = '';
  if (page === 'home') {
    pagePath = '';
  } else if (page === 'classes') {
    pagePath = 'clases';
  } else if (page === 'dancehall') {
    pagePath = 'clases/dancehall-barcelona';
  }

  const hreflangLinks = [
    `<link rel="alternate" hreflang="es" href="https://www.farrayscenter.com/es${pagePath ? `/${pagePath}` : ''}" />`,
    `<link rel="alternate" hreflang="ca" href="https://www.farrayscenter.com/ca${pagePath ? `/${pagePath}` : ''}" />`,
    `<link rel="alternate" hreflang="en" href="https://www.farrayscenter.com/en${pagePath ? `/${pagePath}` : ''}" />`,
    `<link rel="alternate" hreflang="fr" href="https://www.farrayscenter.com/fr${pagePath ? `/${pagePath}` : ''}" />`,
    `<link rel="alternate" hreflang="x-default" href="https://www.farrayscenter.com/es${pagePath ? `/${pagePath}` : ''}" />`,
  ].join('\n    ');

  const currentUrl = `https://www.farrayscenter.com/${routePath}`;

  // Locale persistence script - runs before React mounts
  const localeScript = `
    <script>
      // Set locale before React hydration
      (function() {
        const locale = '${lang}';
        localStorage.setItem('fidc_preferred_locale', locale);
        const expires = new Date(Date.now() + 365 * 24 * 60 * 60 * 1000).toUTCString();
        document.cookie = 'fidc_locale=' + locale + '; expires=' + expires + '; path=/; SameSite=Lax';
        document.documentElement.lang = locale;
      })();
    </script>
  `;

  // Create prerendered HTML
  let html = baseHtml;

  // Update lang attribute
  html = html.replace(/<html([^>]*)lang="[^"]*"/, `<html$1lang="${lang}"`);
  html = html.replace(/<html(?![^>]*lang=)/, `<html lang="${lang}"`);

  // Remove existing SEO meta tags to prevent duplicates
  // Remove title tags (after the first one from charset/viewport section)
  html = html.replace(/<title>.*?<\/title>/g, '');
  // Remove description meta tags
  html = html.replace(/<meta\s+name="description"[^>]*>/gi, '');
  // Remove canonical links
  html = html.replace(/<link\s+rel="canonical"[^>]*>/gi, '');
  // Remove hreflang links
  html = html.replace(/<link\s+rel="alternate"\s+hreflang="[^"]*"[^>]*>/gi, '');
  // Remove Open Graph tags
  html = html.replace(/<meta\s+property="og:[^"]*"[^>]*>/gi, '');
  // Remove Twitter Card tags
  html = html.replace(/<meta\s+(?:name|property)="twitter:[^"]*"[^>]*>/gi, '');

  // Inject metadata in <head>
  html = html.replace('</head>', `
    <title>${meta.title}</title>
    <meta name="description" content="${meta.description}" />
    <link rel="canonical" href="${currentUrl}" />
    ${hreflangLinks}

    <!-- Open Graph -->
    <meta property="og:type" content="website" />
    <meta property="og:url" content="${currentUrl}" />
    <meta property="og:title" content="${meta.title}" />
    <meta property="og:description" content="${meta.description}" />
    <meta property="og:image" content="https://www.farrayscenter.com/images/og-${page}.jpg" />
    <meta property="og:locale" content="${lang}_ES" />

    <!-- Twitter Card -->
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:url" content="${currentUrl}" />
    <meta name="twitter:title" content="${meta.title}" />
    <meta name="twitter:description" content="${meta.description}" />
    <meta name="twitter:image" content="https://www.farrayscenter.com/images/og-${page}.jpg" />

    ${localeScript}
  </head>`);

  // Inject prerendered content in <div id="root">
  // Use data-prerendered to mark for hydration compatibility
  html = html.replace(
    '<div id="root"></div>',
    `<div id="root" data-prerendered="true"></div><!--${content}-->`
  );

  // Determine file path
  const filePath = routePath === ''
    ? path.join(distPath, 'index.html')
    : path.join(distPath, routePath, 'index.html');

  // Create directory if it doesn't exist
  const dir = path.dirname(filePath);
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }

  // Save file
  fs.writeFileSync(filePath, html);
  generatedCount++;

  console.log(`✅ Generated: /${routePath || '(root)'} [${lang}] → ${filePath}`);
});

console.log(`\n🎉 Prerendering complete! Generated ${generatedCount} pages.`);
console.log('\n📊 Summary:');
console.log(`   - Total pages: ${generatedCount}`);
console.log(`   - Languages: es, ca, en, fr (4)`);
console.log(`   - Pages per language: home, clases, dancehall-barcelona (3)`);
console.log(`   - SEO: ✅ Metadata, ✅ hreflang, ✅ Canonical, ✅ Open Graph`);
console.log(`   - Locale: ✅ Pre-set via localStorage + cookie before React hydration`);
console.log('\n🔍 Verify: Run "npm run preview" and view page source to see prerendered content\n');
