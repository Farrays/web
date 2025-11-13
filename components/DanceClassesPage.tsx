import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { useI18n } from '../hooks/useI18n';
import { HUB_CATEGORIES, FEATURED_STYLES, type HubCategory } from '../constants/danceClassesHub';
import AnimateOnScroll from './AnimateOnScroll';
import FAQSection from './FAQSection';
import CategoryModalHub from './CategoryModalHub';

const DanceClassesPage: React.FC = () => {
  const { t, locale } = useI18n();
  const baseUrl = 'https://www.farrayscenter.com';

  // State for modals
  const [openCategory, setOpenCategory] = useState<HubCategory | null>(null);

  // FAQ data (MANTENER EXISTENTE)
  const classesFaqs = [
    { id: 'cl-1', question: t('classesFaqQ1'), answer: t('classesFaqA1') },
    { id: 'cl-2', question: t('classesFaqQ2'), answer: t('classesFaqA2') },
    { id: 'cl-3', question: t('classesFaqQ3'), answer: t('classesFaqA3') },
    { id: 'cl-4', question: t('classesFaqQ4'), answer: t('classesFaqA4') },
    { id: 'cl-5', question: t('classesFaqQ5'), answer: t('classesFaqA5') },
  ];

  // Schema Markup - BreadcrumbList
  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: t('danceClassesHub_breadcrumb_home'),
        item: `${baseUrl}/${locale}`,
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: t('danceClassesHub_breadcrumb_current'),
        item: `${baseUrl}/${locale}/clases/baile-barcelona`,
      },
    ],
  };

  // Schema Markup - ItemList (Categories)
  const itemListSchema = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: 'Categorías de clases de baile en Barcelona',
    itemListElement: HUB_CATEGORIES.map((cat, idx) => ({
      '@type': 'ListItem',
      position: idx + 1,
      name: t(cat.titleKey),
      url: `${baseUrl}/${locale}${cat.pillarUrl}`,
    })),
  };

  return (
    <>
      <Helmet>
        <title>{t('danceClassesHub_title')}</title>
        <meta name="description" content={t('danceClassesHub_description')} />
        <link rel="canonical" href={`${baseUrl}/${locale}/clases/baile-barcelona`} />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content={`${baseUrl}/${locale}/clases/baile-barcelona`} />
        <meta property="og:title" content={t('danceClassesHub_title')} />
        <meta property="og:description" content={t('danceClassesHub_description')} />
        <meta property="og:image" content={`${baseUrl}/images/og-image-classes-hub.jpg`} />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content={`${baseUrl}/${locale}/clases/baile-barcelona`} />
        <meta name="twitter:title" content={t('danceClassesHub_title')} />
        <meta name="twitter:description" content={t('danceClassesHub_description')} />
        <meta name="twitter:image" content={`${baseUrl}/images/twitter-image-classes-hub.jpg`} />

        {/* Hreflang tags */}
        <link rel="alternate" hrefLang="es" href={`${baseUrl}/es/clases/baile-barcelona`} />
        <link rel="alternate" hrefLang="ca" href={`${baseUrl}/ca/clases/baile-barcelona`} />
        <link rel="alternate" hrefLang="en" href={`${baseUrl}/en/clases/baile-barcelona`} />
        <link rel="alternate" hrefLang="fr" href={`${baseUrl}/fr/clases/baile-barcelona`} />
        <link
          rel="alternate"
          hrefLang="x-default"
          href={`${baseUrl}/es/clases/baile-barcelona`}
        />

        {/* Schema Markup */}
        <script type="application/ld+json">{JSON.stringify(breadcrumbSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(itemListSchema)}</script>
      </Helmet>

      <div className="pt-20 md:pt-24 bg-primary-dark/10">
        {/* Header Section */}
        <section className="py-10 md:py-16">
          <div className="container max-w-6xl mx-auto px-6">
            {/* Breadcrumb */}
            <nav aria-label="Breadcrumb" className="mb-6">
              <ol className="flex items-center gap-2 text-sm text-gray-500">
                <li>
                  <Link to={`/${locale}`} className="hover:text-primary-accent transition-colors">
                    {t('danceClassesHub_breadcrumb_home')}
                  </Link>
                </li>
                <li aria-hidden="true">/</li>
                <li className="text-gray-700" aria-current="page">
                  {t('danceClassesHub_breadcrumb_current')}
                </li>
              </ol>
            </nav>

            {/* H1 + Intro */}
            <AnimateOnScroll>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-neutral mb-4">
                {t('danceClassesHub_h1')}
              </h1>
              <p className="text-base md:text-lg text-gray-600 max-w-4xl">
                {t('danceClassesHub_intro')}
              </p>
            </AnimateOnScroll>
          </div>
        </section>

        {/* Categories Grid Section */}
        <section aria-labelledby="categories-title" className="py-12 md:py-16">
          <div className="container max-w-6xl mx-auto px-6">
            <AnimateOnScroll>
              <h2 id="categories-title" className="text-2xl md:text-3xl font-semibold text-neutral mb-3">
                {t('danceClassesHub_categories_title')}
              </h2>
              <p className="text-gray-600 mb-8">{t('danceClassesHub_categories_description')}</p>
            </AnimateOnScroll>

            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {HUB_CATEGORIES.map((category, index) => (
                <AnimateOnScroll key={category.key} delay={index * 100}>
                  <article
                    className="rounded-2xl shadow-sm ring-1 ring-gray-200 bg-white p-6 flex flex-col h-full hover:shadow-md transition-shadow"
                    aria-labelledby={`card-${category.key}-title`}
                  >
                    {/* Title - USAR classCat*Title existente */}
                    <h3
                      id={`card-${category.key}-title`}
                      className="text-xl font-semibold text-neutral mb-2"
                    >
                      {t(category.titleKey)}
                    </h3>

                    {/* Description - USAR classCat*Desc existente */}
                    <p className="text-gray-600 mb-3 text-sm">{t(category.descriptionKey)}</p>

                    {/* 3 Bullets */}
                    <ul className="text-sm text-gray-600 list-disc list-inside space-y-1 mb-4">
                      <li>{t(`danceClassesHub_${category.key}_bullet1`)}</li>
                      <li>{t(`danceClassesHub_${category.key}_bullet2`)}</li>
                      <li>{t(`danceClassesHub_${category.key}_bullet3`)}</li>
                    </ul>

                    {/* Featured Styles Badges */}
                    <div
                      className="flex flex-wrap gap-2 mb-5"
                      aria-label={t('danceClassesHub_featured_styles_label')}
                    >
                      {category.featuredStyles.map((style) => (
                        <Link
                          key={style.key}
                          to={`/${locale}${style.url}`}
                          className="inline-flex items-center rounded-xl px-3 py-1 text-xs font-medium ring-1 ring-gray-200 hover:ring-primary-accent hover:text-primary-accent transition-colors"
                        >
                          {t(`danceClassesHub_style_${style.key}`)}
                        </Link>
                      ))}
                    </div>

                    {/* CTAs */}
                    <div className="mt-auto flex flex-col sm:flex-row items-start sm:items-center gap-3">
                      <Link
                        to={`/${locale}${category.pillarUrl}`}
                        className="inline-flex items-center justify-center rounded-xl px-4 py-2 text-sm font-medium ring-1 ring-gray-300 hover:ring-primary-accent hover:bg-gray-50 transition-colors"
                      >
                        {t('danceClassesHub_cta_view_category')}
                      </Link>
                      <button
                        onClick={() => setOpenCategory(category)}
                        className="text-sm text-gray-600 hover:text-primary-accent transition-colors font-medium"
                        aria-haspopup="dialog"
                      >
                        {t('danceClassesHub_cta_view_all_styles')}
                      </button>
                    </div>
                  </article>
                </AnimateOnScroll>
              ))}
            </div>
          </div>
        </section>

        {/* Featured Styles Section */}
        <section aria-labelledby="featured-title" className="py-12 md:py-16">
          <div className="container max-w-6xl mx-auto px-6">
            <AnimateOnScroll>
              <h2 id="featured-title" className="text-2xl md:text-3xl font-semibold text-neutral mb-3">
                {t('danceClassesHub_featured_title')}
              </h2>
              <p className="text-gray-600 mb-6">{t('danceClassesHub_featured_description')}</p>

              <div className="flex flex-wrap gap-2">
                {FEATURED_STYLES.map((style) => (
                  <Link
                    key={style.key}
                    to={`/${locale}${style.url}`}
                    className="inline-flex items-center rounded-xl px-4 py-2 text-sm font-medium ring-1 ring-gray-200 hover:ring-primary-accent hover:bg-gray-50 hover:text-primary-accent transition-colors"
                  >
                    {t(`danceClassesHub_style_${style.key}`)}
                  </Link>
                ))}
              </div>
            </AnimateOnScroll>
          </div>
        </section>

        {/* FAQ Section - MANTENER EXISTENTE */}
        <FAQSection
          title={t('faqTitle')}
          faqs={classesFaqs}
          pageUrl={`${baseUrl}/${locale}/clases/baile-barcelona`}
        />

        {/* Modal */}
        <CategoryModalHub
          isOpen={openCategory !== null}
          category={openCategory}
          onClose={() => setOpenCategory(null)}
        />
      </div>
    </>
  );
};

export default DanceClassesPage;
