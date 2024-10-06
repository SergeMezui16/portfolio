import { PropsWithChildren } from "react";
import { ThemeProvider } from "./theme-provider";
import { I18nProviderClient } from "@/locales/client";

export const AppProvider = ({children, locale}: PropsWithChildren<{ locale: string }>) => {
  return (
    <I18nProviderClient locale={locale}>
      <ThemeProvider
        attribute="class"
        defaultTheme="system"
        enableSystem
        disableTransitionOnChange
      >
        {children}
      </ThemeProvider>
    </I18nProviderClient>
  );
};
