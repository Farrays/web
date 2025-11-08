import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useI18n } from '../hooks/useI18n';
import type { Page } from '../types';

interface SEOProps {
  page: Page;
}

const SEO: React.FC<SEOProps> = ({ page }) => {
  const { locale, t } = useI18n();

  const baseUrl = 'https://www.farrayscenter.com';
  const currentPath = `/${locale}${page !== 'home' ? `/${page}` : ''}`;
  const currentUrl = `${baseUrl}${currentPath}`;

  // Metadata mapping per page
  const metaData = {
    home: {
      titleKey: 'pageTitle',
      descKey: 'metaDescription',
      image: `${baseUrl}/images/og-home.jpg`,
    },
    classes: {
      titleKey: 'danceClassesPageTitle',
      descKey: 'danceClassesMetaDesc',
      image: `${baseUrl}/images/og-classes.jpg`,
    },
    dancehall: {
      titleKey: 'dancehallPageTitle',
      descKey: 'dancehallMetaDesc',
      image: `${baseUrl}/images/og-dancehall.jpg`,
    },
    afrobeats: {
      titleKey: 'afrobeatsPageTitle',
      descKey: 'afrobeatsMetaDesc',
      image: `${baseUrl}/images/og-afrobeats.jpg`,
    },
  };

  const { titleKey, descKey, image } = metaData[page];
  const title = t(titleKey);
  const description = t(descKey) || t('metaDescription'); // Fallback to home description

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
      <link rel="alternate" hrefLang="es" href={`${baseUrl}/es${page !== 'home' ? `/${page}` : ''}`} />
      <link rel="alternate" hrefLang="ca" href={`${baseUrl}/ca${page !== 'home' ? `/${page}` : ''}`} />
      <link rel="alternate" hrefLang="en" href={`${baseUrl}/en${page !== 'home' ? `/${page}` : ''}`} />
      <link rel="alternate" hrefLang="fr" href={`${baseUrl}/fr${page !== 'home' ? `/${page}` : ''}`} />
      <link rel="alternate" hrefLang="x-default" href={`${baseUrl}/es${page !== 'home' ? `/${page}` : ''}`} />

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
