import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useI18n } from '../hooks/useI18n';
import AnimateOnScroll from './AnimateOnScroll';
import ProblemAgitateSectionV2 from './ProblemAgitateSectionV2';
import CulturalHistorySection from './CulturalHistorySection';
import BenefitsGridSection from './BenefitsGridSection';
import ScheduleSection from './ScheduleSection';
import FAQSection from './FAQSection';
import HowItWorksSection from './HowItWorksSection';
import AnimatedCounter from './AnimatedCounter';
import { LocalBusinessSchema, CourseSchema, AggregateReviewsSchema } from './SchemaMarkup';
import type { Testimonial } from '../types';

const DancehallPageV2: React.FC = () => {
  const { t, locale } = useI18n();
  const baseUrl = 'https://www.farrayscenter.com';
  const pageUrl = `${baseUrl}/${locale}/clases/dancehall-barcelona`;

  // Problem-Agitate data (JAMAICA FIRST + SVG icons)
  const problems = [
    {
      id: 'culture',
      titleKey: 'dancehallProblem6Title',
      descKey: 'dancehallProblem6Desc',
      icon: 'jamaica',
    },
    {
      id: 'stress',
      titleKey: 'dancehallProblem1Title',
      descKey: 'dancehallProblem1Desc',
      icon: 'stress',
    },
    {
      id: 'confidence',
      titleKey: 'dancehallProblem2Title',
      descKey: 'dancehallProblem2Desc',
      icon: 'confidence',
    },
    {
      id: 'boring',
      titleKey: 'dancehallProblem3Title',
      descKey: 'dancehallProblem3Desc',
      icon: 'fitness',
    },
    {
      id: 'social',
      titleKey: 'dancehallProblem4Title',
      descKey: 'dancehallProblem4Desc',
      icon: 'social',
    },
    {
      id: 'fresh',
      titleKey: 'dancehallProblem5Title',
      descKey: 'dancehallProblem5Desc',
      icon: 'dance',
    },
  ];

  // Benefits data
  const benefits = [
    { id: '1', number: '1', titleKey: 'dancehallBenefit1Title', descKey: 'dancehallBenefit1Desc' },
    { id: '2', number: '2', titleKey: 'dancehallBenefit2Title', descKey: 'dancehallBenefit2Desc' },
    { id: '3', number: '3', titleKey: 'dancehallBenefit3Title', descKey: 'dancehallBenefit3Desc' },
    { id: '4', number: '4', titleKey: 'dancehallBenefit4Title', descKey: 'dancehallBenefit4Desc' },
    { id: '5', number: '5', titleKey: 'dancehallBenefit5Title', descKey: 'dancehallBenefit5Desc' },
    { id: '6', number: '6', titleKey: 'dancehallBenefit6Title', descKey: 'dancehallBenefit6Desc' },
    { id: '7', number: '7', titleKey: 'dancehallBenefit7Title', descKey: 'dancehallBenefit7Desc' },
  ];

  // Schedule data (REAL from your copy)
  const schedules = [
    {
      id: '1',
      day: t('monday'),
      className: 'Dancehall Female Principiantes',
      time: '22:00 - 23:00',
      teacher: 'Sandra Gómez',
      level: t('beginnerLevel'),
    },
    {
      id: '2',
      day: t('wednesday'),
      className: 'Dancehall Twerk Intermedio',
      time: '21:00 - 22:00',
      teacher: 'Isabel López',
      level: t('intermediateLevel'),
    },
    {
      id: '3',
      day: t('thursday'),
      className: 'Dancehall Female Avanzado',
      time: '21:00 - 22:00',
      teacher: 'Isabel López',
      level: t('advancedLevel'),
    },
    {
      id: '4',
      day: t('thursday'),
      className: 'Dancehall Female Básico',
      time: '22:00 - 23:00',
      teacher: 'Sandra Gómez',
      level: t('basicLevel'),
    },
    {
      id: '5',
      day: t('friday'),
      className: 'Dancehall Twerk Principiantes',
      time: '18:00 - 19:00',
      teacher: 'Isabel López',
      level: t('beginnerLevel'),
    },
  ];

  // FAQs (TODAS las que pediste)
  const dancehallFaqs = [
    { id: 'dh-1', question: t('dancehallFaqQ1'), answer: t('dancehallFaqA1') },
    { id: 'dh-2', question: t('dancehallFaqQ2'), answer: t('dancehallFaqA2') },
    { id: 'dh-3', question: t('dancehallFaqQ3'), answer: t('dancehallFaqA3') },
    { id: 'dh-4', question: t('dancehallFaqQ4'), answer: t('dancehallFaqA4') },
    { id: 'dh-8', question: t('dancehallFaqQ8'), answer: t('dancehallFaqA8') },
    { id: 'dh-9', question: t('dancehallFaqQ9'), answer: t('dancehallFaqA9') },
    { id: 'dh-10', question: t('dancehallFaqQ10'), answer: t('dancehallFaqA10') },
    { id: 'dh-11', question: t('dancehallFaqQ11'), answer: t('dancehallFaqA11') },
    { id: 'dh-12', question: t('dancehallFaqQ12'), answer: t('dancehallFaqA12') },
    { id: 'dh-5', question: t('dancehallFaqQ5'), answer: t('dancehallFaqA5') },
    { id: 'dh-13', question: t('dancehallFaqQ13'), answer: t('dancehallFaqA13') },
    { id: 'dh-14', question: t('dancehallFaqQ14'), answer: t('dancehallFaqA14') },
    { id: 'dh-6', question: t('dancehallFaqQ6'), answer: t('dancehallFaqA6') },
    { id: 'dh-7', question: t('dancehallFaqQ7'), answer: t('dancehallFaqA7') },
    { id: 'dh-15', question: t('dancehallFaqQ15'), answer: t('dancehallFaqA15') },
  ];

  // Testimonials (REAL from Google reviews)
  const dancehallTestimonials: Testimonial[] = [
    {
      id: 1,
      name: 'Carlos Paires',
      image: '/images/testimonials/placeholder-m.jpg',
      rating: 5,
      city: {
        en: 'Barcelona, Spain',
        es: 'Barcelona, España',
        ca: 'Barcelona, Espanya',
        fr: 'Barcelone, Espagne',
      },
      quote: {
        en: 'Las clases de Mathi y Euge, son geniales. Nos lo pasamos muy bien, aprendemos a bailar y siempre nos hacen reír!',
        es: 'Las clases de Mathi y Euge, son geniales. Nos lo pasamos muy bien, aprendemos a bailar y siempre nos hacen reír!',
        ca: 'Les classes de Mathi i Euge són genials. Ens ho passem molt bé, aprenem a ballar i sempre ens fan riure!',
        fr: 'Les cours de Mathi et Euge sont géniaux. On passe un très bon moment, on apprend à danser et ils nous font toujours rire !',
      },
    },
    {
      id: 2,
      name: 'Ana Cid',
      image: '/images/testimonials/placeholder-f.jpg',
      rating: 5,
      city: {
        en: 'Barcelona, Spain',
        es: 'Barcelona, España',
        ca: 'Barcelona, Espanya',
        fr: 'Barcelone, Espagne',
      },
      quote: {
        en: '5 ⭐ y porque no hay más!! Espectacular, desde el minuto en el que pisas recepción, hasta los profesores, la calidad y el buen rollo entre el alumnado.',
        es: '5 ⭐ y porque no hay más!! Espectacular, desde el minuto en el que pisas recepción, hasta los profesores, la calidad y el buen rollo entre el alumnado.',
        ca: "5 ⭐ i perquè no n'hi ha més!! Espectacular, des del minut en què trepitges recepció, fins als professors, la qualitat i el bon rotllo entre l'alumnat.",
        fr: "5 ⭐ et parce qu'il n'y en a pas plus!! Spectaculaire, dès la minute où vous entrez à la réception, jusqu'aux professeurs, la qualité et la bonne ambiance entre les étudiants.",
      },
    },
    {
      id: 3,
      name: 'Marina Martinez',
      image: '/images/testimonials/placeholder-f.jpg',
      rating: 5,
      city: {
        en: 'Barcelona, Spain',
        es: 'Barcelona, España',
        ca: 'Barcelona, Espanya',
        fr: 'Barcelone, Espagne',
      },
      quote: {
        en: 'Me encantan las clases y todo muy profesional, dinero bien invertido',
        es: 'Me encantan las clases y todo muy profesional, dinero bien invertido',
        ca: "M'encanten les classes i tot molt professional, diners ben invertits",
        fr: "J'adore les cours et tout est très professionnel, argent bien investi",
      },
    },
  ];

  // Schema Markup data for reviews
  const reviewsSchemaData = dancehallTestimonials.map(testimonial => ({
    itemReviewed: { name: "Clases de Dancehall - Farray's Center", type: 'Course' },
    author: testimonial.name,
    reviewRating: { ratingValue: testimonial.rating.toString(), bestRating: '5' },
    reviewBody: testimonial.quote[locale],
    datePublished: '2025-01-01',
  }));

  // VideoObject Schema
  const videoSchema = {
    '@context': 'https://schema.org',
    '@type': 'VideoObject',
    name: t('dancehallVideoTitle'),
    description: t('dancehallVideoDesc'),
    thumbnailUrl: `${baseUrl}/images/classes/dancehall/video-thumbnail.jpg`,
    uploadDate: '2025-01-01',
    contentUrl: `${baseUrl}/videos/dancehall-class-experience.mp4`,
    embedUrl: `${baseUrl}/videos/dancehall-class-experience.mp4`,
  };

  return (
    <>
      {/* SEO Meta Tags */}
      <Helmet>
        <title>{t('dancehallPageTitleV2')}</title>
        <meta name="description" content={t('dancehallMetaDescriptionV2')} />
        <link rel="canonical" href={pageUrl} />

        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content={pageUrl} />
        <meta property="og:title" content={t('dancehallPageTitleV2')} />
        <meta property="og:description" content={t('dancehallMetaDescriptionV2')} />
        <meta
          property="og:image"
          content={`${baseUrl}/images/classes/dancehall/dancehall-hero-og.jpg`}
        />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content={pageUrl} />
        <meta name="twitter:title" content={t('dancehallPageTitleV2')} />
        <meta name="twitter:description" content={t('dancehallMetaDescriptionV2')} />
        <meta
          name="twitter:image"
          content={`${baseUrl}/images/classes/dancehall/dancehall-hero-twitter.jpg`}
        />

        {/* Hreflang */}
        <link rel="alternate" hrefLang="es" href={`${baseUrl}/es/clases/dancehall-barcelona`} />
        <link rel="alternate" hrefLang="ca" href={`${baseUrl}/ca/clases/dancehall-barcelona`} />
        <link rel="alternate" hrefLang="en" href={`${baseUrl}/en/clases/dancehall-barcelona`} />
        <link rel="alternate" hrefLang="fr" href={`${baseUrl}/fr/clases/dancehall-barcelona`} />
        <link
          rel="alternate"
          hrefLang="x-default"
          href={`${baseUrl}/es/clases/dancehall-barcelona`}
        />

        {/* VideoObject Schema */}
        <script type="application/ld+json">{JSON.stringify(videoSchema)}</script>
      </Helmet>

      {/* Schema Markup */}
      <LocalBusinessSchema
        name="Farray's International Dance Center - Clases de Dancehall"
        description={t('dancehallMetaDescriptionV2')}
        url={pageUrl}
        telephone="+34622247085"
        email="info@farrayscenter.com"
        address={{
          streetAddress: 'Calle Entença 100',
          addressLocality: 'Barcelona',
          postalCode: '08015',
          addressCountry: 'ES',
        }}
        geo={{
          latitude: '41.3751',
          longitude: '2.1482',
        }}
        priceRange="€€"
        aggregateRating={{
          ratingValue: '5',
          reviewCount: '505',
        }}
      />

      <CourseSchema
        name={t('dancehallCourseSchemaName')}
        description={t('dancehallCourseSchemaDesc')}
        provider={{
          name: "Farray's International Dance Center",
          url: baseUrl,
        }}
        educationalLevel="Beginner, Intermediate, Advanced"
        teaches="Dancehall jamaicano, técnica de danza urbana, musicalidad"
        coursePrerequisites="Ninguno"
        numberOfLessons="5 clases semanales"
        timeRequired="PT1H"
        availableLanguage={['es', 'en', 'ca', 'fr']}
      />

      <AggregateReviewsSchema
        reviews={reviewsSchemaData}
        itemName="Clases de Dancehall en Barcelona - Farray's Center"
        itemType="Course"
      />

      <div className="pt-20 md:pt-24">
        {/* HERO Section - Full image background */}
        <section
          id="dancehall-hero"
          className="relative text-center py-32 md:py-40 overflow-hidden bg-black flex items-center justify-center min-h-[600px]"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-black/60 via-black/40 to-black/60 z-10"></div>
          <img
            src="/images/classes/dancehall/raw/dancehall-classes-barcelona-01.jpg"
            alt="Clases de Dancehall en Barcelona"
            className="absolute z-0 top-0 left-0 w-full h-full object-cover"
          />
          <div className="relative z-20 container mx-auto px-6">
            <AnimateOnScroll>
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-black uppercase tracking-tighter leading-tight mb-6 holographic-text">
                {t('dancehallHeroTitleV2')}
              </h1>
              <p className="max-w-4xl mx-auto text-xl md:text-2xl text-neutral/90 mt-8 mb-12 leading-relaxed">
                {t('dancehallHeroSubtitleV2')}
              </p>

              {/* CTA Buttons: Date de Alta + Prueba Clase */}
              <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mt-10">
                <a
                  href="#contact"
                  className="w-full sm:w-auto bg-primary-accent text-white font-bold text-lg py-5 px-12 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-accent-glow animate-glow"
                >
                  {t('dancehallCTA1')}
                </a>
                <a
                  href="#trial"
                  className="w-full sm:w-auto border-2 border-neutral text-neutral font-bold text-lg py-5 px-12 rounded-full transition-all duration-300 hover:bg-neutral hover:text-black"
                >
                  {t('trialClassCTA')}
                </a>
              </div>
            </AnimateOnScroll>
          </div>
        </section>

        {/* Key Stats - Lo que obtienes en cada clase (COMPACT) */}
        <section className="py-8 md:py-12 bg-black relative overflow-hidden">
          <div className="container mx-auto px-6">
            <div className="flex flex-col md:flex-row justify-center items-center gap-6 md:gap-12 max-w-4xl mx-auto">
              {/* 60 Minutos */}
              <AnimateOnScroll delay={0}>
                <div className="text-center">
                  <div className="mb-2 flex justify-center">
                    <svg
                      className="w-10 h-10 text-primary-accent"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <circle cx="12" cy="12" r="10" strokeWidth="2" />
                      <path strokeLinecap="round" strokeWidth="2" d="M12 6v6l4 2" />
                    </svg>
                  </div>
                  <AnimatedCounter
                    target={60}
                    className="text-4xl md:text-5xl font-black mb-1 holographic-text"
                  />
                  <div className="text-sm md:text-base text-neutral/90 font-semibold">
                    {t('classMinutes')}
                  </div>
                </div>
              </AnimateOnScroll>

              {/* ~500 Calorías */}
              <AnimateOnScroll delay={100}>
                <div className="text-center">
                  <div className="mb-2 flex justify-center">
                    <svg
                      className="w-10 h-10 text-primary-accent"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 2c1.5 2.5 3 5.5 3 8.5 0 3.5-2.5 6.5-6 6.5s-6-3-6-6.5c0-3 1.5-6 3-8.5 0 3 1.5 5 3 5s3-2 3-5zm0 15c2.21 0 4-1.79 4-4 0-1.5-1-3.5-2-5-.5 1.5-1.5 2.5-2 2.5s-1.5-1-2-2.5c-1 1.5-2 3.5-2 5 0 2.21 1.79 4 4 4z" />
                    </svg>
                  </div>
                  <div className="flex items-center justify-center gap-1">
                    <span className="text-3xl md:text-4xl font-black holographic-text">~</span>
                    <AnimatedCounter
                      target={500}
                      className="text-4xl md:text-5xl font-black holographic-text"
                    />
                  </div>
                  <div className="text-sm md:text-base text-neutral/90 font-semibold mt-1">
                    {t('caloriesBurned')}
                  </div>
                </div>
              </AnimateOnScroll>

              {/* 100% Diversión */}
              <AnimateOnScroll delay={200}>
                <div className="text-center">
                  <div className="mb-2 flex justify-center">
                    <svg
                      className="w-10 h-10 text-primary-accent"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 2l2.4 7.4h7.6l-6 4.6 2.3 7-6.3-4.7-6.3 4.7 2.3-7-6-4.6h7.6z" />
                    </svg>
                  </div>
                  <AnimatedCounter
                    target={100}
                    suffix="%"
                    className="text-4xl md:text-5xl font-black mb-1 holographic-text"
                  />
                  <div className="text-sm md:text-base text-neutral/90 font-semibold">
                    {t('funGuaranteed')}
                  </div>
                </div>
              </AnimateOnScroll>
            </div>
          </div>
        </section>

        {/* Problem-Agitate-Solution CON SVGs */}
        <ProblemAgitateSectionV2
          problems={problems}
          solutionTitleKey="dancehallSolutionTitle"
          solutionDescKey="dancehallSolutionDesc"
          t={t}
        />

        {/* Cultural History - Expandable */}
        <CulturalHistorySection
          titleKey="dancehallCulturalTitle"
          shortDescKey="dancehallCulturalShort"
          fullHistoryKey="dancehallCulturalFull"
          readMoreText={t('readMore')}
          readLessText={t('readLess')}
          t={t}
        />

        {/* Benefits Grid */}
        <BenefitsGridSection
          titleKey="dancehallBenefitsTitle"
          subtitleKey="dancehallBenefitsSubtitle"
          benefits={benefits}
          t={t}
        />

        {/* How It Works Section */}
        <HowItWorksSection t={t} />

        {/* Trust Bar - Original con Animated Counters */}
        <section className="py-16 md:py-20 bg-black relative overflow-hidden">
          <div className="container mx-auto px-6">
            <div className="flex flex-col md:flex-row justify-center items-center gap-8 md:gap-16 max-w-5xl mx-auto">
              {/* 8+ Años */}
              <AnimateOnScroll delay={0}>
                <div className="text-center">
                  <AnimatedCounter
                    target={8}
                    suffix="+"
                    className="text-6xl md:text-7xl font-black mb-2 holographic-text"
                  />
                  <p className="text-base md:text-lg text-neutral/90 font-bold uppercase tracking-wide">
                    {t('yearsExperience')}
                  </p>
                </div>
              </AnimateOnScroll>

              {/* 100+ Estudiantes */}
              <AnimateOnScroll delay={100}>
                <div className="text-center">
                  <AnimatedCounter
                    target={100}
                    suffix="+"
                    className="text-6xl md:text-7xl font-black mb-2 holographic-text"
                  />
                  <p className="text-base md:text-lg text-neutral/90 font-bold uppercase tracking-wide">
                    {t('activeStudents')}
                  </p>
                </div>
              </AnimateOnScroll>

              {/* 1000+ Satisfechos */}
              <AnimateOnScroll delay={200}>
                <div className="text-center">
                  <AnimatedCounter
                    target={1000}
                    suffix="+"
                    className="text-6xl md:text-7xl font-black mb-2 holographic-text"
                  />
                  <p className="text-base md:text-lg text-neutral/90 font-bold uppercase tracking-wide">
                    {t('satisfiedStudents')}
                  </p>
                </div>
              </AnimateOnScroll>
            </div>
          </div>
        </section>

        {/* Gallery Section (3 real images) */}
        <section id="gallery" className="py-20 md:py-32 bg-primary-dark/10">
          <div className="container mx-auto px-6">
            <AnimateOnScroll>
              <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-black tracking-tighter text-neutral mb-4">
                  {t('dancehallGalleryTitle')}
                </h2>
              </div>
            </AnimateOnScroll>

            <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
              <AnimateOnScroll delay={100}>
                <div className="aspect-square rounded-2xl overflow-hidden border-2 border-primary-dark/50 hover:border-primary-accent transition-all duration-300">
                  <img
                    src="/images/classes/dancehall/raw/dancehall-classes-barcelona-01.jpg"
                    alt="Clases de Dancehall en Barcelona"
                    loading="lazy"
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                  />
                </div>
              </AnimateOnScroll>
              <AnimateOnScroll delay={200}>
                <div className="aspect-square rounded-2xl overflow-hidden border-2 border-primary-dark/50 hover:border-primary-accent transition-all duration-300">
                  <img
                    src="/images/classes/dancehall/raw/dancehall-dance-students-02.jpg"
                    alt="Estudiantes de Dancehall Barcelona"
                    loading="lazy"
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                  />
                </div>
              </AnimateOnScroll>
              <AnimateOnScroll delay={300}>
                <div className="aspect-square rounded-2xl overflow-hidden border-2 border-primary-dark/50 hover:border-primary-accent transition-all duration-300">
                  <img
                    src="/images/classes/dancehall/raw/dancehall-dancing-barcelona-03.jpg"
                    alt="Bailando Dancehall en Barcelona"
                    loading="lazy"
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                  />
                </div>
              </AnimateOnScroll>
            </div>
          </div>
        </section>

        {/* Video Section CON Schema */}
        <section id="video" className="py-20 md:py-32 bg-black">
          <div className="container mx-auto px-6">
            <AnimateOnScroll>
              <div className="text-center mb-12">
                <h2 className="text-4xl md:text-5xl font-black tracking-tighter text-neutral mb-4">
                  {t('dancehallVideoTitle')}
                </h2>
                <p className="text-lg text-neutral/70">{t('dancehallVideoDesc')}</p>
              </div>
            </AnimateOnScroll>

            <AnimateOnScroll delay={200}>
              <div className="max-w-4xl mx-auto">
                <div className="aspect-video rounded-2xl overflow-hidden border-2 border-primary-accent/50 shadow-accent-glow">
                  <video
                    className="w-full h-full object-cover"
                    poster="/images/classes/dancehall/video-thumbnail.jpg"
                    controls
                    preload="metadata"
                  >
                    <source src="/videos/dancehall-class-experience.mp4" type="video/mp4" />
                    Tu navegador no soporta video HTML5.
                  </video>
                </div>
              </div>
            </AnimateOnScroll>
          </div>
        </section>

        {/* Teachers Section - REAL */}
        <section
          id="teachers"
          className="py-20 md:py-32 bg-primary-dark/10 relative overflow-hidden"
        >
          {/* Fondo sutil con bandera de Jamaica */}
          <div className="absolute inset-0 opacity-30">
            <img
              src="/images/classes/dancehall/raw/Jamaica.webp"
              alt=""
              className="w-full h-full object-cover"
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/60"></div>

          <div className="container mx-auto px-6 relative z-10">
            <AnimateOnScroll>
              <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-black tracking-tighter text-neutral">
                  {t('dancehallTeachersTitle')}
                </h2>
                <p className="text-xl text-neutral/70 mt-4">{t('dancehallTeachersSubtitle')}</p>
              </div>
            </AnimateOnScroll>

            <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              <AnimateOnScroll delay={100}>
                <div className="group bg-black/50 backdrop-blur-md border border-primary-dark/50 hover:border-primary-accent rounded-2xl shadow-lg p-8 transition-all duration-300 hover:shadow-accent-glow">
                  <div className="flex flex-col items-center text-center">
                    <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-primary-accent/50 group-hover:border-primary-accent transition-colors duration-300 mb-6">
                      <img
                        src="/images/teachers/isabel-lopez.jpg"
                        alt="Isabel López"
                        loading="lazy"
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <h3 className="text-2xl font-bold text-neutral mb-2">Isabel López</h3>
                    <p className="text-primary-accent font-semibold mb-4">
                      {t('dancehallTeacher1Specialty')}
                    </p>
                    <p className="text-neutral/80 leading-relaxed">{t('dancehallTeacher1Bio')}</p>
                  </div>
                </div>
              </AnimateOnScroll>

              <AnimateOnScroll delay={200}>
                <div className="group bg-black/50 backdrop-blur-md border border-primary-dark/50 hover:border-primary-accent rounded-2xl shadow-lg p-8 transition-all duration-300 hover:shadow-accent-glow">
                  <div className="flex flex-col items-center text-center">
                    <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-primary-accent/50 group-hover:border-primary-accent transition-colors duration-300 mb-6">
                      <img
                        src="/images/teachers/sandra-gomez.jpg"
                        alt="Sandra Gómez"
                        loading="lazy"
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <h3 className="text-2xl font-bold text-neutral mb-2">Sandra Gómez</h3>
                    <p className="text-primary-accent font-semibold mb-4">
                      {t('dancehallTeacher2Specialty')}
                    </p>
                    <p className="text-neutral/80 leading-relaxed">{t('dancehallTeacher2Bio')}</p>
                  </div>
                </div>
              </AnimateOnScroll>
            </div>
          </div>
        </section>

        {/* Schedule */}
        <ScheduleSection
          titleKey="dancehallScheduleTitle"
          subtitleKey="dancehallScheduleSubtitle"
          schedules={schedules}
          t={t}
        />

        {/* Testimonials ESTILO HOME */}
        <section id="testimonials" className="py-20 md:py-32 bg-black">
          <div className="container mx-auto px-6">
            <AnimateOnScroll>
              <div className="text-center mb-12">
                <h2 className="text-4xl md:text-5xl font-black tracking-tighter text-neutral mb-4">
                  {t('testimonialsNotRequested')} ❤️
                </h2>
                <p className="text-2xl holographic-text font-semibold mb-8">
                  {t('thankYouForLove')}
                </p>
                <div className="inline-block">
                  <div className="mb-4 text-3xl font-black text-neutral">{t('excellent')}</div>
                  <div className="flex items-center justify-center gap-1 mb-2">
                    {[...Array(5)].map((_, i) => (
                      <svg
                        key={i}
                        className="w-8 h-8 text-yellow-400"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  <div className="text-sm text-neutral/70">
                    {t('basedOnReviews').replace('{count}', '505')}
                  </div>
                  <div className="mt-2 text-xs text-neutral/50">Google</div>
                </div>
              </div>
            </AnimateOnScroll>

            <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {dancehallTestimonials.map((testimonial, index) => (
                <AnimateOnScroll key={testimonial.id} delay={index * 100}>
                  <div className="flex flex-col h-full p-6 bg-black/50 backdrop-blur-md border border-primary-dark/50 rounded-xl shadow-lg">
                    <div className="flex mb-3">
                      {[...Array(5)].map((_, i) => (
                        <svg
                          key={i}
                          className="w-5 h-5 text-yellow-400"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                    </div>
                    <blockquote className="flex-grow text-neutral/90 mb-4">
                      <p className="text-sm leading-relaxed">"{testimonial.quote[locale]}"</p>
                    </blockquote>
                    <div className="flex items-center gap-3 mt-auto pt-4 border-t border-primary-dark/30">
                      <div>
                        <cite className="font-bold text-neutral not-italic text-sm">
                          {testimonial.name}
                        </cite>
                        <p className="text-xs text-neutral/60">{testimonial.city[locale]}</p>
                      </div>
                    </div>
                  </div>
                </AnimateOnScroll>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <FAQSection title={t('dancehallFaqTitle')} faqs={dancehallFaqs} pageUrl={pageUrl} />

        {/* Community Section */}
        <section
          id="community"
          className="py-20 md:py-32 bg-gradient-to-br from-primary-accent/20 to-primary-dark/30 relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/dark-geometric.png')] opacity-10"></div>
          <div className="container mx-auto px-6 relative z-10">
            <AnimateOnScroll>
              <div className="max-w-4xl mx-auto text-center">
                <h2 className="text-4xl md:text-6xl font-black text-neutral mb-4 holographic-text">
                  {t('dancehallCommunityTitle')}
                </h2>
                <p className="text-2xl text-primary-accent font-bold mb-6">
                  {t('dancehallCommunitySubtitle')}
                </p>
                <p className="text-xl text-neutral/90 mb-8 leading-relaxed">
                  {t('dancehallCommunityDesc')}
                </p>
                <p className="text-lg text-neutral/80 mb-10 italic">
                  {t('dancehallCommunityFunny')}
                </p>

                {/* CTA Final: Date de Alta + Prueba Clase */}
                <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                  <a
                    href="#contact"
                    className="w-full sm:w-auto bg-primary-accent text-white font-bold text-lg py-5 px-12 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-accent-glow animate-glow"
                  >
                    {t('dancehallCTA1')}
                  </a>
                  <a
                    href="#trial"
                    className="w-full sm:w-auto border-2 border-neutral text-neutral font-bold text-lg py-5 px-12 rounded-full transition-all duration-300 hover:bg-neutral hover:text-black"
                  >
                    {t('trialClassCTA')}
                  </a>
                </div>
              </div>
            </AnimateOnScroll>
          </div>
        </section>
      </div>
    </>
  );
};

export default DancehallPageV2;
