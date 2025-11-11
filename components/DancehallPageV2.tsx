import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useI18n } from '../hooks/useI18n';
import AnimateOnScroll from './AnimateOnScroll';
import ProblemAgitateSection from './ProblemAgitateSection';
import CulturalHistorySection from './CulturalHistorySection';
import BenefitsGridSection from './BenefitsGridSection';
import ScheduleSection from './ScheduleSection';
import FAQSection from './FAQSection';
import { LocalBusinessSchema, CourseSchema, AggregateReviewsSchema } from './SchemaMarkup';
import type { Testimonial } from '../types';

const StarIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
      <path fillRule="evenodd" d="M10 16.535l-5.223 2.745.998-5.816L.99 8.28l5.838-.848L10 2l2.174 5.432 5.838.848-4.785 4.184.998 5.816L10 16.535z" clipRule="evenodd" />
    </svg>
);

const DancehallPageV2: React.FC = () => {
    const { t, locale } = useI18n();
    const baseUrl = 'https://www.farrayscenter.com';
    const pageUrl = `${baseUrl}/${locale}/clases/dancehall-barcelona`;

    // Problem-Agitate data
    const problems = [
        { id: 'stress', emoji: '😔', titleKey: 'dancehallProblem1Title', descKey: 'dancehallProblem1Desc' },
        { id: 'confidence', emoji: '😟', titleKey: 'dancehallProblem2Title', descKey: 'dancehallProblem2Desc' },
        { id: 'boring', emoji: '😩', titleKey: 'dancehallProblem3Title', descKey: 'dancehallProblem3Desc' },
        { id: 'social', emoji: '🤔', titleKey: 'dancehallProblem4Title', descKey: 'dancehallProblem4Desc' },
        { id: 'fresh', emoji: '🤩', titleKey: 'dancehallProblem5Title', descKey: 'dancehallProblem5Desc' },
        { id: 'culture', emoji: '🎶', titleKey: 'dancehallProblem6Title', descKey: 'dancehallProblem6Desc' },
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
        { id: '1', day: t('monday'), className: 'Dancehall Female Principiantes', time: '22:00 - 23:00', teacher: 'Sandra Gómez', level: t('beginnerLevel') },
        { id: '2', day: t('wednesday'), className: 'Dancehall Twerk Intermedio', time: '21:00 - 22:00', teacher: 'Isabel López', level: t('intermediateLevel') },
        { id: '3', day: t('thursday'), className: 'Dancehall Female Avanzado', time: '21:00 - 22:00', teacher: 'Isabel López', level: t('advancedLevel') },
        { id: '4', day: t('thursday'), className: 'Dancehall Female Básico', time: '22:00 - 23:00', teacher: 'Sandra Gómez', level: t('basicLevel') },
        { id: '5', day: t('friday'), className: 'Dancehall Twerk Principiantes', time: '18:00 - 19:00', teacher: 'Isabel López', level: t('beginnerLevel') },
        { id: '6', day: t('friday'), className: 'Dancehall Female Principiantes', time: '19:00 - 20:00', teacher: 'Isabel López', level: t('beginnerLevel') },
    ];

    // FAQs
    const dancehallFaqs = [
      { id: 'dh-1', question: t('dancehallFaqQ1'), answer: t('dancehallFaqA1') },
      { id: 'dh-2', question: t('dancehallFaqQ2'), answer: t('dancehallFaqA2') },
      { id: 'dh-3', question: t('dancehallFaqQ3'), answer: t('dancehallFaqA3') },
      { id: 'dh-4', question: t('dancehallFaqQ4'), answer: t('dancehallFaqA4') },
      { id: 'dh-5', question: t('dancehallFaqQ5'), answer: t('dancehallFaqA5') },
      { id: 'dh-6', question: t('dancehallFaqQ6'), answer: t('dancehallFaqA6') },
      { id: 'dh-7', question: t('dancehallFaqQ7'), answer: t('dancehallFaqA7') },
    ];

    // Testimonials (REAL from your Google reviews)
    const dancehallTestimonials: Testimonial[] = [
      {
        id: 1,
        name: 'Carlos Paires',
        image: '/images/testimonials/placeholder-m.jpg',
        rating: 5,
        city: { en: 'Barcelona, Spain', es: 'Barcelona, España', ca: 'Barcelona, Espanya', fr: 'Barcelone, Espagne' },
        quote: {
          en: 'Las clases de Mathi y Euge, son geniales. Nos lo pasamos muy bien, aprendemos a bailar y siempre nos hacen reír!',
          es: 'Las clases de Mathi y Euge, son geniales. Nos lo pasamos muy bien, aprendemos a bailar y siempre nos hacen reír!',
          ca: 'Les classes de Mathi i Euge són genials. Ens ho passem molt bé, aprenem a ballar i sempre ens fan riure!',
          fr: 'Les cours de Mathi et Euge sont géniaux. On passe un très bon moment, on apprend à danser et ils nous font toujours rire !'
        }
      },
      {
        id: 2,
        name: 'Ana Cid',
        image: '/images/testimonials/placeholder-f.jpg',
        rating: 5,
        city: { en: 'Barcelona, Spain', es: 'Barcelona, España', ca: 'Barcelona, Espanya', fr: 'Barcelone, Espagne' },
        quote: {
          en: '5 ⭐ y porque no hay más!! Espectacular, desde el minuto en el que pisas recepción, hasta los profesores, la calidad y el buen rollo entre el alumnado.',
          es: '5 ⭐ y porque no hay más!! Espectacular, desde el minuto en el que pisas recepción, hasta los profesores, la calidad y el buen rollo entre el alumnado.',
          ca: '5 ⭐ i perquè no n\'hi ha més!! Espectacular, des del minut en què trepitges recepció, fins als professors, la qualitat i el bon rotllo entre l\'alumnat.',
          fr: '5 ⭐ et parce qu\'il n\'y en a pas plus!! Spectaculaire, dès la minute où vous entrez à la réception, jusqu\'aux professeurs, la qualité et la bonne ambiance entre les étudiants.'
        }
      },
      {
        id: 3,
        name: 'Marina Martinez',
        image: '/images/testimonials/placeholder-f.jpg',
        rating: 5,
        city: { en: 'Barcelona, Spain', es: 'Barcelona, España', ca: 'Barcelona, Espanya', fr: 'Barcelone, Espagne' },
        quote: {
          en: 'Me encantan las clases y todo muy profesional, dinero bien invertido',
          es: 'Me encantan las clases y todo muy profesional, dinero bien invertido',
          ca: 'M\'encanten les classes i tot molt professional, diners ben invertits',
          fr: 'J\'adore les cours et tout est très professionnel, argent bien investi'
        }
      }
    ];

    // Schema Markup data for reviews
    const reviewsSchemaData = dancehallTestimonials.map(testimonial => ({
      itemReviewed: { name: 'Clases de Dancehall - Farray\'s Center', type: 'Course' },
      author: testimonial.name,
      reviewRating: { ratingValue: testimonial.rating.toString(), bestRating: '5' },
      reviewBody: testimonial.quote[locale],
      datePublished: '2025-01-01'
    }));

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
                <meta property="og:image" content={`${baseUrl}/images/classes/dancehall/dancehall-hero-og.jpg`} />

                {/* Twitter */}
                <meta name="twitter:card" content="summary_large_image" />
                <meta property="twitter:url" content={pageUrl} />
                <meta name="twitter:title" content={t('dancehallPageTitleV2')} />
                <meta name="twitter:description" content={t('dancehallMetaDescriptionV2')} />
                <meta name="twitter:image" content={`${baseUrl}/images/classes/dancehall/dancehall-hero-twitter.jpg`} />

                {/* Hreflang */}
                <link rel="alternate" hrefLang="es" href={`${baseUrl}/es/clases/dancehall-barcelona`} />
                <link rel="alternate" hrefLang="ca" href={`${baseUrl}/ca/clases/dancehall-barcelona`} />
                <link rel="alternate" hrefLang="en" href={`${baseUrl}/en/clases/dancehall-barcelona`} />
                <link rel="alternate" hrefLang="fr" href={`${baseUrl}/fr/clases/dancehall-barcelona`} />
                <link rel="alternate" hrefLang="x-default" href={`${baseUrl}/es/clases/dancehall-barcelona`} />
            </Helmet>

            {/* Schema Markup */}
            <LocalBusinessSchema
                name="Farray's International Dance Center - Clases de Dancehall"
                description={t('dancehallMetaDescriptionV2')}
                url={pageUrl}
                telephone="+34622247085"
                email="info@farrayscenter.com"
                address={{
                    streetAddress: "Calle Entença 100",
                    addressLocality: "Barcelona",
                    postalCode: "08015",
                    addressCountry: "ES"
                }}
                geo={{
                    latitude: "41.3751",
                    longitude: "2.1482"
                }}
                priceRange="€€"
                aggregateRating={{
                    ratingValue: "5",
                    reviewCount: "497"
                }}
            />

            <CourseSchema
                name={t('dancehallCourseSchemaName')}
                description={t('dancehallCourseSchemaDesc')}
                provider={{
                    name: "Farray's International Dance Center",
                    url: baseUrl
                }}
                educationalLevel="Beginner, Intermediate, Advanced"
                teaches="Dancehall jamaicano, técnica de danza urbana, musicalidad"
                coursePrerequisites="Ninguno"
                numberOfLessons="Clases semanales ilimitadas"
                timeRequired="PT1H"
                availableLanguage={["es", "en", "ca", "fr"]}
            />

            <AggregateReviewsSchema
                reviews={reviewsSchemaData}
                itemName="Clases de Dancehall en Barcelona - Farray's Center"
                itemType="Course"
            />

            <div className="pt-20 md:pt-24">
                {/* HERO Section */}
                <section id="dancehall-hero" className="relative text-center py-32 md:py-40 overflow-hidden bg-black flex items-center justify-center min-h-[600px]">
                    <div className="absolute inset-0 bg-gradient-to-br from-primary-dark/40 via-black to-black opacity-70 z-10"></div>
                    <video
                        className="absolute z-0 top-0 left-0 w-full h-full object-cover opacity-30"
                        poster="/images/classes/dancehall/dancehall-hero-poster.jpg"
                        autoPlay
                        loop
                        muted
                        playsInline
                        title="Clases de Dancehall en Barcelona"
                    >
                        <source src="/videos/dancehall-hero.mp4" type="video/mp4" />
                    </video>
                    <div className="relative z-20 container mx-auto px-6">
                        <AnimateOnScroll>
                            <h1 className="text-5xl md:text-7xl lg:text-8xl font-black uppercase tracking-tighter leading-tight mb-6 holographic-text">
                                {t('dancehallHeroTitleV2')}
                            </h1>
                            <p className="max-w-4xl mx-auto text-xl md:text-2xl text-neutral/90 mt-8 mb-12 leading-relaxed">
                                {t('dancehallHeroSubtitleV2')}
                            </p>

                            {/* CTA Buttons - Strategy 1: Primary + Secondary */}
                            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mt-10">
                                <a
                                    href="#contact"
                                    className="w-full sm:w-auto bg-primary-accent text-white font-bold text-lg py-5 px-12 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-accent-glow animate-pulse-strong"
                                >
                                    {t('dancehallCTA1')}
                                </a>
                                <a
                                    href="#schedule"
                                    className="w-full sm:w-auto border-2 border-neutral text-neutral font-bold text-lg py-5 px-12 rounded-full transition-all duration-300 hover:bg-neutral hover:text-black"
                                >
                                    {t('dancehallCTA2')}
                                </a>
                            </div>

                            {/* Urgency Badge */}
                            <div className="mt-12 inline-block px-8 py-4 bg-red-600/90 border-2 border-red-500 rounded-full animate-pulse">
                                <p className="text-white font-bold text-sm md:text-base">
                                    ⚡ {t('dancehallUrgency')}
                                </p>
                            </div>
                        </AnimateOnScroll>
                    </div>
                </section>

                {/* Trust Bar - Proof */}
                <section className="py-8 bg-primary-dark/20">
                    <div className="container mx-auto px-6">
                        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 text-center">
                            <div>
                                <div className="text-4xl font-black text-primary-accent">8+</div>
                                <div className="text-sm text-neutral/70">{t('yearsExperience')}</div>
                            </div>
                            <div>
                                <div className="text-4xl font-black text-primary-accent">100+</div>
                                <div className="text-sm text-neutral/70">{t('activeStudents')}</div>
                            </div>
                            <div>
                                <div className="text-4xl font-black text-primary-accent">1000+</div>
                                <div className="text-sm text-neutral/70">{t('satisfiedStudents')}</div>
                            </div>
                            <div>
                                <div className="text-4xl font-black text-primary-accent">497</div>
                                <div className="text-sm text-neutral/70">{t('googleReviews')}</div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Problem-Agitate-Solution */}
                <ProblemAgitateSection
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

                {/* Mid-page CTA - Strategy 2: WhatsApp Direct */}
                <section className="py-16 bg-gradient-to-r from-green-600 to-green-500">
                    <div className="container mx-auto px-6 text-center">
                        <AnimateOnScroll>
                            <h3 className="text-3xl md:text-4xl font-black text-white mb-4">
                                {t('dancehallMidCTATitle')}
                            </h3>
                            <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto">
                                {t('dancehallMidCTADesc')}
                            </p>
                            <a
                                href="https://wa.me/34622247085?text=Hola!%20Quiero%20información%20sobre%20las%20clases%20de%20Dancehall"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-3 bg-white text-green-600 font-bold text-lg py-4 px-10 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg"
                            >
                                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                                </svg>
                                {t('whatsappCTA')}
                            </a>
                        </AnimateOnScroll>
                    </div>
                </section>

                {/* How Classes Work */}
                <section id="how-it-works" className="py-20 md:py-32 bg-primary-dark/10">
                    <div className="container mx-auto px-6">
                        <AnimateOnScroll>
                            <div className="text-center mb-16 max-w-3xl mx-auto">
                                <h2 className="text-4xl md:text-5xl font-black tracking-tighter text-neutral mb-6">
                                    {t('dancehallHowItWorksTitle')}
                                </h2>
                            </div>
                        </AnimateOnScroll>

                        <div className="max-w-5xl mx-auto space-y-12">
                            <AnimateOnScroll delay={100}>
                                <div className="p-8 bg-black/50 backdrop-blur-md border border-primary-dark/50 rounded-2xl">
                                    <h3 className="text-2xl font-bold text-primary-accent mb-4">{t('dancehallClassStructureTitle')}</h3>
                                    <p className="text-neutral/80 leading-relaxed">{t('dancehallClassStructureDesc')}</p>
                                    <ul className="mt-6 space-y-3">
                                        <li className="flex items-start gap-3">
                                            <span className="text-2xl">🔥</span>
                                            <div>
                                                <strong className="text-neutral">{t('warmupTitle')}</strong>
                                                <p className="text-neutral/70">{t('warmupDesc')}</p>
                                            </div>
                                        </li>
                                        <li className="flex items-start gap-3">
                                            <span className="text-2xl">🕺</span>
                                            <div>
                                                <strong className="text-neutral">{t('choreographyTitle')}</strong>
                                                <p className="text-neutral/70">{t('choreographyDesc')}</p>
                                            </div>
                                        </li>
                                        <li className="flex items-start gap-3">
                                            <span className="text-2xl">🎭</span>
                                            <div>
                                                <strong className="text-neutral">{t('improvisationTitle')}</strong>
                                                <p className="text-neutral/70">{t('improvisationDesc')}</p>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </AnimateOnScroll>

                            <AnimateOnScroll delay={200}>
                                <div className="p-8 bg-black/50 backdrop-blur-md border border-primary-dark/50 rounded-2xl">
                                    <h3 className="text-2xl font-bold text-primary-accent mb-4">{t('dancehallLevelsTitle')}</h3>
                                    <div className="grid md:grid-cols-3 gap-6 mt-6">
                                        <div>
                                            <h4 className="font-bold text-lg text-neutral mb-2">🥉 {t('beginnerLevel')}</h4>
                                            <p className="text-neutral/70 text-sm">{t('beginnerLevelDesc')}</p>
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-lg text-neutral mb-2">🥈 {t('intermediateLevel')}</h4>
                                            <p className="text-neutral/70 text-sm">{t('intermediateLevelDesc')}</p>
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-lg text-neutral mb-2">🥇 {t('advancedLevel')}</h4>
                                            <p className="text-neutral/70 text-sm">{t('advancedLevelDesc')}</p>
                                        </div>
                                    </div>
                                </div>
                            </AnimateOnScroll>
                        </div>
                    </div>
                </section>

                {/* Teachers Section - REAL */}
                <section id="teachers" className="py-20 md:py-32 bg-black">
                    <div className="container mx-auto px-6">
                        <AnimateOnScroll>
                            <div className="text-center mb-16">
                                <h2 className="text-4xl md:text-5xl font-black tracking-tighter text-neutral">{t('dancehallTeachersTitle')}</h2>
                                <p className="text-xl text-neutral/70 mt-4">{t('dancehallTeachersSubtitle')}</p>
                            </div>
                        </AnimateOnScroll>

                        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                            <AnimateOnScroll delay={100}>
                                <div className="group bg-black/50 backdrop-blur-md border border-primary-dark/50 hover:border-primary-accent rounded-2xl shadow-lg p-8 transition-all duration-300 hover:shadow-accent-glow">
                                    <div className="flex flex-col items-center text-center">
                                        <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-primary-accent/50 group-hover:border-primary-accent transition-colors duration-300 mb-6">
                                            <img src="/images/teachers/isabel-lopez.jpg" alt="Isabel López" loading="lazy" className="w-full h-full object-cover"/>
                                        </div>
                                        <h3 className="text-2xl font-bold text-neutral mb-2">Isabel López</h3>
                                        <p className="text-primary-accent font-semibold mb-4">{t('dancehallTeacher1Specialty')}</p>
                                        <p className="text-neutral/80 leading-relaxed">{t('dancehallTeacher1Bio')}</p>
                                    </div>
                                </div>
                            </AnimateOnScroll>

                            <AnimateOnScroll delay={200}>
                                <div className="group bg-black/50 backdrop-blur-md border border-primary-dark/50 hover:border-primary-accent rounded-2xl shadow-lg p-8 transition-all duration-300 hover:shadow-accent-glow">
                                    <div className="flex flex-col items-center text-center">
                                        <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-primary-accent/50 group-hover:border-primary-accent transition-colors duration-300 mb-6">
                                            <img src="/images/teachers/sandra-gomez.jpg" alt="Sandra Gómez" loading="lazy" className="w-full h-full object-cover"/>
                                        </div>
                                        <h3 className="text-2xl font-bold text-neutral mb-2">Sandra Gómez</h3>
                                        <p className="text-primary-accent font-semibold mb-4">{t('dancehallTeacher2Specialty')}</p>
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

                {/* Testimonials */}
                <section id="testimonials" className="py-20 md:py-32 bg-black">
                    <div className="container mx-auto px-6">
                        <AnimateOnScroll>
                            <div className="text-center mb-16">
                                <h2 className="text-4xl md:text-5xl font-black tracking-tighter text-neutral">{t('dancehallTestimonialsTitle')}</h2>
                                <div className="flex items-center justify-center gap-2 mt-4">
                                    <div className="flex">
                                        {[...Array(5)].map((_, i) => <StarIcon key={i} className="w-6 h-6 text-primary-accent" />)}
                                    </div>
                                    <span className="text-lg text-neutral/80">5.0 ({t('basedOn')} 497 {t('reviews')})</span>
                                </div>
                            </div>
                        </AnimateOnScroll>

                        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                            {dancehallTestimonials.map((testimonial, index) => (
                                <AnimateOnScroll key={testimonial.id} delay={index * 100}>
                                    <div className="flex flex-col h-full p-8 bg-black/50 backdrop-blur-md border border-primary-dark/50 rounded-2xl shadow-lg">
                                        <div className="flex mb-4">
                                            {[...Array(5)].map((_, i) => <StarIcon key={i} className="w-5 h-5 text-primary-accent" />)}
                                        </div>
                                        <blockquote className="flex-grow text-neutral/90 mb-6">
                                            <p className="text-base leading-relaxed">"{testimonial.quote[locale]}"</p>
                                        </blockquote>
                                        <div className="flex items-center gap-4 mt-auto">
                                            <img src={testimonial.image} alt={testimonial.name} loading="lazy" className="w-12 h-12 rounded-full border-2 border-primary-accent object-cover"/>
                                            <div>
                                                <cite className="font-bold text-neutral not-italic">{testimonial.name}</cite>
                                                <p className="text-sm text-neutral/60">{testimonial.city[locale]}</p>
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

                {/* Final CTA - Strategy 3: Urgency + Benefit */}
                <section id="final-cta" className="py-20 md:py-32 bg-gradient-to-br from-primary-accent/20 to-primary-dark/30 relative overflow-hidden">
                    <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/dark-geometric.png')] opacity-10"></div>
                    <div className="container mx-auto px-6 relative z-10">
                        <AnimateOnScroll>
                            <div className="max-w-4xl mx-auto text-center">
                                <h2 className="text-4xl md:text-6xl font-black text-neutral mb-6 holographic-text">
                                    {t('dancehallFinalCTATitle')}
                                </h2>
                                <p className="text-xl text-neutral/90 mb-10 leading-relaxed">
                                    {t('dancehallFinalCTADesc')}
                                </p>

                                <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                                    <a
                                        href="#contact"
                                        className="w-full sm:w-auto bg-primary-accent text-white font-bold text-xl py-6 px-14 rounded-full transition-all duration-300 transform hover:scale-105 shadow-2xl hover:shadow-accent-glow animate-pulse-strong"
                                    >
                                        {t('dancehallCTA1')}
                                    </a>
                                    <a
                                        href="https://wa.me/34622247085?text=Hola!%20Quiero%20probar%20una%20clase%20gratis%20de%20Dancehall"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="w-full sm:w-auto inline-flex items-center justify-center gap-3 bg-green-600 text-white font-bold text-xl py-6 px-14 rounded-full transition-all duration-300 transform hover:scale-105 shadow-2xl"
                                    >
                                        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                                            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                                        </svg>
                                        {t('whatsappCTA')}
                                    </a>
                                </div>

                                <div className="mt-10 inline-block px-8 py-4 bg-red-600/90 border-2 border-red-500 rounded-full animate-pulse">
                                    <p className="text-white font-bold">
                                        ⏰ {t('dancehallUrgency2')}
                                    </p>
                                </div>
                            </div>
                        </AnimateOnScroll>
                    </div>
                </section>
            </div>
        </>
    );
}

export default DancehallPageV2;
