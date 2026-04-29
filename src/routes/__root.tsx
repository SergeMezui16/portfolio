import { HeadContent, Scripts, createRootRoute, Outlet } from '@tanstack/react-router';
import appCss from '../styles.css?url';
import { ThemeProvider } from '@/components/theme-provider.tsx';



export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { title: 'Serge Mezui, Web Developer.' },
      { name: 'description', content: 'Full Stack Developer passionate about building solutions through the web.' },
      { name: 'theme-color', content: '#7c3aed' },
    ],
    links: [
      { rel: 'stylesheet', href: appCss },
      { rel: 'icon', href: '/favicon.ico' },
    ],
  }),
  component: RootComponent,
})

function RootComponent() {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <HeadContent />
      </head>
      <body>
      <ThemeProvider defaultTheme="system" storageKey="theme">
        <Outlet />
      </ThemeProvider>
        <Scripts />
      </body>
    </html>
  );
}
