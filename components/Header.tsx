import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useI18n } from '../hooks/useI18n';
import type { Locale } from '../types';
import FIDCLogo from './FIDCLogo';

const MenuIcon: React.FC<React.SVGProps<SVGSVGElement>> = props => (
  <svg
    {...props}
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
  >
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
  </svg>
);

const CloseIcon: React.FC<React.SVGProps<SVGSVGElement>> = props => (
  <svg
    {...props}
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
  >
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
  </svg>
);

const ChevronDownIcon: React.FC<React.SVGProps<SVGSVGElement>> = props => (
  <svg
    {...props}
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
  >
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
  </svg>
);

const GlobeIcon: React.FC<React.SVGProps<SVGSVGElement>> = props => (
  <svg
    {...props}
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"
    />
  </svg>
);

const Header: React.FC = () => {
  const { t, locale } = useI18n();
  const location = useLocation();
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isLangDropdownOpen, setIsLangDropdownOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close language dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      if (!target.closest('.language-dropdown')) {
        setIsLangDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Get current path without locale prefix, preserving query and hash
  const getCurrentPath = (): string => {
    const pathParts = location.pathname.split('/').filter(Boolean);
    // Remove locale from path if present
    if (pathParts.length > 0 && pathParts[0] && ['es', 'en', 'ca', 'fr'].includes(pathParts[0])) {
      pathParts.shift();
    }
    const path = pathParts.length > 0 ? `/${pathParts.join('/')}` : '/';
    // Preserve query string and hash
    const query = location.search;
    const hash = location.hash;
    return path + query + hash;
  };

  const handleLanguageChange = (lang: Locale) => {
    const currentPath = getCurrentPath();
    const newPath = `/${lang}${currentPath === '/' ? '' : currentPath}`;
    navigate(newPath);
    setIsLangDropdownOpen(false);
  };

  const languageNames: Record<Locale, string> = {
    es: 'Español',
    ca: 'Català',
    en: 'English',
    fr: 'Français',
  };

  const handleEnrollClick = () => {
    if (location.pathname !== `/${locale}`) {
      setIsMenuOpen(false);
      // Let the Link navigate to home, then scroll will happen via the anchor
    }
  };

  const navLinks: { path: string; textKey: string }[] = [
    { path: `/${locale}`, textKey: 'navHome' },
    { path: `/${locale}/clases/baile-barcelona`, textKey: 'navClasses' },
    { path: `/${locale}/clases/dancehall-barcelona`, textKey: 'navDancehall' },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-black/80 backdrop-blur-md shadow-lg shadow-primary-accent/10'
            : 'bg-transparent'
        }`}
      >
        <div className="container mx-auto px-6 py-2 flex justify-between items-center">
          <Link to={`/${locale}`} aria-label="FIDC Home" className="absolute left-1/2 -translate-x-1/2 py-2">
            <picture>
              <source type="image/webp" srcSet="/images/logo/img/logo-fidc_128.webp" />
              <img
                src="/images/logo/img/logo-fidc_128.png"
                alt="Farray's International Dance Center"
                width="128"
                height="128"
                className="w-24 h-24 md:w-32 md:h-32"
              />
            </picture>
          </Link>

          <nav className="hidden md:block absolute left-8">
            <ul className="flex items-center space-x-8 text-sm font-medium">
              {navLinks.map(link => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className={`transition-colors duration-300 ${
                      location.pathname === link.path
                        ? 'text-white'
                        : 'text-neutral/60 hover:text-white'
                    }`}
                    aria-current={location.pathname === link.path ? 'page' : undefined}
                  >
                    {t(link.textKey)}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className="hidden md:flex items-center space-x-6 ml-auto">
            {/* Language Dropdown */}
            <div className="relative language-dropdown">
              <button
                onClick={() => setIsLangDropdownOpen(!isLangDropdownOpen)}
                className="flex items-center space-x-2 bg-black/30 hover:bg-black/50 backdrop-blur-sm px-4 py-2 rounded-full transition-all duration-300 border border-white/10 hover:border-primary-accent/50"
                aria-label="Select language"
                aria-expanded={isLangDropdownOpen}
              >
                <GlobeIcon className="w-4 h-4 text-primary-accent" />
                <span className="text-sm font-medium text-white">{locale.toUpperCase()}</span>
                <ChevronDownIcon
                  className={`w-4 h-4 text-white/70 transition-transform duration-300 ${isLangDropdownOpen ? 'rotate-180' : ''}`}
                />
              </button>

              {/* Dropdown Menu */}
              {isLangDropdownOpen && (
                <div className="absolute top-full mt-2 right-0 bg-black/95 backdrop-blur-xl border border-white/20 rounded-2xl shadow-2xl shadow-primary-accent/10 overflow-hidden min-w-[160px] animate-fadeIn">
                  {(['es', 'ca', 'en', 'fr'] as Locale[]).map(lang => (
                    <button
                      key={lang}
                      onClick={() => handleLanguageChange(lang)}
                      className={`w-full text-left px-4 py-3 text-sm font-medium transition-all duration-200 flex items-center justify-between ${
                        locale === lang
                          ? 'bg-primary-accent text-white'
                          : 'text-neutral/90 hover:bg-white/10 hover:text-white'
                      }`}
                      aria-label={`Switch to ${languageNames[lang]}`}
                    >
                      <span>{languageNames[lang]}</span>
                      <span className="text-xs opacity-70">{lang.toUpperCase()}</span>
                    </button>
                  ))}
                </div>
              )}
            </div>

            <Link
              to={`/${locale}#enroll`}
              onClick={handleEnrollClick}
              className="bg-primary-accent text-white font-bold py-2 px-6 rounded-full transition-all duration-300 hover:bg-white hover:text-primary-accent shadow-md hover:shadow-accent-glow animate-pulse-strong"
            >
              {t('enrollNow')}
            </Link>
          </div>
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="z-50 relative"
              aria-controls="mobile-menu"
              aria-expanded={isMenuOpen}
              aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
            >
              {isMenuOpen ? <CloseIcon className="w-8 h-8" /> : <MenuIcon className="w-8 h-8" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <div
        id="mobile-menu"
        className={`fixed inset-0 bg-black/95 backdrop-blur-xl z-40 transition-transform duration-500 ease-in-out transform ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'} md:hidden`}
        role="dialog"
        aria-modal="true"
        aria-label="Main navigation menu"
      >
        <div className="flex flex-col items-center justify-center h-full space-y-12">
          <nav className="flex flex-col items-center space-y-6">
            {navLinks.map(link => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setIsMenuOpen(false)}
                className={`text-2xl font-bold transition-colors duration-300 ${
                  location.pathname === link.path
                    ? 'text-primary-accent'
                    : 'text-neutral/80 hover:text-white'
                }`}
                aria-current={location.pathname === link.path ? 'page' : undefined}
              >
                {t(link.textKey)}
              </Link>
            ))}
          </nav>
          {/* Mobile Language Selection */}
          <div className="w-full max-w-xs">
            <div className="bg-black/30 backdrop-blur-sm border border-white/20 rounded-2xl overflow-hidden">
              <div className="flex items-center justify-center space-x-2 px-4 py-3 bg-primary-accent/20 border-b border-white/10">
                <GlobeIcon className="w-5 h-5 text-primary-accent" />
                <span className="text-sm font-bold text-white">Select Language</span>
              </div>
              <div className="p-2 space-y-1">
                {(['es', 'ca', 'en', 'fr'] as Locale[]).map(lang => (
                  <button
                    key={lang}
                    onClick={() => {
                      handleLanguageChange(lang);
                      setIsMenuOpen(false);
                    }}
                    className={`w-full text-left px-4 py-3 rounded-xl text-base font-bold transition-all duration-300 flex items-center justify-between ${
                      locale === lang
                        ? 'bg-primary-accent text-white shadow-lg'
                        : 'text-neutral/80 hover:bg-white/10 hover:text-white'
                    }`}
                    aria-label={`Switch to ${languageNames[lang]}`}
                  >
                    <span>{languageNames[lang]}</span>
                    <span className="text-sm opacity-70">{lang.toUpperCase()}</span>
                  </button>
                ))}
              </div>
            </div>
          </div>
          <Link
            to={`/${locale}#enroll`}
            onClick={() => {
              handleEnrollClick();
              setIsMenuOpen(false);
            }}
            className="bg-primary-accent text-white text-xl font-bold py-4 px-10 rounded-full transition-all duration-300 hover:bg-white hover:text-primary-accent shadow-md hover:shadow-accent-glow animate-pulse-strong"
          >
            {t('enrollNow')}
          </Link>
        </div>
      </div>
    </>
  );
};

export default Header;
