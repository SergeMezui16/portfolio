'use client';

import { useDeviceType } from '@/hooks';
import { cn } from '@/lib/cn';
import { AlignRightIcon, XIcon } from 'lucide-react';
import Link from 'next/link';
import { useToggle } from 'usehooks-ts';
import { MotionSpan } from '../atom';

const links = [
  { label: 'Home', href: '/#home' },
  { label: 'Service', href: '/#service' },
  { label: 'Skill', href: '/#skill' },
  { label: 'Project', href: '/#project' },
  { label: 'Contact', href: '/#contact' },
] satisfies { label: string; href: string }[];

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

  return <>{type && <Menu />}</>;
};

const Menu = ({ onClick }: { onClick?: () => void }) => {
  return (
    <ul className='flex flex-col tablet:flex-row gap-8 text-4xl tablet:text-2xl items-center'>
      {links.map((link) => (
        <li
          onClick={onClick}
          className='group cursor-pointer'
          key={link.href}
        >
          <MotionSpan className='group cursor-pointer flex flex-col'>
            <Link className='font-euro-stile font-thin' href={link.href}>
              {link.label}
            </Link>
            <span className='hidden border-white bg-primary tablet:inline w-0 h-2 opacity-0 border border-primary group-hover:w-3/4 group-hover:opacity-100 transition-all'></span>
          </MotionSpan>
        </li>
      ))}
    </ul>
  );
};
