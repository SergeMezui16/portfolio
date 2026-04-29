import { useLocation } from '@tanstack/react-router';
import { getHTMLTextDir, getLocaleName, getPathWithoutLocale, getPrefix, Locales } from 'intlayer';
import type { FC } from 'react';
import { useLocale } from 'react-intlayer';

import { LocalizedLink, type To } from './localized-link';

export const LocaleSwitcher: FC = () => {
  const { pathname } = useLocation();

  const { availableLocales, locale, setLocale } = useLocale();

  const pathWithoutLocale = getPathWithoutLocale(pathname);

  return (
    <ol>
      {availableLocales.map((localeEl) => (
        <li key={localeEl}>
          <LocalizedLink
            aria-current={localeEl === locale ? 'page' : undefined}
            onClick={() => setLocale(localeEl)}
            params={{ locale: getPrefix(localeEl).localePrefix }}
            to={pathWithoutLocale as To}
          >
            <span>
              {/* Locale - e.g. FR */}
              {localeEl}
            </span>
            <span>
              {/* Language in its own Locale - e.g. Français */}
              {getLocaleName(localeEl, locale)}
            </span>
            <span dir={getHTMLTextDir(localeEl)} lang={localeEl}>
              {/* Language in current Locale - e.g. Francés with current locale set to Locales.SPANISH */}
              {getLocaleName(localeEl)}
            </span>
            <span dir="ltr" lang={Locales.ENGLISH}>
              {/* Language in English - e.g. French */}
              {getLocaleName(localeEl, Locales.ENGLISH)}
            </span>
          </LocalizedLink>
        </li>
      ))}
    </ol>
  );
};
