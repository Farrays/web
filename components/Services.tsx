import React from 'react';
import { Key, Camera, Sparkles, User, PlayCircle, Building2, Heart } from 'lucide-react';
import { useI18n } from '../hooks/useI18n';
import type { ServiceInfo } from '../types';
import AnimateOnScroll from './AnimateOnScroll';

const servicesData: ServiceInfo[] = [
  {
    id: 'rental',
    Icon: Key,
    titleKey: 'serviceRentalTitle',
    descriptionKey: 'serviceRentalDesc',
    ctaKey: 'serviceRentalCTA',
  },
  {
    id: 'photo',
    Icon: Camera,
    titleKey: 'servicePhotoTitle',
    descriptionKey: 'servicePhotoDesc',
    ctaKey: 'servicePhotoCTA',
  },
  {
    id: 'parties',
    Icon: Sparkles,
    titleKey: 'servicePartiesTitle',
    descriptionKey: 'servicePartiesDesc',
    ctaKey: 'servicePartiesCTA',
  },
  {
    id: 'private',
    Icon: User,
    titleKey: 'servicePrivateTitle',
    descriptionKey: 'servicePrivateDesc',
    ctaKey: 'servicePrivateCTA',
  },
  {
    id: 'agency',
    Icon: PlayCircle,
    titleKey: 'serviceAgencyTitle',
    descriptionKey: 'serviceAgencyDesc',
    ctaKey: 'serviceAgencyCTA',
  },
  {
    id: 'corporate',
    Icon: Building2,
    titleKey: 'serviceCorporateTitle',
    descriptionKey: 'serviceCorporateDesc',
    ctaKey: 'serviceCorporateCTA',
  },
  {
    id: 'gift',
    Icon: Heart,
    titleKey: 'serviceGiftTitle',
    descriptionKey: 'serviceGiftDesc',
    ctaKey: 'serviceGiftCTA',
  },
];

const Services: React.FC = () => {
  const { t } = useI18n();

  return (
    <section id="services" className="py-20 md:py-32 bg-primary-dark/10">
      <div className="container mx-auto px-6">
        <AnimateOnScroll>
          <div className="text-center mb-16 max-w-3xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-black tracking-tighter text-neutral mb-4">
              {t('servicesTitle')}
            </h2>
            <p className="text-lg text-neutral/80">{t('servicesIntro')}</p>
          </div>
        </AnimateOnScroll>
        <div className="flex flex-wrap justify-center -m-4">
          {servicesData.map((service, index) => (
            <div key={service.id} className="w-full md:w-1/2 lg:w-1/3 p-4">
              <AnimateOnScroll delay={index * 100} className="h-full">
                <div className="group p-8 bg-black/50 backdrop-blur-md border border-primary-dark/50 rounded-2xl shadow-lg transition-all duration-300 hover:border-primary-accent hover:shadow-accent-glow hover:-translate-y-2 h-full flex flex-col">
                  <div className="mb-6">
                    <div className="bg-primary-dark/30 p-4 rounded-xl inline-block shadow-inner">
                      <service.Icon className="h-10 w-10 text-primary-accent" />
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold mb-4 text-neutral">{t(service.titleKey)}</h3>
                  <p className="text-neutral/80 leading-relaxed flex-grow mb-6">
                    {t(service.descriptionKey)}
                  </p>
                  <div className="mt-auto">
                    <a
                      href={`#${service.id}`}
                      className="font-bold text-primary-accent hover:text-white transition-colors duration-300"
                    >
                      {t(service.ctaKey)}{' '}
                      <span className="inline-block transition-transform duration-300 group-hover:translate-x-2">
                        →
                      </span>
                    </a>
                  </div>
                </div>
              </AnimateOnScroll>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
