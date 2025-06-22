"use client";

import { useChangeLocale, useCurrentLocale, useI18n } from "@/locales/client";
import { FlagEn, FlagFr } from "@/components/flags";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const data = [
  { value: "fr" },
  { value: "en" },
] as const;

export const SelectLocale = () => {
  const t = useI18n();
  const changeLocale = useChangeLocale();
  const locale = useCurrentLocale();
  const Flag = locale === "fr" ? FlagFr : FlagEn;

  return (
    <Select onValueChange={(value) => changeLocale(value === "fr" ? "fr" : "en")} defaultValue={locale}>
      <SelectTrigger className="w-[150px] flex items-center justify-between gap-2">
        <Flag className="w-6" />
        <SelectValue placeholder="Select a locale" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          {data.map((item) => (
            <SelectItem key={item.value} value={item.value}>{t(item.value)}</SelectItem>
          ))}
        </SelectGroup>
      </SelectContent>
    </Select>
  );
};
