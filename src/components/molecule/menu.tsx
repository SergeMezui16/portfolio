import Link from "next/link";
import { MotionSpan } from "../atom";
import { useI18n } from "@/locales/client";
import { useMemo } from "react";

export const Menu = ({onClick}: { onClick?: () => void }) => {
  const t = useI18n();

  const links = useMemo(() => [
    {label: t("nav.home"), href: "/#home"},
    {label: t("nav.service"), href: "/#service"},
    {label: t("nav.skill"), href: "/#skill"},
    {label: t("nav.project"), href: "/#project"},
    {label: t("nav.contact"), href: "/#contact"}
  ] satisfies { label: string; href: string }[], []);

  return (
    <ul className="flex flex-col tablet:flex-row gap-8 text-4xl tablet:text-2xl items-center">
      {links.map((link) => (
        <li onClick={onClick} className="group cursor-pointer" key={link.href}>
          <MotionSpan className="group cursor-pointer flex flex-col">
            <Link
              className="font-euro-stile font-thin text-2xl"
              href={link.href}
            >
              {link.label}
            </Link>
            <span
              className="hidden border-white bg-primary tablet:inline w-0 h-2 opacity-0 border border-primary group-hover:w-3/4 group-hover:opacity-100 transition-all"></span>
          </MotionSpan>
        </li>
      ))}
    </ul>
  );
};
