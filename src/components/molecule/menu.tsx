import Link from 'next/link';
import { MotionSpan } from '../atom';

const links = [
  { label: 'Home', href: '/#home' },
  { label: 'Service', href: '/#service' },
  { label: 'Skill', href: '/#skill' },
  { label: 'Project', href: '/#project' },
  { label: 'Contact', href: '/#contact' },
] satisfies { label: string; href: string }[];

export const Menu = ({ onClick }: { onClick?: () => void }) => {
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
