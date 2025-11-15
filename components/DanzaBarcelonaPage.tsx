import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { useI18n } from '../hooks/useI18n';
import { HUB_CATEGORIES } from '../constants/danceClassesHub';
import AnimateOnScroll from './AnimateOnScroll';
import FAQSection from './FAQSection';
import AnimatedCounter from './AnimatedCounter';
import type { ValuePillar } from '../types';

// --- Icons for Why Study at FIDC  ---
const GlobeEuropeAfricaIcon: React.FC<React.SVGProps<SVGSVGElement>> = props => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 0 0 8.716-6.747M12 21a9.004 9.004 0 0 1-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 0 1 7.843 4.582M12 3a8.997 8.997 0 0 0-7.843 4.582m15.686 0A11.953 11.953 0 0 1 12 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0 1 21 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0 1 12 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 0 1 3 12c0-1.605.42-3.111 1.157-4.418" />
  </svg>
);

const SparklesIcon: React.FC<React.SVGProps<SVGSVGElement>> = props => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904 9 18.75l-.813-2.846a4.5 4.5 0 0 0-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 0 0 3.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 0 0 3.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 0 0-3.09 3.09ZM18.259 8.715 18 9.75l-.259-1.035a3.375 3.375 0 0 0-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 0 0 2.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 0 0 2.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 0 0-2.456 2.456ZM16.894 20.567 16.5 21.75l-.394-1.183a2.25 2.25 0 0 0-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 0 0 1.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 0 0 1.423 1.423l1.183.394-1.183.394a2.25 2.25 0 0 0-1.423 1.423Z" />
  </svg>
);

const BuildingOffice2Icon: React.FC<React.SVGProps<SVGSVGElement>> = props => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 21h16.5M4.5 3h15M5.25 3v18m13.5-18v18M9 6.75h6M9 12h6m-6 5.25h6M5.25 6h.008v.008H5.25V6zm.75 0h.008v.008H6V6zm.75 0h.008v.008H6.75V6zm.75 0h.008v.008H7.5V6zm.75 0h.008v.008H8.25V6zm.75 0h.008v.008H9V6zm.75 0h.008v.008H9.75V6zm.75 0h.008v.008H10.5V6zm.75 0h.008v.008H11.25V6zm.75 0h.008v.008H12V6zm.75 0h.008v.008H12.75V6zm.75 0h.008v.008H13.5V6zm.75 0h.008v.008H14.25V6zm.75 0h.008v.008H15V6zm.75 0h.008v.008H15.75V6zm.75 0h.008v.008H16.5V6zm.75 0h.008v.008H17.25V6zm.75 0h.008v.008H18V6zm.75 0h.008v.008H18.75V6z" />
  </svg>
);

const HeartIcon: React.FC<React.SVGProps<SVGSVGElement>> = props => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
  </svg>
);

const ClockIcon: React.FC<React.SVGProps<SVGSVGElement>> = props => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
  </svg>
);

const AcademicCapIcon: React.FC<React.SVGProps<SVGSVGElement>> = props => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.627 48.627 0 0 1 12 20.904a48.627 48.627 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.636 50.636 0 0 0-2.658-.813A59.906 59.906 0 0 1 12 3.493a59.903 59.903 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0 1 12 13.489a50.702 50.702 0 0 1 7.74-3.342M6.75 15a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm0 0v-3.675A55.378 55.378 0 0 1 12 8.443m-7.007 11.55A5.981 5.981 0 0 0 6.75 15.75v-1.5" />
  </svg>
);

const MapPinIcon: React.FC<React.SVGProps<SVGSVGElement>> = props => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
  </svg>
);

const valuePillars: ValuePillar[] = [
  { id: 'instructors', titleKey: 'whyPillar1Title', contentKey: 'whyPillar1Content', Icon: GlobeEuropeAfricaIcon },
  { id: 'method', titleKey: 'whyPillar2Title', contentKey: 'whyPillar2Content', Icon: SparklesIcon },
  { id: 'facilities', titleKey: 'whyPillar3Title', contentKey: 'whyPillar3Content', Icon: BuildingOffice2Icon },
  { id: 'atmosphere', titleKey: 'whyPillar4Title', contentKey: 'whyPillar4Content', Icon: HeartIcon },
  { id: 'flexibility', titleKey: 'whyPillar5Title', contentKey: 'whyPillar5Content', Icon: ClockIcon },
  { id: 'prestige', titleKey: 'whyPillar6Title', contentKey: 'whyPillar6Content', Icon: AcademicCapIcon },
  { id: 'location', titleKey: 'whyPillar7Title', contentKey: 'whyPillar7Content', Icon: MapPinIcon },
];

