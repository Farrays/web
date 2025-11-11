import React from 'react';
import AnimateOnScroll from './AnimateOnScroll';

interface Problem {
  id: string;
  titleKey: string;
  descKey: string;
  icon: string;
}

interface ProblemAgitateSectionV2Props {
  problems: Problem[];
  solutionTitleKey: string;
  solutionDescKey: string;
  t: (key: string) => string;
}

// SVG Icon Components
const JamaicaFlagIcon: React.FC<React.SVGProps<SVGSVGElement>> = props => (
  <svg {...props} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="48" height="48" fill="#009B3A" />
    <path d="M0 0L48 48M48 0L0 48" stroke="#FED100" strokeWidth="6" />
    <path d="M0 0L48 48M48 0L0 48" stroke="black" strokeWidth="2" />
  </svg>
);

const StressIcon: React.FC<React.SVGProps<SVGSVGElement>> = props => (
  <svg {...props} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" />
    <path
      d="M8 15C8 15 9.5 13 12 13C14.5 13 16 15 16 15"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
    />
    <circle cx="9" cy="9" r="1" fill="currentColor" />
    <circle cx="15" cy="9" r="1" fill="currentColor" />
    <path d="M6 6L8 8M18 6L16 8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
  </svg>
);

const ConfidenceIcon: React.FC<React.SVGProps<SVGSVGElement>> = props => (
  <svg {...props} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" />
    <path
      d="M8 13C8 13 9.5 15 12 15C14.5 15 16 13 16 13"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
    />
    <circle cx="9" cy="9" r="1.5" fill="currentColor" />
    <circle cx="15" cy="9" r="1.5" fill="currentColor" />
    <path d="M9 6L10 7M15 6L14 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
  </svg>
);

const FitnessIcon: React.FC<React.SVGProps<SVGSVGElement>> = props => (
  <svg {...props} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M20.57 14.86L22 13.43 20.57 12 17 15.57 8.43 7 12 3.43 10.57 2 9.14 3.43 7.71 2 5.57 4.14 4.14 2.71 2.71 4.14l1.43 1.43L2 7.71l1.43 1.43L2 10.57 3.43 12 7 8.43 15.57 17 12 20.57 13.43 22l1.43-1.43L16.29 22l2.14-2.14 1.43 1.43 1.43-1.43-1.43-1.43L22 16.29z"
      fill="currentColor"
    />
  </svg>
);

const SocialIcon: React.FC<React.SVGProps<SVGSVGElement>> = props => (
  <svg {...props} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="9" cy="7" r="4" stroke="currentColor" strokeWidth="2" />
    <circle cx="17" cy="17" r="3" stroke="currentColor" strokeWidth="2" />
    <path
      d="M14 9.5C15.5 8.5 17 8.5 18 10M8 11C6.5 12 5 14 5 17"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
    />
  </svg>
);

const DanceIcon: React.FC<React.SVGProps<SVGSVGElement>> = props => (
  <svg {...props} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="12" cy="5" r="2" fill="currentColor" />
    <path
      d="M10 9L8 11L6 13M14 9L16 11L18 13M10 9L11 14L9 19M14 9L13 14L15 19M11 14L13 14"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path d="M6 19L8 21M18 19L16 21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
  </svg>
);

const iconMap = {
  jamaica: JamaicaFlagIcon,
  stress: StressIcon,
  confidence: ConfidenceIcon,
  fitness: FitnessIcon,
  social: SocialIcon,
  dance: DanceIcon,
};

const ProblemAgitateSectionV2: React.FC<ProblemAgitateSectionV2Props> = ({
  problems,
  solutionTitleKey,
  solutionDescKey,
  t,
}) => {
  return (
    <section id="problem-agitate" className="py-20 md:py-32 bg-primary-dark/10">
      <div className="container mx-auto px-6">
        <AnimateOnScroll>
          <div className="text-center mb-16 max-w-3xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-black tracking-tighter text-neutral mb-6">
              {t('dancehallProblemsTitle')}
            </h2>
          </div>
        </AnimateOnScroll>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto mb-16">
          {problems.map((problem, index) => {
            const IconComponent = iconMap[problem.icon as keyof typeof iconMap];
            const isJamaicaFlag = problem.icon === 'jamaica';

            return (
              <AnimateOnScroll key={problem.id} delay={index * 100}>
                <div className="p-6 bg-black/50 backdrop-blur-md border border-primary-dark/50 hover:border-primary-accent rounded-xl h-full transition-all duration-300 hover:shadow-accent-glow">
                  <div className="mb-4 flex justify-center">
                    {isJamaicaFlag ? (
                      <img
                        src="/images/classes/dancehall/raw/Jamaica.webp"
                        alt="Bandera de Jamaica"
                        className="w-16 h-16 rounded-lg object-cover shadow-lg border-2 border-primary-accent/50"
                        loading="lazy"
                      />
                    ) : (
                      <IconComponent className="w-16 h-16 holographic-text" />
                    )}
                  </div>
                  <h3 className="text-xl font-bold text-neutral mb-3 text-center">
                    {t(problem.titleKey)}
                  </h3>
                  <p className="text-neutral/80 leading-relaxed text-center">
                    {t(problem.descKey)}
                  </p>
                </div>
              </AnimateOnScroll>
            );
          })}
        </div>

        {/* Solution */}
        <AnimateOnScroll delay={300}>
          <div className="max-w-4xl mx-auto text-center p-10 bg-gradient-to-br from-primary-accent/20 to-primary-dark/30 border-2 border-primary-accent rounded-2xl shadow-accent-glow">
            <h3 className="text-3xl md:text-4xl font-black text-neutral mb-6 holographic-text">
              {t(solutionTitleKey)}
            </h3>
            <p className="text-lg text-neutral/90 leading-relaxed">{t(solutionDescKey)}</p>
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  );
};

export default ProblemAgitateSectionV2;
