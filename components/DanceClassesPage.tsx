import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { useI18n } from '../hooks/useI18n';
import { HUB_CATEGORIES, FEATURED_STYLES } from '../constants/danceClassesHub';
import AnimateOnScroll from './AnimateOnScroll';
import FAQSection from './FAQSection';

const DanceClassesPage: React.FC = () => {
  const { t, locale } = useI18n();
  const baseUrl = 'https://www.farrayscenter.com';

  // FAQ data (EXPANDIDO para mejor SEO en motores de IA)
  const classesFaqs = [
    { id: 'cl-1', question: t('classesFaqQ1'), answer: t('classesFaqA1') },
    { id: 'cl-2', question: t('classesFaqQ2'), answer: t('classesFaqA2') },
    { id: 'cl-3', question: t('classesFaqQ3'), answer: t('classesFaqA3') },
    { id: 'cl-4', question: t('classesFaqQ4'), answer: t('classesFaqA4') },
    { id: 'cl-5', question: t('classesFaqQ5'), answer: t('classesFaqA5') },
    { id: 'cl-6', question: t('classesFaqQ6'), answer: t('classesFaqA6') },
    { id: 'cl-7', question: t('classesFaqQ7'), answer: t('classesFaqA7') },
    { id: 'cl-8', question: t('classesFaqQ8'), answer: t('classesFaqA8') },
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

  // Schema Markup - FAQPage
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: classesFaqs.map(faq => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  };

  return (
    <>
      {/* SEO metadata (title, description, og, hreflang) is handled by the global SEO.tsx component */}
      {/* Page-specific Schema Markup */}
      <Helmet>
        <script type="application/ld+json">{JSON.stringify(breadcrumbSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(itemListSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
      </Helmet>

      <div className="pt-20 md:pt-24">
        {/* Hero Section - Like DancehallPage */}
        <section
          id="classes-hub-hero"
          className="relative text-center py-32 md:py-40 overflow-hidden flex items-center justify-center min-h-[600px]"
        >
          {/* Background like DancehallPage Hero */}
          <div className="absolute inset-0 bg-black">
            <div className="absolute inset-0 bg-gradient-to-br from-primary-dark/30 via-black to-black"></div>
            <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-20"></div>
          </div>
          <div className="relative z-20 container mx-auto px-6">
            {/* Breadcrumb */}
            <nav aria-label="Breadcrumb" className="mb-8">
              <ol className="flex items-center justify-center gap-2 text-sm text-neutral/70">
                <li>
                  <Link to={`/${locale}`} className="hover:text-primary-accent transition-colors">
                    {t('danceClassesHub_breadcrumb_home')}
                  </Link>
                </li>
                <li aria-hidden="true">/</li>
                <li className="text-neutral/90" aria-current="page">
                  {t('danceClassesHub_breadcrumb_current')}
                </li>
              </ol>
            </nav>

            {/* H1 + Intro */}
            <AnimateOnScroll>
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter leading-tight mb-6 holographic-text">
                {t('danceClassesHub_h1')}
              </h1>
              <p className="max-w-4xl mx-auto text-xl md:text-2xl text-neutral/90 mt-8 leading-relaxed">
                {t('danceClassesHub_intro')}
              </p>
            </AnimateOnScroll>
          </div>
        </section>

        {/* Categories Grid Section */}
        <section aria-labelledby="categories-title" className="py-20 md:py-32 bg-primary-dark/10">
          <div className="container mx-auto px-6 text-center">
            <AnimateOnScroll>
              <h2 id="categories-title" className="text-4xl md:text-5xl font-black tracking-tighter mb-4 holographic-text">
                {t('danceClassesHub_categories_title')}
              </h2>
            </AnimateOnScroll>
            <AnimateOnScroll delay={200}>
              <p className="max-w-3xl mx-auto text-lg text-neutral/90 mb-12">{t('danceClassesHub_categories_description')}</p>
            </AnimateOnScroll>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {HUB_CATEGORIES.map((category, index) => (
                <AnimateOnScroll key={category.key} delay={index * 100}>
                  <article
                    className="[perspective:1000px] focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-accent focus-visible:ring-offset-2 rounded-xl"
                    aria-labelledby={`card-${category.key}-title`}
                  >
                    <div className="group relative rounded-xl overflow-hidden shadow-lg h-96 bg-black text-white transition-all duration-500 ease-in-out [transform-style:preserve-3d] hover:shadow-accent-glow hover:[transform:translateY(-0.5rem)_scale(1.05)_rotateY(5deg)]">
                      {/* Background Image */}
                      <img
                        src={category.imageUrl}
                        alt={`${t(category.titleKey)} - Clases en Barcelona`}
                        className="absolute inset-0 w-full h-full object-cover transition-all duration-500 ease-in-out group-hover:scale-110 opacity-40 group-hover:opacity-60"
                        loading={index < 3 ? 'eager' : 'lazy'}
                        decoding="async"
                      />

                      {/* Gradient Overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent"></div>

                      {/* Hover Border Effect */}
                      <div className="absolute inset-0 border-2 border-transparent group-hover:border-primary-accent rounded-xl transition-all duration-300 pointer-events-none"></div>

                      {/* Content */}
                      <div className="relative flex flex-col justify-end h-full p-6 text-left">
                        {/* Title - USAR classCat*Title existente */}
                        <h3
                          id={`card-${category.key}-title`}
                          className="text-3xl font-bold mb-2"
                        >
                          {t(category.titleKey)}
                        </h3>

                        {/* Description - Always visible on mobile, expandable on hover on desktop */}
                        <div className="h-auto md:h-0 md:group-hover:h-auto overflow-hidden transition-all duration-300 ease-in-out">
                          <p className="text-neutral/90 text-sm mb-3 leading-relaxed opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-300 md:delay-150">
                            {t(category.descriptionKey)}
                          </p>

                          {/* 3 Bullets */}
                          <ul className="text-xs text-neutral/70 space-y-1 mb-3 opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-300 md:delay-150">
                            <li className="flex items-start">
                              <span className="text-primary-accent mr-2">•</span>
                              <span>{t(`danceClassesHub_${category.key}_bullet1`)}</span>
                            </li>
                            <li className="flex items-start">
                              <span className="text-primary-accent mr-2">•</span>
                              <span>{t(`danceClassesHub_${category.key}_bullet2`)}</span>
                            </li>
                            <li className="flex items-start">
                              <span className="text-primary-accent mr-2">•</span>
                              <span>{t(`danceClassesHub_${category.key}_bullet3`)}</span>
                            </li>
                          </ul>

                          {/* Featured Styles Badges */}
                          <div className="mb-3 opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-300 md:delay-150">
                            <div className="flex flex-wrap gap-2">
                              {category.featuredStyles.map((style) => (
                                <Link
                                  key={style.key}
                                  to={`/${locale}${style.url}`}
                                  className="inline-flex items-center rounded-lg px-2 py-1 text-xs font-medium bg-primary-accent/20 border border-primary-accent/30 text-neutral hover:bg-primary-accent hover:text-white transition-all duration-300"
                                  onClick={(e) => e.stopPropagation()}
                                >
                                  {t(`danceClassesHub_style_${style.key}`)}
                                </Link>
                              ))}
                            </div>
                          </div>

                          {/* CTA */}
                          <div className="flex justify-center">
                            <Link
                              to={`/${locale}${category.pillarUrl}`}
                              className="inline-flex items-center justify-center rounded-full px-4 py-2 text-sm font-bold bg-primary-accent text-white hover:bg-primary-dark transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-accent-glow"
                            >
                              Ver estilos
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </article>
                </AnimateOnScroll>
              ))}
            </div>
          </div>
        </section>

        {/* Featured Styles Section */}
        <section aria-labelledby="featured-title" className="py-20 md:py-32 bg-black text-white">
          <div className="container mx-auto px-6 text-center">
            <AnimateOnScroll>
              <h2 id="featured-title" className="text-4xl md:text-5xl font-black tracking-tighter mb-4 holographic-text">
                {t('danceClassesHub_featured_title')}
              </h2>
            </AnimateOnScroll>
            <AnimateOnScroll delay={200}>
              <p className="max-w-3xl mx-auto text-lg text-neutral/90 mb-12">{t('danceClassesHub_featured_description')}</p>
            </AnimateOnScroll>

            <AnimateOnScroll delay={300}>
              <div className="flex flex-wrap justify-center gap-3">
                {FEATURED_STYLES.map((style) => (
                  <Link
                    key={style.key}
                    to={`/${locale}${style.url}`}
                    className="inline-flex items-center rounded-lg px-5 py-3 text-sm font-bold bg-primary-dark/50 border border-primary-accent/30 text-white hover:bg-primary-accent hover:border-primary-accent transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-accent-glow"
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
          title={t('danceClassesHub_faq_title')}
          faqs={classesFaqs}
          pageUrl={`${baseUrl}/${locale}/clases/baile-barcelona`}
        />
      </div>
    </>
  );
};

export default DanceClassesPage;
