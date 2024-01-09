import type { Metadata } from 'next';
import './globals.css';
import { PropsWithChildren } from 'react';
import { cn } from '@/lib/cn';
import { euroStile, ubuntu } from '@/assets/fonts';
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/next';
import { SITE_URL } from '@/config/constants';

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: 'Serge Mezui, Web Developper.',
  description:
    "I'm a young student with a passion for computer science, more specifically web development. I develop solutions that solve problems for people all over the world and simplify their everyday life experience through the internet. I like movies, video games and running.",
  authors: [{ name: 'Serge Mezui', url: SITE_URL }],
  creator: 'Serge Mezui',
  keywords: [
    'mezui',
    'serge',
    'gabon',
    'rwanda',
    'gabonais',
    'gabonese',
    'developper',
    'serge mezui',
    'Serge Mezui',
    'web developper',
    'sergemezui.com',
    'sergemezui.dev',
  ],
};

export default function RootLayout({ children }: PropsWithChildren) {
  return (
    <html lang='en'>
      <body className={cn(ubuntu.variable, euroStile.variable)}>
        {children} <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
