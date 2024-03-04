import { PropsWithChildren } from 'react';
import { ThemeProvider } from './theme-provider';

export const AppProvider = ({ children }: PropsWithChildren) => {
  return (
    <ThemeProvider
      attribute='class'
      defaultTheme='system'
      enableSystem
      disableTransitionOnChange
    >
      {children}
    </ThemeProvider>
  );
};
