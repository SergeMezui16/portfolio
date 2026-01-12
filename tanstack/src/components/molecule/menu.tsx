import { MotionSpan } from '../atom';
import { useMemo } from 'react';
import { IntlayerNode, useIntlayer } from 'react-intlayer';
import { Link } from '@tanstack/react-router';

export const Menu = ({ onClick }: { onClick?: () => void }) => {
  const content = useIntlayer('app');

  const links = useMemo(
    () =>
      [
        { label: content.links.home, href: '/#home' },
        { label: content.links.blog, href: '/blog' },
        // { label: t("nav.service"), href: "/#service" },
        // { label: t("nav.skill"), href: "/#skill" },
        // { label: t("nav.project"), href: "/#project" },
        { label: content.links.cv, href: '/cv' },
        { label: content.links.contact, href: '/#contact' },
      ] satisfies { label: IntlayerNode; href: string }[],
    [content]
  );

  return (
    <ul className="flex tablet:flex-row gap-8 text-4xl tablet:text-2xl items-center">
      {links.map((link) => (
        <li onClick={onClick} className="group cursor-pointer" key={link.href}>
          <MotionSpan className="group cursor-pointer flex flex-col">
            <Link className="font-euro-stile font-thin text-2xl" to={link.href}>
              {link.label}
            </Link>
            <span className="hidden border-white bg-primary tablet:inline w-0 h-2 opacity-0 border group-hover:w-3/4 group-hover:opacity-100 transition-all"></span>
          </MotionSpan>
        </li>
      ))}
    </ul>
  );
};
