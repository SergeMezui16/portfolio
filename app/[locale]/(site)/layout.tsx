import { AppProvider } from "@/context";
import { ReactElement } from "react";

export default async function Layout({ params, children }: {
  params: Promise<{ locale: "fr" | "en" }>,
  children: ReactElement
}) {
  const { locale } = await params;
  return <AppProvider locale={locale}>{children}</AppProvider>;
}