const DanzaBarcelonaPage: React.FC = () => {
  const { t, locale } = useI18n();
  const baseUrl = 'https://www.farrayscenter.com';

  // Get the "contemporary" category data from HUB_CATEGORIES
  const danzaCategory = HUB_CATEGORIES.find(cat => cat.key === 'contemporary');

  if (!danzaCategory) {
    throw new Error('Category "contemporary" not found in HUB_CATEGORIES');
  }

  // FAQ data for Danza
  const danzaFaqs = [
    { id: 'danza-1', question: t('danzaFaqQ1'), answer: t('danzaFaqA1') },
    { id: 'danza-2', question: t('danzaFaqQ2'), answer: t('danzaFaqA2') },
    { id: 'danza-3', question: t('danzaFaqQ3'), answer: t('danzaFaqA3') },
    { id: 'danza-4', question: t('danzaFaqQ4'), answer: t('danzaFaqA4') },
    { id: 'danza-5', question: t('danzaFaqQ5'), answer: t('danzaFaqA5') },
    { id: 'danza-6', question: t('danzaFaqQ6'), answer: t('danzaFaqA6') },
    { id: 'danza-7', question: t('danzaFaqQ7'), answer: t('danzaFaqA7') },
    { id: 'danza-8', question: t('danzaFaqQ8'), answer: t('danzaFaqA8') },
    { id: 'danza-9', question: t('danzaFaqQ9'), answer: t('danzaFaqA9') },
    { id: 'danza-10', question: t('danzaFaqQ10'), answer: t('danzaFaqA10') },
  ];


  // Schema Markup - BreadcrumbList
  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: t('danzaBarcelona_breadcrumb_home'),
        item: `${baseUrl}/${locale}`,
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: t('danzaBarcelona_breadcrumb_current'),
        item: `${baseUrl}/${locale}/clases/danza-barcelona`,
      },
    ],
  };

  // Schema Markup - ItemList (Dance Styles)
  const itemListSchema = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: 'Estilos de Danza en Barcelona - Farray\'s Center',
    itemListElement: danzaCategory.allStyles.map((style, idx) => ({
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
    mainEntity: danzaFaqs.map(faq => ({
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
    name: 'Clases de Danza en Barcelona',
    description: t('danzaBarcelona_description'),
    provider: {
      '@type': 'Organization',
      name: 'Farray\'s International Dance Center',
      sameAs: 'https://www.farrayscenter.com',
    },
    hasCourseInstance: danzaCategory.allStyles.map(style => ({
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
          id="danza-barcelona-hero"
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
                    {t('danzaBarcelona_breadcrumb_home')}
                  </Link>
                </li>
                <li aria-hidden="true">/</li>
                <li className="text-neutral/90" aria-current="page">
                  {t('danzaBarcelona_breadcrumb_current')}
                </li>
              </ol>
            </nav>

            {/* H1 + Intro */}
            <AnimateOnScroll>
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter leading-tight mb-6 holographic-text">
                {t('danzaBarcelona_h1')}
              </h1>
              <p className="max-w-4xl mx-auto text-xl md:text-2xl text-neutral/90 mt-8 leading-relaxed">
                {t('danzaBarcelona_intro')}
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

        {/* Dance Styles Grid Section */}
        <section aria-labelledby="styles-title" className="py-20 md:py-32 bg-primary-dark/10">
          <div className="container mx-auto px-6 text-center">
            <AnimateOnScroll>
              <h2 id="styles-title" className="text-4xl md:text-5xl font-black tracking-tighter mb-4 holographic-text">
                {t('danzaBarcelona_styles_title')}
              </h2>
            </AnimateOnScroll>
            <AnimateOnScroll delay={200}>
              <p className="max-w-3xl mx-auto text-lg text-neutral/90 mb-12">
                {t('danzaBarcelona_styles_description')}
              </p>
            </AnimateOnScroll>

            {/* Grid of Dance Styles */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {danzaCategory.allStyles.map((style, index) => (
                <AnimateOnScroll key={style.key} delay={index * 100}>
                  <Link
                    to={`/${locale}${style.url}`}
                    className="group block relative rounded-xl overflow-hidden shadow-lg h-80 bg-black text-white transition-all duration-500 ease-in-out hover:shadow-accent-glow hover:scale-105"
                  >
                    {/* Background Image - Using same image for all contemporary styles */}
                    <img
                      src={danzaCategory.imageUrl}
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

                      {/* CTA appears on hover */}
                      <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 mt-3">
                        <span className="inline-flex items-center text-sm font-bold text-primary-accent">
                          Ver más →
                        </span>
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
                          <pillar.Icon className="h-10 w-10 text-primary-accent transition-all duration-500 group-hover:scale-110" />
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
        <section className="py-20 md:py-32 bg-black">
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
          title={t('danzaBarcelona_faq_title')}
          faqs={danzaFaqs}
          pageUrl={`${baseUrl}/${locale}/clases/danza-barcelona`}
        />

        {/* Final CTA Section - Conversion Optimized */}
        <section className="py-20 md:py-32 bg-gradient-to-br from-primary-dark via-black to-black">
          <div className="container mx-auto px-6 text-center">
            <AnimateOnScroll>
              <h2 className="text-4xl md:text-6xl font-black tracking-tighter mb-6 holographic-text">
                Tu Primera Clase Te Está Esperando
              </h2>
              <p className="max-w-2xl mx-auto text-xl text-neutral/90 mb-4">
                No dejes pasar más tiempo. Cada semana que esperas es una semana menos bailando.
              </p>
              <p className="max-w-xl mx-auto text-lg text-neutral/75 mb-10">
                Únete a decenas de bailarines que ya están transformando su técnica, postura y expresión con nosotros.
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

export default DanzaBarcelonaPage;
