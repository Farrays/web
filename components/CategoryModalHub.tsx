import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { useI18n } from '../hooks/useI18n';
import type { HubCategory } from '../constants/danceClassesHub';

interface CategoryModalHubProps {
  isOpen: boolean;
  category: HubCategory | null;
  onClose: () => void;
}

const CategoryModalHub: React.FC<CategoryModalHubProps> = ({ isOpen, category, onClose }) => {
  const { t, locale } = useI18n();
  const modalRef = useRef<HTMLDivElement>(null);
  const lastFocusedElement = useRef<HTMLElement | null>(null);

  // Focus trap and keyboard handling
  useEffect(() => {
    if (!isOpen || !category) return;

    // Store last focused element
    lastFocusedElement.current = document.activeElement as HTMLElement;

    // Prevent body scroll
    document.body.style.overflow = 'hidden';

    // Focus first focusable element
    const focusableElements = modalRef.current?.querySelectorAll<HTMLElement>(
      'a[href], button:not([disabled]), textarea, input, select, [tabindex]:not([tabindex="-1"])'
    );
    if (focusableElements && focusableElements.length > 0) {
      focusableElements[0].focus();
    }

    // Keyboard handler
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        e.preventDefault();
        onClose();
        return;
      }

      if (e.key === 'Tab' && focusableElements) {
        const first = focusableElements[0];
        const last = focusableElements[focusableElements.length - 1];

        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault();
          last.focus();
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault();
          first.focus();
        }
      }
    };

    document.addEventListener('keydown', handleKeyDown);

    // Dispatch analytics event
    window.dispatchEvent(
      new CustomEvent('ui:modal_open', {
        detail: { categorySlug: category.key },
      })
    );

    return () => {
      document.body.style.overflow = '';
      document.removeEventListener('keydown', handleKeyDown);

      // Restore focus
      if (lastFocusedElement.current) {
        lastFocusedElement.current.focus();
      }

      // Dispatch close event
      window.dispatchEvent(
        new CustomEvent('ui:modal_close', {
          detail: { categorySlug: category.key },
        })
      );
    };
  }, [isOpen, category, onClose]);

  if (!isOpen || !category) return null;

  const handleBackdropClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  const handleStyleClick = (styleKey: string) => {
    window.dispatchEvent(
      new CustomEvent('ui:style_click', {
        detail: {
          categorySlug: category.key,
          styleSlug: styleKey,
        },
      })
    );
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-start justify-center p-4 md:p-10 overflow-y-auto"
      role="dialog"
      aria-modal="true"
      aria-labelledby={`modal-title-${category.key}`}
      onClick={handleBackdropClick}
    >
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/40 backdrop-blur-sm" aria-hidden="true" />

      {/* Modal Content */}
      <div
        ref={modalRef}
        className="relative w-full max-w-3xl bg-white rounded-2xl shadow-xl my-auto"
      >
        <div className="p-6 md:p-8">
          {/* Header */}
          <div className="flex items-start justify-between gap-4 mb-4">
            <h2
              id={`modal-title-${category.key}`}
              className="text-2xl md:text-3xl font-semibold text-neutral"
            >
              {t(category.titleKey)}
            </h2>
            <button
              onClick={onClose}
              className="shrink-0 rounded-lg p-2 ring-1 ring-gray-300 hover:ring-primary-accent hover:bg-gray-50 transition-colors"
              aria-label={t('danceClassesHub_modal_close')}
            >
              <svg
                className="w-5 h-5 text-gray-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>

          {/* Detailed Description */}
          <p className="text-gray-600 mb-6">{t(category.detailedDescriptionKey)}</p>

          {/* All Styles Grid */}
          <div
            className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6"
            aria-label={t('danceClassesHub_all_styles_label')}
          >
            {category.allStyles.map((style) => (
              <Link
                key={style.key}
                to={`/${locale}${style.url}`}
                onClick={() => handleStyleClick(style.key)}
                className="block rounded-xl ring-1 ring-gray-200 p-4 hover:ring-primary-accent hover:bg-gray-50 transition-colors text-neutral hover:text-primary-accent font-medium"
              >
                {t(`danceClassesHub_style_${style.key}`)}
              </Link>
            ))}
          </div>

          {/* Footer */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-6 border-t border-gray-200">
            <Link
              to={`/${locale}${category.pillarUrl}`}
              className="inline-flex items-center justify-center rounded-xl px-6 py-3 text-sm font-medium ring-1 ring-gray-300 hover:ring-primary-accent hover:bg-gray-50 transition-colors w-full sm:w-auto"
            >
              {t('danceClassesHub_cta_view_category')}
            </Link>
            <button
              onClick={onClose}
              className="text-sm text-gray-600 hover:text-primary-accent transition-colors"
            >
              {t('danceClassesHub_modal_close')}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CategoryModalHub;
