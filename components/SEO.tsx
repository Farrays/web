import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useLocation } from 'react-router-dom';
import { useI18n } from '../hooks/useI18n';

const SEO: React.FC = () => {
  const { locale, t } = useI18n();
  const location = useLocation();

  // Detect current page from route
  const getPageFromPath = (path: string): string => {
    if (path === '/' || path === '') return 'home';
    if (path.includes('/dancehall')) return 'dancehall';
    if (path.includes('/clases/baile-barcelona')) return 'classes';
    return 'home';
  };

  const page = getPageFromPath(location.pathname);

  const baseUrl = 'https://www.farrayscenter.com';

  // Map internal page names to URL paths
  const pageToPath = {
    home: '',
    classes: 'clases/baile-barcelona',
    dancehall: 'clases/dancehall-barcelona',
  };

  const pagePath = pageToPath[page as keyof typeof pageToPath] || '';
  const currentUrl = `${baseUrl}/${locale}${pagePath ? `/${pagePath}` : ''}`;

  // Metadata mapping per page
  const metaData = {
    home: {
      titleKey: 'pageTitle',
      descKey: 'metaDescription',
      image: `${baseUrl}/images/og-home.jpg`,
    },
    classes: {
      titleKey: 'danceClassesHub_title',
      descKey: 'danceClassesHub_description',
      image: `${baseUrl}/images/og-classes-hub.jpg`,
    },
    dancehall: {
      titleKey: 'dancehallPageTitle',
      descKey: 'dancehallMetaDesc',
      image: `${baseUrl}/images/og-dancehall.jpg`,
    },
  };

  const { titleKey, descKey, image } = metaData[page as keyof typeof metaData];
  const title = t(titleKey);
  const description = t(descKey) || t('metaDescription');

  // OG locale mapping
  const ogLocaleMap = {
    es: 'es_ES',
    ca: 'ca_ES',
    en: 'en_US',
    fr: 'fr_FR',
  };

  return (
    <Helmet>
      {/* Basic meta tags */}
      <html lang={locale} />
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={currentUrl} />

      {/* hreflang alternates - bidirectional */}
      <link rel="alternate" hrefLang="es" href={`${baseUrl}/es${pagePath ? `/${pagePath}` : ''}`} />
      <link rel="alternate" hrefLang="ca" href={`${baseUrl}/ca${pagePath ? `/${pagePath}` : ''}`} />
      <link rel="alternate" hrefLang="en" href={`${baseUrl}/en${pagePath ? `/${pagePath}` : ''}`} />
      <link rel="alternate" hrefLang="fr" href={`${baseUrl}/fr${pagePath ? `/${pagePath}` : ''}`} />
      <link
        rel="alternate"
        hrefLang="x-default"
        href={`${baseUrl}/es${pagePath ? `/${pagePath}` : ''}`}
      />

      {/* Open Graph */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={currentUrl} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:locale" content={ogLocaleMap[locale]} />
      <meta property="og:site_name" content="Farray's International Dance Center" />

      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={currentUrl} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />

      {/* Additional SEO */}
      <meta name="robots" content="index, follow" />
    </Helmet>
  );
};

export default SEO;
