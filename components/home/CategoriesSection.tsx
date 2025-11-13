import React, { useState } from 'react';
import { useI18n } from '../../hooks/useI18n';
import { CATEGORIES } from '../../constants/categories';
import CategoryCard from './CategoryCard';
import CategoryModal from './CategoryModal';
import CategoriesSchemaMarkup from './CategoriesSchemaMarkup';
import AnimateOnScroll from '../AnimateOnScroll';

// CategoriesSection Component
// Main wrapper component for categories cards and modals
// Verified: Vite + React + useI18n hook
// SEO: All modals rendered in DOM (hidden when closed) for link crawling
// Design: Matches Classes.tsx style with same background, animations, and 3D effects

const CIDLogo: React.FC = () => (
  <div className="w-24 h-24 bg-neutral/10 border-2 border-primary-accent/50 rounded-full flex items-center justify-center p-2 backdrop-blur-sm">
    <svg viewBox="0 0 100 100" className="w-full h-full text-primary-accent">
      <circle cx="50" cy="50" r="48" fill="none" stroke="currentColor" strokeWidth="3" />
      <text x="50" y="55" textAnchor="middle" fontSize="24" fill="currentColor" fontWeight="bold">
        CID
      </text>
      <text x="50" y="75" textAnchor="middle" fontSize="12" fill="currentColor">
        UNESCO
      </text>
    </svg>
  </div>
);

const CategoriesSection: React.FC = () => {
  const { t } = useI18n();
  const [openModalKey, setOpenModalKey] = useState<string | null>(null);

  const sectionTitle = t('home_categories_section_title') || 'Encuentra tu estilo de baile';
  const sectionDescription =
    t('home_categories_section_description') ||
    'Explora nuestras categorías y descubre la clase perfecta para ti';

  return (
    <section id="categories" className="py-20 md:py-32 bg-primary-dark/10">
      <div className="container mx-auto px-6 text-center">
        {/* Section Header */}
        <AnimateOnScroll>
          <h2 className="text-4xl md:text-5xl font-black tracking-tighter mb-4 text-neutral">
            {sectionTitle}
          </h2>
        </AnimateOnScroll>
        <AnimateOnScroll delay={200}>
          <p className="max-w-3xl mx-auto text-lg text-neutral/80 mb-12">{sectionDescription}</p>
        </AnimateOnScroll>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {CATEGORIES.map((category, index) => (
            <AnimateOnScroll key={category.key} delay={index * 100}>
              <CategoryCard category={category} onOpenModal={setOpenModalKey} />
            </AnimateOnScroll>
          ))}
        </div>

        {/* CID-UNESCO Logo */}
        <AnimateOnScroll>
          <div className="flex justify-center mt-16">
            <CIDLogo />
          </div>
        </AnimateOnScroll>

        {/* Modals (all in DOM for SEO, hidden when not open) */}
        {CATEGORIES.map(category => (
          <CategoryModal
            key={`modal-${category.key}`}
            isOpen={openModalKey === category.key}
            category={category}
            onClose={() => setOpenModalKey(null)}
          />
        ))}
      </div>

      {/* Schema Markup */}
      <CategoriesSchemaMarkup />
    </section>
  );
};

export default CategoriesSection;
