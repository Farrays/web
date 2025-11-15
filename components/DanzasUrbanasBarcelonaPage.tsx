import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { useI18n } from '../hooks/useI18n';
import { HUB_CATEGORIES } from '../constants/danceClassesHub';
import AnimateOnScroll from './AnimateOnScroll';
import FAQSection from './FAQSection';
import AnimatedCounter from './AnimatedCounter';
import Icon, { type IconName } from './Icon';
import type { ValuePillar } from '../types';

// Type extension for ValuePillar with icon names instead of components
type ValuePillarWithIcon = Omit<ValuePillar, 'Icon'> & { iconName: IconName };

const valuePillars: ValuePillarWithIcon[] = [
  { id: 'international', titleKey: 'urbanWhyInternationalTitle', contentKey: 'urbanWhyInternationalContent', iconName: 'globe' },
  { id: 'method', titleKey: 'whyPillar2Title', contentKey: 'whyPillar2Content', iconName: 'sparkles' },
  { id: 'authentic_style', titleKey: 'urbanWhyAuthenticStyleTitle', contentKey: 'urbanWhyAuthenticStyleContent', iconName: 'star' },
  { id: 'career', titleKey: 'urbanWhyCareerTitle', contentKey: 'urbanWhyCareerContent', iconName: 'trophy' },
  { id: 'prestige', titleKey: 'urbanWhyPrestigeTitle', contentKey: 'urbanWhyPrestigeContent', iconName: 'academic-cap' },
  { id: 'facilities', titleKey: 'urbanWhyFacilitiesTitle', contentKey: 'urbanWhyFacilitiesContent', iconName: 'building' },
];

