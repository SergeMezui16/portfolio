import { useDeviceType } from '@/hooks/use-device-type.ts';
import { cn } from '@/lib/utils';
import { AlignRightIcon, CardSimIcon, XIcon } from 'lucide-react';
import { useToggle } from 'usehooks-ts';
import { Menu } from './menu';
import { FlagEn, FlagFr } from '@/components/flags';
import { MotionDiv, SelectLocale } from '@/components/atom';
import { useIntlayer, useLocale } from 'react-intlayer';
import { ModeToggle } from '@/components/mode-toggle.tsx';

export const Navbar = () => {
  const type = useDeviceType();
  const [open, toggleOpen] = useToggle(false);

  if (type === 'mobile') {
    return (
      <>
        <div className={cn("absolute top-0 right-10 m-6 z-50", open && "hidden")}>
          <ToggleLocale />
        </div>
        <AlignRightIcon
          className={cn(
            'cursor-pointer absolute top-0 right-0 m-6 transition-all z-50',
            open && 'scale-0 -rotate-90'
          )}
          onClick={toggleOpen}
        />
        <XIcon
          className={cn(
            'absolute top-0 right-0 m-6 cursor-pointer transition-all z-50 scale-0',
            open && 'scale-100 -rotate-90'
          )}
          onClick={toggleOpen}
        />
        {open && (
          <div className="tablet:hidden bg-background flex-col absolute right-0 top-0 p-10 h-screen w-screen flex items-center justify-center">
            <Menu onClick={toggleOpen} />
            <MotionDiv className="mt-10 flex gap-2">
              <SelectLocale />
              <ModeToggle />
            </MotionDiv>
          </div>
        )}
      </>
    );
  }

  return (
    <MotionDiv className="flex gap-8">
      <Menu />
      <div className="flex gap-2">
        <SelectLocale />
        <ModeToggle />
      </div>
    </MotionDiv>
  );
};

const ToggleLocale = () => {
  const { locale, setLocale } = useLocale();
  const content = useIntlayer('app');
  const Flag = locale === 'fr' ? FlagFr : FlagEn;

  return (
    <div
      title={content.languages.switch_lang.toString()}
      className="flex justify-start items-center text-xl pb-2 font-thin cursor-pointer "
      onClick={() => {
        setLocale(locale === 'fr' ? 'en' : 'fr');
      }}
    >
      <Flag className="w-6" />
    </div>
  );
};
