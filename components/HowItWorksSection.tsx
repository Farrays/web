import React from 'react';
import AnimateOnScroll from './AnimateOnScroll';

interface HowItWorksSectionProps {
  t: (key: string) => string;
}

// SVG Icons
const LevelsIcon: React.FC<React.SVGProps<SVGSVGElement>> = props => (
  <svg {...props} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M3 13h8v8H3v-8zm10-10h8v8h-8V3zm0 10h8v8h-8v-8zM3 3h8v8H3V3z"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinejoin="round"
    />
  </svg>
);

const MethodIcon: React.FC<React.SVGProps<SVGSVGElement>> = props => (
  <svg {...props} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const AuthenticIcon: React.FC<React.SVGProps<SVGSVGElement>> = props => (
  <svg {...props} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M12 15l-3 3-3-3m0 0L9 9m-3 6V9m9-6l3 3 3-3m0 0L18 15m3-6v6m-9 0a9 9 0 110-18 9 9 0 010 18z"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const WarmupIcon: React.FC<React.SVGProps<SVGSVGElement>> = props => (
  <svg {...props} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M13 10V3L4 14h7v7l9-11h-7z"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const ChoreographyIcon: React.FC<React.SVGProps<SVGSVGElement>> = props => (
  <svg {...props} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="12" cy="6" r="3" stroke="currentColor" strokeWidth="2" />
    <path
      d="M12 9v6m0 0l-3 4m3-4l3 4M8 13l-2 2m10-2l2 2"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const ImprovisationIcon: React.FC<React.SVGProps<SVGSVGElement>> = props => (
  <svg {...props} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const HowItWorksSection: React.FC<HowItWorksSectionProps> = ({ t }) => {
  const pillars = [
    { icon: LevelsIcon, titleKey: 'howItWorksPillar1Title', descKey: 'howItWorksPillar1Desc' },
    { icon: MethodIcon, titleKey: 'howItWorksPillar2Title', descKey: 'howItWorksPillar2Desc' },
    { icon: AuthenticIcon, titleKey: 'howItWorksPillar3Title', descKey: 'howItWorksPillar3Desc' },
  ];

  const sessionItems = [
    { icon: WarmupIcon, titleKey: 'sessionItem1Title', descKey: 'sessionItem1Desc' },
    { icon: ChoreographyIcon, titleKey: 'sessionItem2Title', descKey: 'sessionItem2Desc' },
    { icon: ImprovisationIcon, titleKey: 'sessionItem3Title', descKey: 'sessionItem3Desc' },
  ];

  return (
    <section id="how-it-works" className="py-20 md:py-32 bg-black">
      <div className="container mx-auto px-6">
        <AnimateOnScroll>
          <div className="text-center mb-16 max-w-3xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-black tracking-tighter text-neutral mb-6">
              {t('howItWorksTitle')}
            </h2>
            <p className="text-lg text-neutral/80 leading-relaxed">{t('howItWorksIntro')}</p>
          </div>
        </AnimateOnScroll>

        {/* 3 Pillars */}
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-20">
          {pillars.map((pillar, index) => (
            <AnimateOnScroll key={index} delay={index * 100}>
              <div className="p-8 bg-black/50 backdrop-blur-md border border-primary-dark/50 hover:border-primary-accent rounded-2xl shadow-lg transition-all duration-300 hover:shadow-accent-glow text-center">
                <div className="mb-6 flex justify-center">
                  <div className="p-4 bg-primary-accent/20 rounded-xl">
                    <pillar.icon className="w-12 h-12 text-primary-accent" />
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-neutral mb-4">{t(pillar.titleKey)}</h3>
                <p className="text-neutral/80 leading-relaxed">{t(pillar.descKey)}</p>
              </div>
            </AnimateOnScroll>
          ))}
        </div>

        {/* Session Structure */}
        <AnimateOnScroll delay={300}>
          <div className="max-w-4xl mx-auto">
            <h3 className="text-3xl font-black text-neutral text-center mb-12">
              {t('sessionStructureTitle')}
            </h3>

            <div className="space-y-6">
              {sessionItems.map((item, index) => (
                <AnimateOnScroll key={index} delay={400 + index * 100}>
                  <div className="p-6 bg-gradient-to-r from-black/70 to-primary-dark/20 border border-primary-dark/50 rounded-xl flex items-start gap-6 hover:border-primary-accent transition-all duration-300">
                    <div className="flex-shrink-0 p-3 bg-primary-accent/20 rounded-lg">
                      <item.icon className="w-8 h-8 text-primary-accent" />
                    </div>
                    <div>
                      <h4 className="text-xl font-bold text-neutral mb-2">{t(item.titleKey)}</h4>
                      <p className="text-neutral/80 leading-relaxed">{t(item.descKey)}</p>
                    </div>
                  </div>
                </AnimateOnScroll>
              ))}
            </div>
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  );
};

export default HowItWorksSection;
