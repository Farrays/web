import React from 'react';
import { useI18n } from '../hooks/useI18n';
import AnimateOnScroll from './AnimateOnScroll';

const Philosophy: React.FC = () => {
  const { t } = useI18n();

  return (
    <section className="relative py-20 md:py-28 bg-gradient-to-b from-black via-purple-950/30 to-black text-white">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-900/10 to-transparent"></div>
      <div className="container mx-auto px-6 relative z-10 text-center max-w-4xl">
        <AnimateOnScroll>
          <h2 className="text-3xl md:text-4xl font-bold mb-8 bg-gradient-to-r from-primary-accent via-purple-400 to-primary-accent bg-clip-text text-transparent">
            {t('philosophyIntro')}
          </h2>
        </AnimateOnScroll>
        <AnimateOnScroll delay={200}>
          <div className="space-y-6 text-lg md:text-xl text-gray-300 leading-relaxed">
            <p>{t('philosophyBody1')}</p>
            <p>{t('philosophyBody2')}</p>
          </div>
        </AnimateOnScroll>
        <AnimateOnScroll delay={400}>
          <figure className="mt-16 max-w-2xl mx-auto">
            <blockquote className="border-l-4 border-primary-accent pl-6 bg-purple-950/20 py-4 rounded-r-lg">
              <p className="text-xl md:text-2xl italic text-purple-100">“{t('philosophyQuote')}”</p>
            </blockquote>
            <figcaption className="mt-4 text-right text-lg text-gray-400">
              — {t('philosophyQuoteAuthor')}
            </figcaption>
          </figure>
        </AnimateOnScroll>
      </div>
    </section>
  );
};

export default Philosophy;
