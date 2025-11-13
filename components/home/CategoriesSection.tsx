import React, { useState } from 'react';
import { useI18n } from '../../hooks/useI18n';
import { CATEGORIES } from '../../constants/categories';
import CategoryCard from './CategoryCard';
import CategoryModal from './CategoryModal';
import CategoriesSchemaMarkup from './CategoriesSchemaMarkup';

// CategoriesSection Component
// Main wrapper component for categories cards and modals
// Verified: Vite + React + useI18n hook
// SEO: All modals rendered in DOM (hidden when closed) for link crawling

const CategoriesSection: React.FC = () => {
  const { t } = useI18n();
  const [openModalKey, setOpenModalKey] = useState<string | null>(null);

  const sectionTitle = t('home_categories_section_title') || 'Encuentra tu estilo de baile';
  const sectionDescription =
    t('home_categories_section_description') ||
    'Explora nuestras categorías y descubre la clase perfecta para ti';

  return (
    <section className="py-16 md:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">{sectionTitle}</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">{sectionDescription}</p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {CATEGORIES.map(category => (
            <CategoryCard key={category.key} category={category} onOpenModal={setOpenModalKey} />
          ))}
        </div>

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
