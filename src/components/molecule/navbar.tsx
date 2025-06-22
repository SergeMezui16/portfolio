"use client";

import { useDeviceType } from "@/hooks";
import { cn } from "@/lib/cn";
import { AlignRightIcon, XIcon } from "lucide-react";
import { useToggle } from "usehooks-ts";
import { Menu } from "./menu";
import { useChangeLocale, useCurrentLocale, useI18n } from "@/locales/client";
import { FlagEn, FlagFr } from "@/components/flags";
import { MotionDiv, SelectLocale } from "@/components/atom";


export const Navbar = () => {
  const type = useDeviceType();
  const [open, toggleOpen] = useToggle(false);

  if (type === "mobile") {
    return (
      <>
        <div className="absolute top-0 right-10 m-6 z-50">
          <ToggleLocale />
        </div>
        <XIcon
          className={cn(
            "absolute top-0 right-0 m-6 cursor-pointer transition-all z-50 scale-0",
            open && "scale-1 -rotate-90",
          )}
          onClick={toggleOpen}
        />
        <AlignRightIcon
          className={cn(
            "cursor-pointer absolute top-0 right-0 m-6 transition-all z-50 scale-0",
            !open && "scale-1",
          )}
          onClick={toggleOpen}
        />
        {open && (
          <div
            className="tablet:hidden bg-background flex-col absolute right-0 top-0 p-10 h-screen w-screen flex items-center justify-center">
            <Menu onClick={toggleOpen} />
            <MotionDiv className="mt-10">
              <SelectLocale />
            </MotionDiv>
          </div>
        )}
      </>
    );
  }

  return <MotionDiv className="flex gap-8">
    <Menu />
    <SelectLocale />
  </MotionDiv>;
};

const ToggleLocale = () => {
  const t = useI18n();
  const changeLocale = useChangeLocale();
  const locale = useCurrentLocale();
  const Flag = locale === "fr" ? FlagFr : FlagEn;

  return (
    <div title={t("switch_lang")}
      className="flex justify-start items-center text-xl pb-2 font-thin cursor-pointer "
      onClick={() => {
        changeLocale(locale === "fr" ? "fr" : "en");
      }}>
      <Flag className="w-6" />
    </div>
  );
};
