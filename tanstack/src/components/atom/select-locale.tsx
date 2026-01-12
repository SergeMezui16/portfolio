import { FlagEn, FlagFr } from '@/components/flags';
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { useLocale } from 'react-intlayer';
import { getLocaleName, getPathWithoutLocale, getPrefix } from 'intlayer';
import { useLocation } from '@tanstack/react-router';
import { LocalizedTo, useLocalizedNavigate } from '@/hooks/use-localized-navigate.tsx';

export const SelectLocale = () => {
  const { pathname } = useLocation();
  const navigate = useLocalizedNavigate();
  const { availableLocales, locale, setLocale } = useLocale();
  const pathWithoutLocale = getPathWithoutLocale(pathname);

  return (
    <Select
      defaultValue={locale}
      onValueChange={(value) => {
        setLocale(value);
        navigate({
          to: pathWithoutLocale as LocalizedTo,
          locale: getPrefix(value).localePrefix,
        });
      }}
    >
      <SelectTrigger className="w-37.5 flex items-center justify-between gap-2">
        <SelectValue placeholder="Select a locale" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          {availableLocales.map((localeEl) => {
            const Flag = localeEl === 'fr' ? FlagFr : FlagEn;
            return (
              <SelectItem key={localeEl} value={localeEl}>
                <Flag className="w-6" /> {getLocaleName(localeEl, locale)}
              </SelectItem>
            );
          })}
        </SelectGroup>
      </SelectContent>
    </Select>
  );
};
