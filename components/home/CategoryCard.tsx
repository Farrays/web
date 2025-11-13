import React from 'react';
import { useI18n } from '../../hooks/useI18n';
import type { CategoryCardProps } from '../../types/categories';
import { CheckCircleIcon } from '../../lib/icons';

// CategoryCard Component
// Verified: Vite + React + useI18n hook
// Primary color: #c82260 (primary-accent from tailwind.config)

const CategoryCard: React.FC<CategoryCardProps> = ({ category, onOpenModal }) => {
  const { t } = useI18n();

  // Colors verified in tailwind.config.js (section 0.1)
  const primaryColor = 'bg-primary-accent hover:bg-primary-dark';
  const primaryTextColor = 'text-primary-accent';

  // Get translations with fallback
  const title = t(`home_categories_${category.key}_title`) || category.key;
  const imageAlt = t(`home_categories_${category.key}_image_alt`) || `${title} class`;

  // Bullets are stored as comma-separated string in i18n
  const bulletsString = t(`home_categories_${category.key}_bullets`) || '';
  const bullets = bulletsString ? bulletsString.split(',').map(b => b.trim()) : [];

  const ctaText = t('home_categories_cta_learn_more') || 'Saber más';

  return (
    <article className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl hover:-translate-y-1 transition-all duration-300">
      {/* Image */}
      <div className="relative h-48 md:h-56 overflow-hidden">
        <img
          src={category.imageUrl}
          alt={imageAlt}
          className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
          loading={category.key === 'urbano' ? 'eager' : 'lazy'}
          decoding="async"
        />
      </div>

      {/* Content */}
      <div className="p-6">
        <h3 className="text-2xl font-bold text-gray-900 mb-4">{title}</h3>

        <ul className="space-y-2 mb-6">
          {bullets.map((bullet, index) => (
            <li key={index} className="flex items-start text-gray-600">
              <CheckCircleIcon className={`w-5 h-5 ${primaryTextColor} mr-2 mt-0.5 flex-shrink-0`} />
              <span>{bullet}</span>
            </li>
          ))}
        </ul>

        <button
          onClick={() => onOpenModal(category.key)}
          className={`w-full md:w-auto px-6 py-3 ${primaryColor} text-white font-semibold rounded-lg transition-colors duration-200`}
          aria-label={`${ctaText} sobre ${title}`}
        >
          {ctaText}
        </button>
      </div>
    </article>
  );
};

export default CategoryCard;
