import { HeadContent, Scripts, createRootRoute } from '@tanstack/react-router';
import appCss from '../styles.css?url';

// Inline script that runs before React hydration to set the correct theme class
// on <html> without a flash of wrong theme.
const themeScript = `
(function(){
  try {
    var stored = localStorage.getItem('theme');
    var prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    var theme = stored === 'dark' || stored === 'light' ? stored : (prefersDark ? 'dark' : 'light');
    document.documentElement.classList.toggle('dark', theme === 'dark');
  } catch(e){}
})();
`.trim();

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

  shellComponent: RootDocument,
});

function RootDocument({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <HeadContent />
        {/* biome-ignore lint/security/noDangerouslySetInnerHtml: theme init script must run before paint */}
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}
