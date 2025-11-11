import React from 'react';
import AnimateOnScroll from './AnimateOnScroll';

interface Benefit {
  id: string;
  number: string;
  titleKey: string;
  descKey: string;
}

interface BenefitsGridSectionProps {
  titleKey: string;
  subtitleKey: string;
  benefits: Benefit[];
  t: (key: string) => string;
}

const BenefitsGridSection: React.FC<BenefitsGridSectionProps> = ({
  titleKey,
  subtitleKey,
  benefits,
  t,
}) => {
  return (
    <section id="benefits" className="py-20 md:py-32 bg-black">
      <div className="container mx-auto px-6">
        <AnimateOnScroll>
          <div className="text-center mb-16 max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-black tracking-tighter text-neutral mb-6">
              {t(titleKey)}
            </h2>
            <p className="text-xl text-primary-accent font-semibold">{t(subtitleKey)}</p>
          </div>
        </AnimateOnScroll>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {benefits.map((benefit, index) => (
            <AnimateOnScroll key={benefit.id} delay={index * 100}>
              <div className="group p-8 bg-gradient-to-br from-black/70 to-primary-dark/20 border border-primary-dark/50 hover:border-primary-accent rounded-2xl shadow-lg transition-all duration-300 hover:shadow-accent-glow hover:-translate-y-1">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary-accent/20 flex items-center justify-center border-2 border-primary-accent group-hover:scale-110 transition-transform duration-300">
                    <span className="text-2xl font-black text-primary-accent">{benefit.number}</span>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-neutral mb-3 group-hover:text-primary-accent transition-colors duration-300">
                      {t(benefit.titleKey)}
                    </h3>
                    <p className="text-neutral/80 leading-relaxed">{t(benefit.descKey)}</p>
                  </div>
                </div>
              </div>
            </AnimateOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BenefitsGridSection;
