import React from 'react';
import { Globe, Sparkles, Building2, Heart, Clock, GraduationCap, MapPin } from 'lucide-react';
import { useI18n } from '../hooks/useI18n';
import type { ValuePillar } from '../types';
import AnimateOnScroll from './AnimateOnScroll';

const valuePillars: ValuePillar[] = [
  {
    id: 'instructors',
    titleKey: 'whyPillar1Title',
    contentKey: 'whyPillar1Content',
    Icon: Globe,
  },
  {
    id: 'method',
    titleKey: 'whyPillar2Title',
    contentKey: 'whyPillar2Content',
    Icon: Sparkles,
  },
  {
    id: 'facilities',
    titleKey: 'whyPillar3Title',
    contentKey: 'whyPillar3Content',
    Icon: Building2,
  },
  {
    id: 'atmosphere',
    titleKey: 'whyPillar4Title',
    contentKey: 'whyPillar4Content',
    Icon: Heart,
  },
  {
    id: 'flexibility',
    titleKey: 'whyPillar5Title',
    contentKey: 'whyPillar5Content',
    Icon: Clock,
  },
  {
    id: 'prestige',
    titleKey: 'whyPillar6Title',
    contentKey: 'whyPillar6Content',
    Icon: GraduationCap,
  },
  {
    id: 'location',
    titleKey: 'whyPillar7Title',
    contentKey: 'whyPillar7Content',
    Icon: MapPin,
  },
];

const WhyFIDC: React.FC = () => {
  const { t } = useI18n();

  return (
    <section id="why-fidc" className="py-20 md:py-32 bg-black">
      <div className="container mx-auto px-6">
        <AnimateOnScroll>
          <div className="text-center mb-16 max-w-3xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-black tracking-tighter text-neutral mb-4">
              {t('whyTitle')}
            </h2>
          </div>
        </AnimateOnScroll>
        <div className="flex flex-wrap justify-center -m-4">
          {valuePillars.map((pillar, index) => (
            <div key={pillar.id} className="w-full sm:w-1/2 lg:w-1/3 p-4">
              <AnimateOnScroll delay={index * 100} className="h-full">
                <div className="group p-8 bg-black/50 backdrop-blur-md border border-primary-dark/50 rounded-2xl shadow-lg transition-all duration-300 hover:border-primary-accent hover:shadow-accent-glow hover:-translate-y-2 h-full flex flex-col">
                  <div className="mb-6">
                    <div className="bg-primary-dark/30 p-4 rounded-xl inline-block shadow-inner">
                      <pillar.Icon className="h-10 w-10 text-primary-accent" />
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold mb-4 text-neutral">{t(pillar.titleKey)}</h3>
                  <p className="text-neutral/80 leading-relaxed flex-grow">
                    {t(pillar.contentKey)}
                  </p>
                </div>
              </AnimateOnScroll>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyFIDC;
