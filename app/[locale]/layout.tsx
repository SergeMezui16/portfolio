import type { Metadata } from "next";
import "./globals.css";
import { ReactElement } from "react";
import { cn } from "@/lib/cn";
import { euroStile, ubuntu } from "@/assets/fonts";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { SITE_URL } from "@/config/constants";
import { getScopedI18n } from "@/locales/server";
import Matomo from "@/lib/matomo";
import { ThemeProvider } from "next-themes";
import { AppProvider } from "@/context";

export async function generateMetadata(): Promise<Metadata> {
  const t = await getScopedI18n("manifest");

  return {
    metadataBase: new URL(SITE_URL),
    title: t("name"),
    description: t("description"),
    authors: [{ name: "Serge Mezui", url: SITE_URL }],
    creator: "Serge Mezui",
    alternates: {
      canonical: "/en",
      languages: {
        "en-US": "/en",
        "fr-FR": "/fr",
      },
    },
    keywords: [
      "mezui",
      "serge",
      "gabon",
      "rwanda",
      "gabonais",
      "gabonese",
      "developer",
      "serge mezui",
      "Serge Mezui",
      "web developer",
      "sergemezui.com",
      "sergemezui.dev",
    ],
  };
}

export default async function RootLayout({ params, children }: {
  params: Promise<{ locale: string }>,
  children: ReactElement
}) {
  const { locale } = await params;

  return (
    <html lang={locale}>
      <ThemeProvider
        attribute="class"
        defaultTheme="system"
        enableSystem
        disableTransitionOnChange
      >
        <AppProvider locale={locale}>
          <body className={cn(ubuntu.variable, euroStile.variable)}>
            {children} <Analytics />
            <Matomo />
            <SpeedInsights />
          </body>
        </AppProvider>
      </ThemeProvider>
    </html>
  );
}
