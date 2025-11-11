import React, { useState } from 'react';
import AnimateOnScroll from './AnimateOnScroll';

interface CulturalHistorySectionProps {
  titleKey: string;
  shortDescKey: string;
  fullHistoryKey: string;
  readMoreText: string;
  readLessText: string;
  t: (key: string) => string;
}

const ChevronDownIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
  </svg>
);

const CulturalHistorySection: React.FC<CulturalHistorySectionProps> = ({
  titleKey,
  shortDescKey,
  fullHistoryKey,
  readMoreText,
  readLessText,
  t,
}) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <section id="cultural-history" className="py-20 md:py-32 bg-black">
      <div className="container mx-auto px-6">
        <AnimateOnScroll>
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-black tracking-tighter text-neutral mb-8 text-center">
              {t(titleKey)}
            </h2>

            {/* Short description - always visible */}
            <div className="text-lg text-neutral/80 leading-relaxed mb-6">
              <p>{t(shortDescKey)}</p>
            </div>

            {/* Expandable full history */}
            <div
              className={`overflow-hidden transition-all duration-500 ${
                isExpanded ? 'max-h-[2000px] opacity-100' : 'max-h-0 opacity-0'
              }`}
            >
              <div className="space-y-6 text-neutral/80 leading-relaxed">
                <div dangerouslySetInnerHTML={{ __html: t(fullHistoryKey) }} />
              </div>
            </div>

            {/* Read More/Less Button */}
            <div className="flex justify-center mt-8">
              <button
                onClick={() => setIsExpanded(!isExpanded)}
                className="group flex items-center gap-2 px-6 py-3 bg-primary-dark/30 hover:bg-primary-accent/20 border border-primary-accent/50 hover:border-primary-accent rounded-full transition-all duration-300 text-primary-accent font-semibold"
                aria-expanded={isExpanded}
              >
                {isExpanded ? readLessText : readMoreText}
                <ChevronDownIcon
                  className={`w-5 h-5 transition-transform duration-300 ${
                    isExpanded ? 'rotate-180' : ''
                  }`}
                />
              </button>
            </div>
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  );
};

export default CulturalHistorySection;