const DanzasUrbanasBarcelonaPage: React.FC = () => {
  const { t, locale } = useI18n();
  const baseUrl = 'https://www.farrayscenter.com';

  // Get the "urban" category data from HUB_CATEGORIES
  const urbanCategory = HUB_CATEGORIES.find(cat => cat.key === 'urban');

  if (!urbanCategory) {
    throw new Error('Category "urban" not found in HUB_CATEGORIES');
  }

  // FAQ data for Danzas Urbanas
  const urbanFaqs = [
    { id: 'urban-1', question: t('urbanFaqQ1'), answer: t('urbanFaqA1') },
    { id: 'urban-2', question: t('urbanFaqQ2'), answer: t('urbanFaqA2') },
    { id: 'urban-3', question: t('urbanFaqQ3'), answer: t('urbanFaqA3') },
    { id: 'urban-4', question: t('urbanFaqQ4'), answer: t('urbanFaqA4') },
    { id: 'urban-5', question: t('urbanFaqQ5'), answer: t('urbanFaqA5') },
    { id: 'urban-6', question: t('urbanFaqQ6'), answer: t('urbanFaqA6') },
    { id: 'urban-7', question: t('urbanFaqQ7'), answer: t('urbanFaqA7') },
    { id: 'urban-8', question: t('urbanFaqQ8'), answer: t('urbanFaqA8') },
    { id: 'urban-9', question: t('urbanFaqQ9'), answer: t('urbanFaqA9') },
    { id: 'urban-10', question: t('urbanFaqQ10'), answer: t('urbanFaqA10') },
  ];


  // Schema Markup - BreadcrumbList
  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: t('danzasUrbanas_breadcrumb_home'),
        item: `${baseUrl}/${locale}`,
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: t('danzasUrbanas_breadcrumb_current'),
        item: `${baseUrl}/${locale}/clases/danzas-urbanas-barcelona`,
      },
    ],
  };

  // Schema Markup - ItemList (Urban Dance Styles)
  const itemListSchema = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: 'Estilos de Danzas Urbanas en Barcelona - Farray\'s Center',
    itemListElement: urbanCategory.allStyles.map((style, idx) => ({
      '@type': 'ListItem',
      position: idx + 1,
      name: t(`danceClassesHub_style_${style.key}`),
      url: `${baseUrl}/${locale}${style.url}`,
    })),
  };

  // Schema Markup - FAQPage
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: urbanFaqs.map(faq => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  };

  // Schema Markup - Course
  const courseSchema = {
    '@context': 'https://schema.org',
    '@type': 'Course',
    name: 'Clases de Danzas Urbanas en Barcelona',
    description: t('danzasUrbanas_description'),
    provider: {
      '@type': 'Organization',
      name: 'Farray\'s International Dance Center',
      sameAs: 'https://www.farrayscenter.com',
    },
    hasCourseInstance: urbanCategory.allStyles.map(style => ({
      '@type': 'CourseInstance',
      name: t(`danceClassesHub_style_${style.key}`),
      courseMode: 'onsite',
      location: {
        '@type': 'Place',
        name: 'Farray\'s International Dance Center',
        address: {
          '@type': 'PostalAddress',
          streetAddress: 'Carrer d\'Entença, 100, Local 1',
          addressLocality: 'Barcelona',
          addressRegion: 'Catalonia',
          postalCode: '08015',
          addressCountry: 'ES',
        },
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
        <script type="application/ld+json">{JSON.stringify(courseSchema)}</script>
      </Helmet>

      <div className="pt-20 md:pt-24">
        {/* Hero Section */}
        <section
          id="danzas-urbanas-hero"
          className="relative text-center py-32 md:py-40 overflow-hidden flex items-center justify-center min-h-[600px]"
        >
          {/* Background */}
          <div className="absolute inset-0 bg-black">
            <div className="absolute inset-0 bg-gradient-to-br from-primary-dark/30 via-black to-black"></div>
            <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-20"></div>
          </div>
          <div className="relative z-20 container mx-auto px-6">
            {/* Breadcrumb */}
            <nav aria-label="Breadcrumb" className="mb-8">
              <ol className="flex items-center justify-center gap-2 text-sm text-neutral/75">
                <li>
                  <Link to={`/${locale}`} className="hover:text-primary-accent transition-colors">
                    {t('danzasUrbanas_breadcrumb_home')}
                  </Link>
                </li>
                <li aria-hidden="true">/</li>
                <li className="text-neutral/90" aria-current="page">
                  {t('danzasUrbanas_breadcrumb_current')}
                </li>
              </ol>
            </nav>

            {/* H1 + Intro */}
            <AnimateOnScroll>
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter leading-tight mb-6 holographic-text">
                {t('danzasUrbanas_h1')}
              </h1>
              <p className="max-w-4xl mx-auto text-xl md:text-2xl text-neutral/90 mt-8 leading-relaxed">
                {t('danzasUrbanas_intro')}
              </p>
            </AnimateOnScroll>

            {/* CTA Buttons */}
            <AnimateOnScroll delay={200}>
              <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link
                  to={`/${locale}#enroll`}
                  className="inline-flex items-center justify-center bg-primary-accent text-white font-bold text-lg py-4 px-10 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-accent-glow animate-glow"
                >
                  {t('enrollNow')}
                  <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </Link>
                <Link
                  to={`/${locale}#enroll`}
                  className="inline-flex items-center justify-center bg-transparent border-2 border-primary-accent text-primary-accent font-bold text-lg py-4 px-10 rounded-full transition-all duration-300 hover:bg-primary-accent hover:text-white"
                >
                  {t('heroCTA1')}
                </Link>
              </div>
            </AnimateOnScroll>
          </div>
        </section>

        {/* Urban Dance Styles Grid Section */}
        <section aria-labelledby="styles-title" className="py-12 md:py-20 bg-primary-dark/10">
          <div className="container mx-auto px-6 text-center">
            <AnimateOnScroll>
              <h2 id="styles-title" className="text-4xl md:text-5xl font-black tracking-tighter mb-4 holographic-text">
                {t('danzasUrbanas_styles_title')}
              </h2>
            </AnimateOnScroll>
            <AnimateOnScroll delay={200}>
              <p className="max-w-3xl mx-auto text-lg text-neutral/90 mb-12">
                {t('danzasUrbanas_styles_description')}
              </p>
            </AnimateOnScroll>

            {/* Grid of Urban Dance Styles */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {urbanCategory.allStyles.map((style, index) => (
                <AnimateOnScroll key={style.key} delay={index * 100}>
                  <Link
                    to={`/${locale}${style.url}`}
                    className="group block relative rounded-xl overflow-hidden shadow-lg h-80 bg-black text-white transition-all duration-500 ease-in-out hover:shadow-accent-glow hover:scale-105"
                  >
                    {/* Background Image - Using same image for all urban styles */}
                    <img
                      src={urbanCategory.imageUrl}
                      alt={`${t(`danceClassesHub_style_${style.key}`)} - Clases en Barcelona`}
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
                      <h3 className="text-2xl font-bold mb-2">{t(`danceClassesHub_style_${style.key}`)}</h3>

                      {/* Expandable Description + CTA - Always visible on mobile, hover on desktop */}
                      <div className="h-24 md:h-0 md:group-hover:h-24 overflow-hidden transition-all duration-300 ease-in-out">
                        <p className="text-neutral/90 text-sm mt-2 leading-relaxed opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-300 md:delay-150">
                          {t(`danceClassesHub_style_${style.key}_desc`)}
                        </p>
                        <div className="mt-3 inline-block text-primary-accent font-bold text-sm opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-300 md:delay-150">
                          {t('danzasUrbanas_viewMore')}
                        </div>
                      </div>
                    </div>
                  </Link>
                </AnimateOnScroll>
              ))}
            </div>
          </div>
        </section>

        {/* Why Study at FIDC Section */}
        <section aria-labelledby="why-title" className="py-20 md:py-32 bg-black">
          <div className="container mx-auto px-6">
            <AnimateOnScroll>
              <div className="text-center mb-16 max-w-3xl mx-auto">
                <h2 id="why-title" className="text-4xl md:text-5xl font-black tracking-tighter text-neutral mb-4 holographic-text">
                  {t('whyTitle')}
                </h2>
              </div>
            </AnimateOnScroll>
            <div className="flex flex-wrap justify-center -m-4">
              {valuePillars.map((pillar, index) => (
                <div key={pillar.id} className="w-full sm:w-1/2 lg:w-1/3 p-4">
                  <AnimateOnScroll delay={index * 100} className="h-full">
                    <div className="group p-8 bg-black/50 backdrop-blur-md border border-primary-dark/50 rounded-2xl shadow-lg transition-all duration-500 hover:border-primary-accent hover:shadow-accent-glow hover:-translate-y-3 hover:scale-[1.02] h-full flex flex-col">
                      <div className="mb-6">
                        <div className="bg-primary-dark/30 group-hover:bg-primary-accent/20 p-4 rounded-xl inline-block shadow-inner transition-all duration-500 group-hover:scale-110 group-hover:rotate-3">
                          <Icon name={pillar.iconName} className="h-10 w-10 text-primary-accent transition-all duration-500 group-hover:scale-110" />
                        </div>
                      </div>
                      <h3 className="text-2xl font-bold mb-4 text-neutral group-hover:text-white transition-colors duration-300">{t(pillar.titleKey)}</h3>
                      <p className="text-neutral/90 leading-relaxed flex-grow group-hover:text-neutral/90 transition-colors duration-300">
                        {t(pillar.contentKey)}
                      </p>
                    </div>
                  </AnimateOnScroll>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Stats Widget Section */}
        <section className="py-8 md:py-12 bg-black">
          <div className="container mx-auto px-6">
            <AnimateOnScroll>
              <div className="flex flex-col md:flex-row justify-center items-center gap-8 md:gap-16 max-w-5xl mx-auto">
                <div className="text-center">
                  <AnimatedCounter
                    target={8}
                    suffix="+"
                    className="text-4xl md:text-5xl font-black mb-2 holographic-text"
                  />
                  <p className="text-4xl md:text-5xl text-neutral/90 font-bold uppercase tracking-wide">
                    {t('yearsExperience')}
                  </p>
                </div>
                <div className="text-center">
                  <AnimatedCounter
                    target={1500}
                    suffix="+"
                    className="text-4xl md:text-5xl font-black mb-2 holographic-text"
                  />
                  <p className="text-4xl md:text-5xl text-neutral/90 font-bold uppercase tracking-wide">
                    {t('activeStudents')}
                  </p>
                </div>
                <div className="text-center">
                  <AnimatedCounter
                    target={15000}
                    suffix="+"
                    className="text-4xl md:text-5xl font-black mb-2 holographic-text"
                  />
                  <p className="text-4xl md:text-5xl text-neutral/90 font-bold uppercase tracking-wide">
                    {t('satisfiedStudents')}
                  </p>
                </div>
              </div>
            </AnimateOnScroll>
          </div>
        </section>

        {/* FAQ Section */}
        <FAQSection
          title={t('danzasUrbanas_faq_title')}
          faqs={urbanFaqs}
          pageUrl={`${baseUrl}/${locale}/clases/danzas-urbanas-barcelona`}
        />

        {/* Final CTA Section - Conversion Optimized */}
        <section className="py-20 md:py-32 bg-gradient-to-br from-primary-dark via-black to-black">
          <div className="container mx-auto px-6 text-center">
            <AnimateOnScroll>
              <h2 className="text-4xl md:text-6xl font-black tracking-tighter mb-6 holographic-text">
                {t('danzasUrbanas_finalCTA_title')}
              </h2>
              <p className="max-w-2xl mx-auto text-xl text-neutral/90 mb-4">
                {t('danzasUrbanas_finalCTA_subtitle')}
              </p>
              <p className="max-w-xl mx-auto text-lg text-neutral/75 mb-10">
                {t('danzasUrbanas_finalCTA_description')}
              </p>
            </AnimateOnScroll>

            <AnimateOnScroll delay={200}>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link
                  to={`/${locale}#enroll`}
                  className="inline-flex items-center justify-center bg-primary-accent text-white font-bold text-xl py-5 px-12 rounded-full transition-all duration-300 transform hover:scale-105 shadow-xl hover:shadow-accent-glow animate-glow"
                >
                  {t('enrollNow')}
                  <svg className="w-6 h-6 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </Link>
                <Link
                  to={`/${locale}#enroll`}
                  className="inline-flex items-center justify-center bg-transparent border-2 border-primary-accent text-primary-accent font-bold text-xl py-5 px-12 rounded-full transition-all duration-300 hover:bg-primary-accent hover:text-white"
                >
                  {t('heroCTA1')}
                </Link>
              </div>
            </AnimateOnScroll>
          </div>
        </section>
      </div>
    </>
  );
};

export default DanzasUrbanasBarcelonaPage;
