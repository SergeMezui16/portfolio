'use client';

import { useDeviceType } from '@/hooks';
import { cn } from '@/lib/cn';
import { AlignRightIcon, XIcon } from 'lucide-react';
import { useToggle } from 'usehooks-ts';
import { Menu } from './menu';

export const Navbar = () => {
  const type = useDeviceType();
  const [open, toggleOpen] = useToggle(false);

  if (type === 'mobile')
    return (
      <>
        <XIcon
          className={cn(
            'absolute top-0 right-0 m-6 cursor-pointer transition-all z-50 scale-0',
            open && 'scale-1 -rotate-90'
          )}
          onClick={toggleOpen}
        />
        <AlignRightIcon
          className={cn(
            'cursor-pointer absolute top-0 right-0 m-6 transition-all z-50 scale-0',
            !open && 'scale-1'
          )}
          onClick={toggleOpen}
        />
        {open && (
          <div className='tablet:hidden bg-background flex-col absolute right-0 top-0 p-10 h-screen w-screen flex items-center justify-center'>
            <Menu onClick={toggleOpen} />
          </div>
        )}
      </>
    );

  return <>{ <Menu />}</>;
};
