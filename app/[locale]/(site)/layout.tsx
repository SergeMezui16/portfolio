import { AppProvider } from "@/context";
import { ReactNode } from "react";
import { setStaticParamsLocale } from "next-international/server";

export default async function Layout({ params, children }: {
  params: Promise<{ locale: string }>,
  children: ReactNode
}) {
  const { locale } = await params;
  setStaticParamsLocale(locale);
  return <AppProvider locale={locale}>{children}</AppProvider>;
}
