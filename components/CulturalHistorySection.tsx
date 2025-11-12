import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import AnimateOnScroll from './AnimateOnScroll';

interface CulturalHistorySectionProps {
  titleKey: string;
  shortDescKey: string;
  fullHistoryKey: string;
  readMoreText: string;
  readLessText: string;
  t: (_key: string) => string;
}

const CulturalHistorySection: React.FC<CulturalHistorySectionProps> = ({
  titleKey,
  shortDescKey,
  fullHistoryKey,
  readMoreText,
  readLessText,
  t,
}) => {
  const [isExpanded, setIsExpanded] = useState(false);

  // Parse markdown-style content: split by ### (h3), ** (bold)
  const parseContent = (text: string) => {
    const sections = text.split(/###\s+/).filter(Boolean);

    return sections.map((section, sectionIndex) => {
      const lines = section.split('\n').filter(line => line.trim());
      if (lines.length === 0) return null;

      const heading = lines[0];
      const content = lines.slice(1);

      return (
        <div key={sectionIndex} className="mb-8">
          <h3 className="text-2xl font-bold holographic-text mb-4">{heading}</h3>
          <div className="space-y-3">
            {content.map((para, idx) => {
              const trimmed = para.trim();
              if (!trimmed) return null;

              // Replace **text** with <strong> tags
              const parts = trimmed.split(/\*\*([^*]+)\*\*/);
              return (
                <p key={idx} className="text-neutral/80 leading-relaxed">
                  {parts.map((part, i) => (i % 2 === 1 ? <strong key={i}>{part}</strong> : part))}
                </p>
              );
            })}
          </div>
        </div>
      );
    });
  };

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
                {/* Parse markdown-style content and render safely */}
                {parseContent(t(fullHistoryKey))}
              </div>
            </div>

            {/* Read More/Less Button */}
            <div className="flex justify-center mt-8">
              <button
                onClick={() => setIsExpanded(!isExpanded)}
                className="group flex items-center gap-2 px-6 py-3 bg-primary-dark/30 hover:bg-primary-accent/20 border border-primary-accent/50 hover:border-primary-accent rounded-full transition-all duration-300 holographic-text font-semibold"
                aria-expanded={isExpanded}
              >
                {isExpanded ? readLessText : readMoreText}
                <ChevronDown
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
