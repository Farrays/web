import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Instagram, Youtube } from 'lucide-react';
import { useI18n } from '../hooks/useI18n';
import FIDCLogo from './FIDCLogo';

const SocialIcon: React.FC<{ href: string; ariaLabel: string; children: React.ReactNode }> = ({
  href,
  ariaLabel,
  children,
}) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="text-neutral/60 hover:text-primary-accent transition-colors duration-300 transform hover:scale-110"
    aria-label={ariaLabel}
  >
    {children}
  </a>
);

const FooterLink: React.FC<{ to?: string; href?: string; textKey: string }> = ({
  to,
  href,
  textKey,
}) => {
  const { t } = useI18n();
  if (to) {
    return (
      <li>
        <Link to={to} className="hover:text-primary-accent transition-colors duration-200">
          {t(textKey)}
        </Link>
      </li>
    );
  }
  return (
    <li>
      <a href={href || '#'} className="hover:text-primary-accent transition-colors duration-200">
        {t(textKey)}
      </a>
    </li>
  );
};

const Footer: React.FC = () => {
  const { t, locale } = useI18n();

  return (
    <footer className="bg-black border-t border-primary-dark/30 py-12">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-10 text-center md:text-left">
          <div className="flex flex-col items-center md:items-start space-y-4">
            <div className="flex items-center gap-3">
              <picture>
                <source type="image/webp" srcSet="/images/logo/img/logo-fidc_128.webp" />
                <img
                  src="/images/logo/img/logo-fidc_128.png"
                  alt="Farray's International Dance Center"
                  width="108"
                  height="108"
                  className="w-[108px] h-[108px] opacity-70"
                />
              </picture>
              <FIDCLogo className="opacity-70" />
            </div>
            <div className="flex space-x-4 mt-4">
              <SocialIcon
                href="https://www.facebook.com/farrayscenter/"
                ariaLabel={t('followOnFacebook')}
              >
                <Facebook className="w-6 h-6" />
              </SocialIcon>
              <SocialIcon
                href="https://www.instagram.com/farrays_centerbcn/"
                ariaLabel={t('followOnInstagram')}
              >
                <Instagram className="w-6 h-6" />
              </SocialIcon>
              <SocialIcon
                href="https://www.youtube.com/user/yunaisyfarray"
                ariaLabel={t('followOnYoutube')}
              >
                <Youtube className="w-6 h-6" />
              </SocialIcon>
            </div>
          </div>
          <div className="text-neutral/80 space-y-2 text-sm">
            <h4 className="font-bold text-neutral text-lg mb-3">{t('footerContact')}</h4>
            <p>
              {t('footerAddressValue')
                .split('\n')
                .map((line, index) => (
                  <React.Fragment key={index}>
                    {line}
                    <br />
                  </React.Fragment>
                ))}
            </p>
            <p>
              <strong>{t('footerPhone')}:</strong>{' '}
              <a
                href={`tel:${t('footerPhoneValue')}`}
                className="hover:text-primary-accent transition-colors"
              >
                {t('footerPhoneValue')}
              </a>
            </p>
            <p>
              <strong>{t('footerEmail')}:</strong>{' '}
              <a
                href={`mailto:${t('footerEmailValue')}`}
                className="hover:text-primary-accent transition-colors"
              >
                {t('footerEmailValue')}
              </a>
            </p>
            <div className="pt-2">
              <h5 className="font-bold text-neutral/90">{t('footerHoursTitle')}</h5>
              {t('footerHoursContent')
                .split('\n')
                .map((line, index) => (
                  <p key={index} className="text-neutral/70">
                    {line}
                  </p>
                ))}
            </div>
            <div className="pt-2">
              <h5 className="font-bold text-neutral/90">{t('footerPhoneHoursTitle')}</h5>
              <p className="text-neutral/70">{t('footerPhoneHoursContent')}</p>
            </div>
          </div>
          <div className="text-neutral/80">
            <h4 className="font-bold text-neutral text-lg mb-4">{t('footerSitemapTitle')}</h4>
            <div className="grid grid-cols-2 gap-x-4 gap-y-2">
              <ul className="space-y-2 text-sm">
                <FooterLink to={`/${locale}`} textKey="sitemapSchool" />
                <FooterLink to={`/${locale}/clases`} textKey="navClasses" />
                <FooterLink to={`/${locale}/clases/dancehall-barcelona`} textKey="navDancehall" />
                <FooterLink to={`/${locale}/clases/afrobeats-barcelona`} textKey="navAfrobeats" />
                <FooterLink textKey="sitemapSocial" />
              </ul>
              <ul className="space-y-2 text-sm">
                <FooterLink textKey="sitemapFitness" />
                <FooterLink textKey="sitemapSchedule" />
                <FooterLink to={`/${locale}#faq`} textKey="sitemapFAQ" />
                <FooterLink textKey="sitemapContact" />
                <FooterLink href="https://www.cid-unesco.org" textKey="sitemapCID" />
              </ul>
            </div>
          </div>
        </div>
        <div className="text-center text-neutral/50 text-xs mt-12 pt-8 border-t border-neutral/10">
          <div className="flex flex-wrap justify-center gap-x-4 sm:gap-x-6 gap-y-2 mb-4">
            <a href="#" className="hover:text-primary-accent transition-colors">
              {t('sitemapLegal')}
            </a>
            <a href="#" className="hover:text-primary-accent transition-colors">
              {t('sitemapTerms')}
            </a>
            <a href="#" className="hover:text-primary-accent transition-colors">
              {t('sitemapPrivacy')}
            </a>
            <a href="#" className="hover:text-primary-accent transition-colors">
              {t('sitemapCookies')}
            </a>
          </div>
          {t('footerCopyright')}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
