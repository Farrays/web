import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { useI18n } from '../../hooks/useI18n';
import type { CategoryModalProps } from '../../types/categories';
import { XMarkIcon, ChevronRightIcon } from '../../lib/icons';

// CategoryModal Component
// Verified: Vite + React + React Router + useI18n
// SEO-optimized: Always in DOM (hidden when closed), links crawlable by Google
// Accessibility: WCAG AA compliant with focus-trap, ARIA, keyboard navigation
// Design: Dark theme with primary-dark background and primary-accent highlights

const CategoryModal: React.FC<CategoryModalProps> = ({ isOpen, category, onClose }) => {
  const { t } = useI18n();

  const modalRef = useRef<HTMLDivElement>(null);
  const openButtonRef = useRef<HTMLElement | null>(null);
  const firstFocusableRef = useRef<HTMLButtonElement>(null);

  // Save reference to button that opened modal
  useEffect(() => {
    if (isOpen) {
      openButtonRef.current = document.activeElement as HTMLElement;
    }
  }, [isOpen]);

  // Focus management and overflow control
  useEffect(() => {
    if (isOpen) {
      // Prevent body scroll
      document.body.style.overflow = 'hidden';

      // Move focus to first focusable element
      setTimeout(() => firstFocusableRef.current?.focus(), 50);

      // Dispatch analytics event
      window.dispatchEvent(
        new CustomEvent('ui:modal_open', {
          detail: { categorySlug: category.pillarSlug },
        })
      );
    } else {
      document.body.style.overflow = '';

      // Return focus to button that opened modal
      if (openButtonRef.current) {
        openButtonRef.current.focus();
      }

      // Dispatch analytics event if modal was open
      if (category) {
        window.dispatchEvent(
          new CustomEvent('ui:modal_close', {
            detail: { categorySlug: category.pillarSlug },
          })
        );
      }
    }

    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen, category]);

  // Focus trap
  useEffect(() => {
    if (!isOpen || !modalRef.current) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      // ESC to close
      if (e.key === 'Escape') {
        onClose();
        return;
      }

      // Focus trap with Tab
      if (e.key === 'Tab') {
        const focusableElements = modalRef.current!.querySelectorAll<HTMLElement>(
          'button, a[href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
        );
        const firstElement = focusableElements[0];
        const lastElement = focusableElements[focusableElements.length - 1];

        if (e.shiftKey) {
          // Shift+Tab: if on first, go to last
          if (document.activeElement === firstElement) {
            e.preventDefault();
            lastElement?.focus();
          }
        } else {
          // Tab: if on last, go to first
          if (document.activeElement === lastElement) {
            e.preventDefault();
            firstElement?.focus();
          }
        }
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  // Handler for style click (analytics)
  const handleStyleClick = (styleKey: string, styleSlug: string) => {
    window.dispatchEvent(
      new CustomEvent('ui:style_click', {
        detail: {
          categorySlug: category.pillarSlug,
          styleSlug: styleSlug,
        },
      })
    );
  };

  // Click on backdrop
  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  // Get translations
  const title = t(`home_categories_${category.key}_title`) || category.key;
  const imageAlt = t(`home_categories_${category.key}_image_alt`) || `${title} class`;
  const intro = t(`home_categories_${category.key}_intro`) || '';
  const closeText = t('home_categories_cta_close') || 'Cerrar';

  return (
    <div className={isOpen ? 'fixed inset-0 z-50' : 'hidden'} aria-hidden={!isOpen}>
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/80 backdrop-blur-md transition-opacity duration-300"
        onClick={handleBackdropClick}
        aria-hidden="true"
      />

      {/* Modal Panel */}
      <div className="fixed inset-0 flex items-center justify-center p-4">
        <div
          ref={modalRef}
          role="dialog"
          aria-modal={isOpen ? 'true' : undefined}
          aria-labelledby="modal-title"
          aria-describedby="modal-description"
          className="bg-[#1a1a1a] rounded-2xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto animate-fade-in-up border-2 border-primary-accent/30"
        >
          {/* Close Button */}
          <button
            ref={firstFocusableRef}
            type="button"
            onClick={onClose}
            aria-label={closeText}
            className="absolute top-4 right-4 p-2 rounded-full bg-primary-accent text-white hover:bg-primary-dark transition-all z-10 shadow-lg hover:shadow-accent-glow"
          >
            <XMarkIcon className="w-6 h-6" />
          </button>

          {/* Header Image with Gradient Overlay */}
          <div className="relative h-48 md:h-64 overflow-hidden rounded-t-2xl">
            <img
              src={category.imageUrl}
              alt={imageAlt}
              className="w-full h-full object-cover"
              loading="lazy"
              decoding="async"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
            <h2 id="modal-title" className="absolute bottom-6 left-6 text-4xl md:text-5xl font-black text-white tracking-tight drop-shadow-lg">
              {title}
            </h2>
          </div>

          {/* Content */}
          <div className="p-6 md:p-8">
            {/* Intro Text (SEO) */}
            {intro && (
              <p id="modal-description" className="text-lg text-neutral/80 mb-8 leading-relaxed">
                {intro}
              </p>
            )}

            {/* Styles Grid */}
            <div>
              <h3 className="text-2xl font-bold text-white mb-6">Estilos disponibles:</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {category.styles.map(style => {
                  const styleName =
                    t(`home_categories_${category.key}_styles_${style.key}`) || style.key;
                  return (
                    <Link
                      key={style.key}
                      to={style.slug}
                      onClick={() => handleStyleClick(style.key, style.slug)}
                      className="flex items-center justify-between gap-2 py-3 px-6 rounded-full border-2 border-primary-accent/30 hover:border-primary-accent hover:bg-primary-accent/10 transition-all duration-200 group shadow-sm hover:shadow-accent-glow"
                    >
                      <span className="font-bold text-white group-hover:text-primary-accent transition-colors text-sm">
                        {styleName}
                      </span>
                      <ChevronRightIcon
                        className="w-5 h-5 text-primary-accent/50 group-hover:text-primary-accent group-hover:translate-x-1 transition-all"
                      />
                    </Link>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CategoryModal;
