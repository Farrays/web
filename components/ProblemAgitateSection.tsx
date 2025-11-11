import React from 'react';
import AnimateOnScroll from './AnimateOnScroll';

interface Problem {
  id: string;
  emoji: string;
  titleKey: string;
  descKey: string;
}

interface ProblemAgitateSectionProps {
  problems: Problem[];
  solutionTitleKey: string;
  solutionDescKey: string;
  t: (key: string) => string;
}

const ProblemAgitateSection: React.FC<ProblemAgitateSectionProps> = ({
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
          {problems.map((problem, index) => (
            <AnimateOnScroll key={problem.id} delay={index * 100}>
              <div className="p-6 bg-black/50 backdrop-blur-md border border-primary-dark/50 rounded-xl h-full">
                <div className="text-5xl mb-4">{problem.emoji}</div>
                <h3 className="text-xl font-bold text-neutral mb-3">{t(problem.titleKey)}</h3>
                <p className="text-neutral/80 leading-relaxed">{t(problem.descKey)}</p>
              </div>
            </AnimateOnScroll>
          ))}
        </div>

        {/* Solution */}
        <AnimateOnScroll delay={300}>
          <div className="max-w-4xl mx-auto text-center p-10 bg-gradient-to-br from-primary-accent/20 to-primary-dark/30 border-2 border-primary-accent rounded-2xl shadow-accent-glow">
            <h3 className="text-3xl md:text-4xl font-black text-neutral mb-6 holographic-text">
              {t(solutionTitleKey)}
            </h3>
            <p className="text-lg text-neutral/90 leading-relaxed">
              {t(solutionDescKey)}
            </p>
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  );
};

export default ProblemAgitateSection;
