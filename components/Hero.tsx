import React from 'react';
import { useI18n } from '../hooks/useI18n';

const Hero: React.FC = () => {
  const { t } = useI18n();

  return (
    <section
      id="hero"
      className="relative h-screen w-full flex items-center justify-center overflow-hidden"
    >
      {/* 3D Canvas Placeholder */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/50 via-black to-black">
        {/* Enhanced gradient overlay for better text visibility */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/30 to-black/80"></div>
        {/* Animated gradient accent */}
        <div className="absolute inset-0 bg-gradient-to-tr from-primary-accent/20 via-transparent to-purple-600/10 animate-pulse-slow"></div>
      </div>

      <div className="relative z-10 text-center text-white px-4">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-black uppercase tracking-tighter leading-tight mb-4 min-h-[120px] md:min-h-[180px] lg:min-h-[200px] flex flex-col items-center justify-center drop-shadow-2xl">
          <span className="bg-gradient-to-r from-white via-purple-100 to-white bg-clip-text text-transparent">
            {t('heroTitle1')}
          </span>
          <br />
          <span className="text-3xl md:text-5xl lg:text-6xl font-bold tracking-normal mt-2 bg-gradient-to-r from-primary-accent via-purple-400 to-primary-accent bg-clip-text text-transparent animate-glow">
            {t('heroTitle2')}
          </span>
        </h1>
        <p className="text-xl md:text-2xl my-6 text-purple-200 font-medium drop-shadow-lg min-h-[40px]">
          {t('heroTagline')}
        </p>
        <p className="max-w-3xl mx-auto text-lg md:text-xl text-gray-300 mb-10 min-h-[60px] drop-shadow-md">
          {t('heroValue')}
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="#trial"
            className="w-full sm:w-auto bg-gradient-to-r from-primary-accent to-purple-600 text-white font-bold text-lg py-4 px-10 rounded-full transition-all duration-300 transform hover:scale-105 shadow-2xl hover:shadow-accent-glow animate-pulse-strong hover:from-purple-600 hover:to-primary-accent"
          >
            {t('heroCTA1')}
          </a>
          <a
            href="#classes"
            className="w-full sm:w-auto border-2 border-purple-400 text-white font-bold text-lg py-4 px-10 rounded-full transition-all duration-300 hover:bg-purple-400 hover:text-black hover:border-white shadow-lg"
          >
            {t('heroCTA2')}
          </a>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center space-y-2 text-purple-300 animate-subtle-bob drop-shadow-lg">
        <span className="font-medium">{t('heroScroll')}</span>
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M19 9l-7 7-7-7"
          ></path>
        </svg>
      </div>
    </section>
  );
};

export default Hero;
