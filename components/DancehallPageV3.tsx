import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useI18n } from '../hooks/useI18n';
import AnimateOnScroll from './AnimateOnScroll';
import CulturalHistorySection from './CulturalHistorySection';
import ScheduleSection from './ScheduleSection';
import FAQSection from './FAQSection';
import AnimatedCounter from './AnimatedCounter';
import { LocalBusinessSchema, CourseSchema, AggregateReviewsSchema } from './SchemaMarkup';
import type { Testimonial } from '../types';

const DancehallPageV3: React.FC = () => {
  const { t, locale } = useI18n();
  const baseUrl = 'https://www.farrayscenter.com';
  const pageUrl = `${baseUrl}/${locale}/clases/dancehall-v3`;

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

  // FAQs (16 preguntas completas)
  const dancehallV3Faqs = [
    { id: 'dhv3-1', question: t('dhV3FaqQ1'), answer: t('dhV3FaqA1') },
    { id: 'dhv3-2', question: t('dhV3FaqQ2'), answer: t('dhV3FaqA2') },
    { id: 'dhv3-3', question: t('dhV3FaqQ3'), answer: t('dhV3FaqA3') },
    { id: 'dhv3-4', question: t('dhV3FaqQ4'), answer: t('dhV3FaqA4') },
    { id: 'dhv3-5', question: t('dhV3FaqQ5'), answer: t('dhV3FaqA5') },
    { id: 'dhv3-6', question: t('dhV3FaqQ6'), answer: t('dhV3FaqA6') },
    { id: 'dhv3-7', question: t('dhV3FaqQ7'), answer: t('dhV3FaqA7') },
    { id: 'dhv3-8', question: t('dhV3FaqQ8'), answer: t('dhV3FaqA8') },
    { id: 'dhv3-9', question: t('dhV3FaqQ9'), answer: t('dhV3FaqA9') },
    { id: 'dhv3-10', question: t('dhV3FaqQ10'), answer: t('dhV3FaqA10') },
    { id: 'dhv3-11', question: t('dhV3FaqQ11'), answer: t('dhV3FaqA11') },
    { id: 'dhv3-12', question: t('dhV3FaqQ12'), answer: t('dhV3FaqA12') },
    { id: 'dhv3-13', question: t('dhV3FaqQ13'), answer: t('dhV3FaqA13') },
    { id: 'dhv3-14', question: t('dhV3FaqQ14'), answer: t('dhV3FaqA14') },
    { id: 'dhv3-15', question: t('dhV3FaqQ15'), answer: t('dhV3FaqA15') },
    { id: 'dhv3-16', question: t('dhV3FaqQ16'), answer: t('dhV3FaqA16') },
  ];

  // Testimonials (REAL from Google reviews - from content provided)
  const dancehallTestimonials: Testimonial[] = [
    {
      id: 1,
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
        en: '5 stars and because there are no more. Spectacular, from the minute you step into reception, to the teachers, the quality and the good vibes.',
        es: '5 estrellas y porque no hay más. Espectacular, desde el minuto en el que pisas recepción, hasta los profesores, la calidad y el buen rollo.',
        ca: "5 estrelles i perquè no n'hi ha més. Espectacular, des del minut en què trepitges recepció, fins als professors, la qualitat i el bon rotllo.",
        fr: "5 étoiles et parce qu'il n'y en a pas plus. Spectaculaire, dès la minute où vous entrez à la réception, jusqu'aux professeurs, la qualité et la bonne ambiance.",
      },
    },
    {
      id: 2,
      name: 'Marina Martínez',
      image: '/images/testimonials/placeholder-f.jpg',
      rating: 5,
      city: {
        en: 'Barcelona, Spain',
        es: 'Barcelona, España',
        ca: 'Barcelona, Espanya',
        fr: 'Barcelone, Espagne',
      },
      quote: {
        en: 'I love the classes and everything very professional. Money well spent.',
        es: 'Me encantan las clases y todo muy profesional. Dinero bien invertido.',
        ca: "M'encanten les classes i tot molt professional. Diners ben invertits.",
        fr: "J'adore les cours et tout est très professionnel. Argent bien investi.",
      },
    },
    {
      id: 3,
      name: 'Olga Folque Sanz',
      image: '/images/testimonials/placeholder-f.jpg',
      rating: 5,
      city: {
        en: 'Barcelona, Spain',
        es: 'Barcelona, España',
        ca: 'Barcelona, Espanya',
        fr: 'Barcelone, Espagne',
      },
      quote: {
        en: 'The classes are super fun. The teachers have a great ability to teach and make you have a great time. And Augusto, the receptionist, a 10.',
        es: 'Las clases son súper divertidas. Los profes tienen una gran capacidad para enseñar y hacer que te lo pases genial. Y Augusto, el recepcionista, un 10.',
        ca: 'Les classes són súper divertides. Els profes tenen una gran capacitat per ensenyar i fer que te la passis genial. I Augusto, el recepcionista, un 10.',
        fr: 'Les cours sont super amusants. Les professeurs ont une grande capacité à enseigner et à faire en sorte que vous passiez un bon moment. Et Augusto, le réceptionniste, un 10.',
      },
    },
    {
      id: 4,
      name: 'Paula Galindo Calanda',
      image: '/images/testimonials/placeholder-f.jpg',
      rating: 5,
      city: {
        en: 'Barcelona, Spain',
        es: 'Barcelona, España',
        ca: 'Barcelona, Espanya',
        fr: 'Barcelone, Espagne',
      },
      quote: {
        en: 'Augusto is the best and the Yas classes are incredible. The best academy in Barcelona without a doubt.',
        es: 'Augusto es el mejor y las clases de Yas increíbles. La mejor academia de Barcelona sin duda.',
        ca: 'Augusto és el millor i les classes de Yas increïbles. La millor acadèmia de Barcelona sense dubte.',
        fr: 'Augusto est le meilleur et les cours de Yas sont incroyables. La meilleure académie de Barcelone sans aucun doute.',
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
    name: t('dhV3VideoTitle'),
    description: t('dhV3VideoDesc'),
    thumbnailUrl: `${baseUrl}/images/classes/dancehall/video-thumbnail.jpg`,
    uploadDate: '2025-01-01',
    contentUrl: `${baseUrl}/videos/dancehall-class-experience.mp4`,
    embedUrl: `${baseUrl}/videos/dancehall-class-experience.mp4`,
  };

  return (
    <>
      {/* SEO Meta Tags */}
      <Helmet>
        <title>{t('dhV3PageTitle')}</title>
        <meta name="description" content={t('dhV3MetaDescription')} />
        <link rel="canonical" href={pageUrl} />

        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content={pageUrl} />
        <meta property="og:title" content={t('dhV3PageTitle')} />
        <meta property="og:description" content={t('dhV3MetaDescription')} />
        <meta
          property="og:image"
          content={`${baseUrl}/images/classes/dancehall/dancehall-hero-og.jpg`}
        />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content={pageUrl} />
        <meta name="twitter:title" content={t('dhV3PageTitle')} />
        <meta name="twitter:description" content={t('dhV3MetaDescription')} />
        <meta
          name="twitter:image"
          content={`${baseUrl}/images/classes/dancehall/dancehall-hero-twitter.jpg`}
        />

        {/* VideoObject Schema */}
        <script type="application/ld+json">{JSON.stringify(videoSchema)}</script>
      </Helmet>

      {/* Schema Markup */}
      <LocalBusinessSchema
        name="Farray's International Dance Center - Clases de Dancehall"
        description={t('dhV3MetaDescription')}
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
        name={t('dhV3CourseSchemaName')}
        description={t('dhV3CourseSchemaDesc')}
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
        {/* HERO Section - Without background image (like home) */}
        <section
          id="dancehall-hero"
          className="relative text-center py-32 md:py-40 overflow-hidden flex items-center justify-center min-h-[600px]"
        >
          {/* Background like Hero.tsx */}
          <div className="absolute inset-0 bg-black">
            <div className="absolute inset-0 bg-gradient-to-br from-primary-dark/30 via-black to-black"></div>
            <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-20"></div>
          </div>
          <div className="relative z-20 container mx-auto px-6">
            <AnimateOnScroll>
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-black uppercase tracking-tighter leading-tight mb-6 holographic-text">
                {t('dhV3HeroTitle')}
              </h1>
              <p className="text-3xl md:text-4xl font-bold mb-4 holographic-text">
                {t('dhV3HeroSubtitle')}
              </p>
              <p className="max-w-4xl mx-auto text-xl md:text-2xl text-neutral/90 mt-8 mb-6 leading-relaxed">
                {t('dhV3HeroDesc')}
              </p>
              <p className="text-lg md:text-xl text-neutral/80 italic mb-12">
                {t('dhV3HeroLocation')}
              </p>

              {/* CTA Buttons: Date de Alta + Prueba Clase */}
              <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mt-10">
                <div className="w-full sm:w-auto">
                  <a
                    href="#contact"
                    className="block w-full sm:w-auto bg-primary-accent text-white font-bold text-lg py-5 px-12 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-accent-glow animate-glow text-center"
                  >
                    {t('dhV3CTA1')}
                  </a>
                  <p className="text-xs text-neutral/70 mt-2 text-center">Quedan pocas plazas</p>
                </div>
                <div className="w-full sm:w-auto">
                  <a
                    href="#trial"
                    className="block w-full sm:w-auto border-2 border-neutral text-neutral font-bold text-lg py-5 px-12 rounded-full transition-all duration-300 hover:bg-neutral hover:text-black text-center"
                  >
                    {t('dhV3CTA2')}
                  </a>
                  <p className="text-xs text-neutral/70 mt-2 text-center">Oferta válida por tiempo limitado</p>
                </div>
              </div>

              {/* Key Stats - Lo que obtienes en cada clase */}
              <div className="mt-16">
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
            </AnimateOnScroll>
          </div>
        </section>

        {/* What is Dancehall Section */}
        <section className="py-20 md:py-32 bg-primary-dark/10">
          <div className="container mx-auto px-6">
            <AnimateOnScroll>
              <div className="max-w-4xl mx-auto">
                <h2 className="text-4xl md:text-5xl font-black tracking-tighter text-neutral mb-8 text-center holographic-text">
                  {t('dhV3WhatIsTitle')}
                </h2>
                <div className="grid md:grid-cols-2 gap-8 items-center">
                  <div className="space-y-6 text-lg text-neutral/90 leading-relaxed">
                    <p className="text-xl font-semibold holographic-text">{t('dhV3WhatIsP1')}</p>
                    <p>{t('dhV3WhatIsP2')}</p>
                    <p className="italic font-medium text-neutral">{t('dhV3WhatIsP3')}</p>
                    <p>{t('dhV3WhatIsP4')}</p>
                    <p className="text-center text-2xl font-bold mt-8 holographic-text">
                      {t('dhV3WhatIsQuestionTitle')}
                    </p>
                    <p className="text-center text-xl font-semibold">{t('dhV3WhatIsQuestionAnswer')}</p>
                  </div>
                  <div className="rounded-2xl overflow-hidden shadow-lg">
                    <img
                      src="/images/classes/dancehall/img/dancehall-classes-barcelona-01_960.webp"
                      alt="Clases de Dancehall en Barcelona"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>
            </AnimateOnScroll>
          </div>
        </section>

        {/* Cultural History - Expandable (without title) */}
        <CulturalHistorySection
          titleKey=""
          shortDescKey="dhV3CulturalShort"
          fullHistoryKey="dhV3CulturalFull"
          readMoreText={t('readMore')}
          readLessText={t('readLess')}
          t={t}
        />

        {/* Identification Section - ¿Te identificas? */}
        <section className="py-16 md:py-24 bg-black">
          <div className="container mx-auto px-6">
            <AnimateOnScroll>
              <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-black tracking-tighter text-neutral mb-8 holographic-text">
                  {t('dhV3IdentifyTitle')}
                </h2>
              </div>
            </AnimateOnScroll>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto mb-12">
              {[1, 2, 3, 4, 5].map((num, index) => (
                <AnimateOnScroll key={num} delay={index * 100} className="[perspective:1000px]">
                  <div className="group relative h-full flex items-start gap-4 p-6 bg-primary-dark/20 rounded-xl border border-primary-dark/50 hover:border-primary-accent transition-all duration-500 [transform-style:preserve-3d] hover:[transform:translateY(-0.5rem)_scale(1.05)_rotateY(5deg)] hover:shadow-accent-glow">
                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary-accent/20 flex items-center justify-center group-hover:bg-primary-accent/40 transition-colors duration-300">
                      <svg className="w-5 h-5 text-primary-accent" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <p className="text-neutral/90 leading-relaxed">{t(`dhV3Identify${num}`)}</p>
                  </div>
                </AnimateOnScroll>
              ))}
              <AnimateOnScroll delay={500} className="[perspective:1000px]">
                <div className="group relative h-full flex items-start gap-4 p-6 bg-primary-dark/20 rounded-xl border border-primary-dark/50 hover:border-primary-accent transition-all duration-500 [transform-style:preserve-3d] hover:[transform:translateY(-0.5rem)_scale(1.05)_rotateY(5deg)] hover:shadow-accent-glow">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary-accent/20 flex items-center justify-center group-hover:bg-primary-accent/40 transition-colors duration-300">
                    <svg className="w-5 h-5 text-primary-accent" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <p className="text-neutral/90 leading-relaxed">
                    Te encanta bailar y disfrutar del movimiento, pero sientes que necesitas algo diferente, con más flow y personalidad.
                  </p>
                </div>
              </AnimateOnScroll>
            </div>
          </div>
        </section>

        {/* Nueva Sección - Necesitas apuntarte */}
        <section className="py-20 md:py-32 bg-primary-dark/10">
          <div className="container mx-auto px-6">
            <AnimateOnScroll>
              <div className="text-center mb-12">
                <h2 className="text-4xl md:text-5xl font-black tracking-tighter text-neutral mb-8 holographic-text">
                  Necesitas apuntarte a clases de Dancehall en una academia de baile
                </h2>
              </div>
            </AnimateOnScroll>

            <AnimateOnScroll>
              <div className="max-w-3xl mx-auto text-center space-y-6">
                <p className="text-xl font-semibold holographic-text">{t('dhV3IdentifyAgitate1')}</p>
                <p className="text-2xl font-bold text-neutral">{t('dhV3IdentifyAgitate2')}</p>
                <p className="text-lg text-neutral/80">{t('dhV3IdentifySolution')}</p>
                <p className="text-xl text-neutral/90 italic">{t('dhV3IdentifyClosing')}</p>
              </div>
            </AnimateOnScroll>
          </div>
        </section>

        {/* Transformation Section - Imagina tu antes y después */}
        <section className="py-12 md:py-16 bg-primary-dark/10">
          <div className="container mx-auto px-6">
            <AnimateOnScroll>
              <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-black tracking-tighter text-neutral mb-4 holographic-text">
                  {t('dhV3TransformTitle')}
                </h2>
              </div>
            </AnimateOnScroll>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto mb-12">
              {[1, 2, 3, 4, 5].map((num, index) => (
                <AnimateOnScroll key={num} delay={index * 100} className="[perspective:1000px]">
                  <div className="group h-full p-8 bg-black/50 backdrop-blur-md border border-primary-dark/50 hover:border-primary-accent rounded-2xl transition-all duration-500 [transform-style:preserve-3d] hover:[transform:translateY(-0.5rem)_scale(1.05)_rotateY(5deg)] hover:shadow-accent-glow">
                    <div className="text-6xl font-black text-primary-accent mb-4 holographic-text">{num}</div>
                    <h3 className="text-xl font-bold text-neutral mb-3">{t(`dhV3Transform${num}Title`)}</h3>
                    <p className="text-neutral/80 leading-relaxed">{t(`dhV3Transform${num}Desc`)}</p>
                  </div>
                </AnimateOnScroll>
              ))}
              <AnimateOnScroll delay={500} className="[perspective:1000px]">
                <div className="group h-full p-8 bg-black/50 backdrop-blur-md border border-primary-dark/50 hover:border-primary-accent rounded-2xl transition-all duration-500 [transform-style:preserve-3d] hover:[transform:translateY(-0.5rem)_scale(1.05)_rotateY(5deg)] hover:shadow-accent-glow">
                  <div className="text-6xl font-black text-primary-accent mb-4 holographic-text">6</div>
                  <h3 className="text-xl font-bold text-neutral mb-3">Aprendes Pasos Nuevos</h3>
                  <p className="text-neutral/80 leading-relaxed">
                    Conoces pasos nuevos y evitas la monotonía en el baile, ampliando tu vocabulario de movimiento constantemente.
                  </p>
                </div>
              </AnimateOnScroll>
            </div>

            <AnimateOnScroll>
              <div className="max-w-3xl mx-auto text-center">
                <p className="text-2xl font-bold holographic-text mt-8">{t('dhV3TransformCTA')}</p>
              </div>
            </AnimateOnScroll>
          </div>
        </section>

        {/* Why Choose Farray's Section */}
        <section className="py-20 md:py-32 bg-black">
          <div className="container mx-auto px-6">
            <AnimateOnScroll>
              <div className="text-center mb-12">
                <h2 className="text-4xl md:text-5xl font-black tracking-tighter text-neutral mb-4 holographic-text">
                  ¿Por qué elegir Farray's Center como tu academia de Dancehall en Barcelona?
                </h2>
              </div>
            </AnimateOnScroll>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto mb-16">
              {[1, 2, 3, 4, 5, 6].map((num, index) => (
                <AnimateOnScroll key={num} delay={index * 100} className="[perspective:1000px]">
                  <div className="group h-full p-6 bg-primary-dark/20 rounded-xl border border-primary-dark/50 hover:border-primary-accent transition-all duration-500 [transform-style:preserve-3d] hover:[transform:translateY(-0.5rem)_scale(1.05)_rotateY(5deg)] hover:shadow-accent-glow">
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary-accent/20 flex items-center justify-center group-hover:bg-primary-accent/40 transition-colors duration-300">
                        <svg className="w-6 h-6 text-primary-accent" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <div>
                        <h3 className="text-lg font-bold text-neutral mb-2">{t(`dhV3WhyChoose${num}Title`)}</h3>
                        <p className="text-neutral/80 text-sm leading-relaxed">{t(`dhV3WhyChoose${num}Desc`)}</p>
                      </div>
                    </div>
                  </div>
                </AnimateOnScroll>
              ))}
              <AnimateOnScroll delay={500} className="[perspective:1000px] md:col-start-2">
                <div className="group h-full p-6 bg-primary-dark/20 rounded-xl border border-primary-dark/50 hover:border-primary-accent transition-all duration-500 [transform-style:preserve-3d] hover:[transform:translateY(-0.5rem)_scale(1.05)_rotateY(5deg)] hover:shadow-accent-glow">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary-accent/20 flex items-center justify-center group-hover:bg-primary-accent/40 transition-colors duration-300">
                      <svg className="w-6 h-6 text-primary-accent" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-neutral mb-2">{t(`dhV3WhyChoose${7}Title`)}</h3>
                      <p className="text-neutral/80 text-sm leading-relaxed">{t(`dhV3WhyChoose${7}Desc`)}</p>
                    </div>
                  </div>
                </div>
              </AnimateOnScroll>
            </div>

            {/* Trust Bar - Stats */}
            <AnimateOnScroll>
              <div className="flex flex-col md:flex-row justify-center items-center gap-8 md:gap-16 max-w-5xl mx-auto">
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
                <div className="text-center">
                  <AnimatedCounter
                    target={1500}
                    suffix="+"
                    className="text-6xl md:text-7xl font-black mb-2 holographic-text"
                  />
                  <p className="text-base md:text-lg text-neutral/90 font-bold uppercase tracking-wide">
                    {t('activeStudents')}
                  </p>
                </div>
                <div className="text-center">
                  <AnimatedCounter
                    target={15000}
                    suffix="+"
                    className="text-6xl md:text-7xl font-black mb-2 holographic-text"
                  />
                  <p className="text-base md:text-lg text-neutral/90 font-bold uppercase tracking-wide">
                    {t('satisfiedStudents')}
                  </p>
                </div>
              </div>
            </AnimateOnScroll>
          </div>
        </section>

        {/* Logos Section - Nos has podido ver en */}
        <section className="py-16 md:py-20 bg-primary-dark/10">
          <div className="container mx-auto px-6">
            <AnimateOnScroll>
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-black text-neutral mb-8 holographic-text">
                  {t('dhV3LogosTitle')}
                </h2>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 max-w-5xl mx-auto items-center mb-8">
                  <div className="flex flex-col items-center gap-3 p-6 bg-black/30 backdrop-blur-sm rounded-xl border border-primary-accent/20 hover:border-primary-accent transition-all duration-300 hover:scale-105">
                    <div className="w-20 h-20 flex items-center justify-center overflow-hidden rounded-lg">
                      <img
                        src="/images/cid-unesco-logo.webp"
                        alt="CID UNESCO"
                        className="w-full h-full object-contain"
                      />
                    </div>
                    <div className="text-neutral/80 font-bold text-sm text-center">CID UNESCO</div>
                  </div>
                  <div className="flex flex-col items-center gap-3 p-6 bg-black/30 backdrop-blur-sm rounded-xl border border-primary-accent/20 hover:border-primary-accent transition-all duration-300 hover:scale-105">
                    <div className="w-20 h-20 flex items-center justify-center overflow-hidden rounded-lg">
                      <img
                        src="/images/Street-Dance-2.webp"
                        alt="Street Dance 2"
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="text-neutral/80 font-bold text-sm text-center">Street Dance 2</div>
                  </div>
                  <div className="flex flex-col items-center gap-3 p-6 bg-black/30 backdrop-blur-sm rounded-xl border border-primary-accent/20 hover:border-primary-accent transition-all duration-300 hover:scale-105">
                    <div className="w-20 h-20 flex items-center justify-center overflow-hidden rounded-lg">
                      <img
                        src="/images/the-dancer-espectaculo-baile-cuadrada.webp"
                        alt="The Dancer"
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="text-neutral/80 font-bold text-sm text-center">The Dancer</div>
                  </div>
                  <div className="flex flex-col items-center gap-3 p-6 bg-black/30 backdrop-blur-sm rounded-xl border border-primary-accent/20 hover:border-primary-accent transition-all duration-300 hover:scale-105">
                    <div className="w-20 h-20 flex items-center justify-center overflow-hidden rounded-lg">
                      <img
                        src="/images/telecinco-logo.webp"
                        alt="TV 5"
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="text-neutral/80 font-bold text-sm text-center">TV 5</div>
                  </div>
                </div>
                <p className="text-xl font-bold holographic-text">
                  y en los mejores festivales de danza de todo el mundo
                </p>
              </div>
            </AnimateOnScroll>
          </div>
        </section>

        {/* Teachers Section - REAL */}
        <section
          id="teachers"
          className="py-20 md:py-32 bg-black relative overflow-hidden"
        >
          {/* Jamaica Flag Background */}
          <div className="absolute inset-0 opacity-30">
            <img
              src="/images/classes/dancehall/raw/Jamaica.webp"
              alt="Jamaica Flag"
              className="w-full h-full object-cover"
              style={{ filter: 'brightness(0.9)' }}
            />
          </div>

          <div className="container mx-auto px-6 relative z-10">
            <AnimateOnScroll>
              <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-black tracking-tighter text-neutral holographic-text">
                  {t('dhV3TeachersTitle')}
                </h2>
                <p className="text-xl text-neutral/70 mt-4">{t('dhV3TeachersSubtitle')}</p>
              </div>
            </AnimateOnScroll>

            <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              <AnimateOnScroll delay={100} className="[perspective:1000px]">
                <div className="group h-full bg-black/70 backdrop-blur-md border border-primary-dark/50 hover:border-primary-accent rounded-2xl shadow-lg p-8 transition-all duration-500 [transform-style:preserve-3d] hover:[transform:translateY(-0.5rem)_scale(1.05)_rotateY(5deg)] hover:shadow-accent-glow">
                  <div className="flex flex-col items-center text-center">
                    <div className="w-48 h-48 rounded-full overflow-hidden border-4 border-primary-accent/50 group-hover:border-primary-accent transition-colors duration-300 mb-6">
                      <img
                        src="/images/teachers/isabel-lopez.jpg"
                        alt="Isabel López"
                        loading="lazy"
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <h3 className="text-2xl font-bold text-neutral mb-2">Isabel López</h3>
                    <p className="text-primary-accent font-semibold mb-4">
                      {t('dhV3Teacher1Specialty')}
                    </p>
                    <p className="text-neutral/80 leading-relaxed">{t('dhV3Teacher1Bio')}</p>
                  </div>
                </div>
              </AnimateOnScroll>

              <AnimateOnScroll delay={200} className="[perspective:1000px]">
                <div className="group h-full bg-black/70 backdrop-blur-md border border-primary-dark/50 hover:border-primary-accent rounded-2xl shadow-lg p-8 transition-all duration-500 [transform-style:preserve-3d] hover:[transform:translateY(-0.5rem)_scale(1.05)_rotateY(5deg)] hover:shadow-accent-glow">
                  <div className="flex flex-col items-center text-center">
                    <div className="w-48 h-48 rounded-full overflow-hidden border-4 border-primary-accent/50 group-hover:border-primary-accent transition-colors duration-300 mb-6">
                      <img
                        src="/images/teachers/sandra-gomez.jpg"
                        alt="Sandra Gómez"
                        loading="lazy"
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <h3 className="text-2xl font-bold text-neutral mb-2">Sandra Gómez</h3>
                    <p className="text-primary-accent font-semibold mb-4">
                      {t('dhV3Teacher2Specialty')}
                    </p>
                    <p className="text-neutral/80 leading-relaxed">{t('dhV3Teacher2Bio')}</p>
                  </div>
                </div>
              </AnimateOnScroll>
            </div>

            <AnimateOnScroll>
              <p className="text-center text-lg text-neutral/80 mt-12 max-w-2xl mx-auto">
                {t('dhV3TeachersClosing')}
              </p>
            </AnimateOnScroll>
          </div>
        </section>

        {/* Schedule */}
        <ScheduleSection
          titleKey="dhV3ScheduleTitle"
          subtitleKey="dhV3ScheduleSubtitle"
          schedules={schedules}
          t={t}
        />

        {/* Testimonials */}
        <section id="testimonials" className="py-20 md:py-32 bg-black">
          <div className="container mx-auto px-6">
            <AnimateOnScroll>
              <div className="text-center mb-12">
                <h2 className="text-4xl md:text-5xl font-black tracking-tighter text-neutral mb-4 holographic-text">
                  Testimonios no solicitados
                </h2>
                <p className="text-2xl font-bold mb-6 holographic-text">
                  GRACIAS POR TANTO AMOR
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

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
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
                      <p className="text-sm leading-relaxed">
                        &ldquo;{testimonial.quote[locale]}&rdquo;
                      </p>
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

        {/* Video Section */}
        <section id="video" className="py-20 md:py-32 bg-primary-dark/10">
          <div className="container mx-auto px-6">
            <AnimateOnScroll>
              <div className="text-center mb-12">
                <h2 className="text-4xl md:text-5xl font-black tracking-tighter text-neutral mb-4 holographic-text">
                  {t('dhV3VideoTitle')}
                </h2>
                <p className="text-lg text-neutral/70">{t('dhV3VideoDesc')}</p>
              </div>
            </AnimateOnScroll>

            <AnimateOnScroll delay={200}>
              <div className="max-w-4xl mx-auto">
                <div className="aspect-video rounded-2xl overflow-hidden border-2 border-primary-accent/50 shadow-accent-glow">
                  <iframe
                    className="w-full h-full"
                    src="https://www.youtube.com/embed/TteV2if6Qso"
                    title="Clases de Dancehall en Barcelona - Farray's Center"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                  ></iframe>
                </div>
              </div>
            </AnimateOnScroll>
          </div>
        </section>

        {/* Why Today Section */}
        <section className="py-20 md:py-32 bg-black">
          <div className="container mx-auto px-6">
            <AnimateOnScroll>
              <div className="max-w-3xl mx-auto text-center space-y-6">
                <h2 className="text-4xl md:text-5xl font-black tracking-tighter text-neutral mb-8 holographic-text">
                  ¿Por qué hoy es el mejor momento para empezar a bailar Dancehall con nosotros?
                </h2>
                <p className="text-xl text-neutral/90">{t('dhV3WhyToday1')}</p>
                <p className="text-xl text-neutral/90">{t('dhV3WhyToday2')}</p>
                <p className="text-xl text-neutral/90">{t('dhV3WhyToday3')}</p>
                <p className="text-2xl font-bold holographic-text mt-8">{t('dhV3WhyTodayClosing1')}</p>
                <p className="text-lg text-neutral/80 italic">{t('dhV3WhyTodayClosing2')}</p>
              </div>
            </AnimateOnScroll>
          </div>
        </section>

        {/* Final CTA Section */}
        <section
          id="final-cta"
          className="py-20 md:py-32 bg-black relative overflow-hidden"
        >
          <div className="absolute inset-0">
            <img
              src="/images/classes/dancehall/img/dancehall-dancing-barcelona-03_1440.webp"
              alt="Background"
              className="w-full h-full object-cover opacity-20"
            />
          </div>
          <div className="container mx-auto px-6 relative z-10">
            <AnimateOnScroll>
              <div className="max-w-4xl mx-auto text-center">
                <h2 className="text-4xl md:text-5xl font-black tracking-tighter text-neutral mb-4 holographic-text">
                  {t('dhV3FinalCTATitle')}
                </h2>
                <p className="text-2xl font-bold mb-6 holographic-text">
                  Da el paso.
                </p>
                <p className="text-xl text-neutral/90 mb-8 leading-relaxed">
                  {t('dhV3FinalCTADesc')}
                </p>
                <p className="text-lg text-neutral/80 mb-10 italic">
                  {t('dhV3FinalCTAFunny')}
                </p>

                {/* CTA Final: Date de Alta + Prueba Clase */}
                <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-8">
                  <div className="w-full sm:w-auto">
                    <a
                      href="#contact"
                      className="block w-full sm:w-auto bg-primary-accent text-white font-bold text-lg py-5 px-12 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-accent-glow animate-glow text-center"
                    >
                      {t('dhV3CTA1')}
                    </a>
                    <p className="text-xs text-neutral/70 mt-2 text-center">Quedan pocas plazas</p>
                  </div>
                  <div className="w-full sm:w-auto">
                    <a
                      href="#trial"
                      className="block w-full sm:w-auto border-2 border-neutral text-neutral font-bold text-lg py-5 px-12 rounded-full transition-all duration-300 hover:bg-neutral hover:text-black text-center"
                    >
                      {t('dhV3CTA2')}
                    </a>
                    <p className="text-xs text-neutral/70 mt-2 text-center">Oferta válida por tiempo limitado</p>
                  </div>
                </div>
              </div>
            </AnimateOnScroll>
          </div>
        </section>

        {/* FAQ */}
        <FAQSection title={t('dhV3FaqTitle')} faqs={dancehallV3Faqs} pageUrl={pageUrl} />
      </div>
    </>
  );
};

export default DancehallPageV3;
