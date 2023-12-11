import type { Metadata } from 'next';
import './globals.css';
import { PropsWithChildren } from 'react';
import { cn } from '@/lib/cn';
import { euroStile, ubuntu } from '@/assets/fonts';
import { Analytics } from '@vercel/analytics/react';

export const metadata: Metadata = {
  title: 'Serge Mezui.',
  description: 'Serge Mezui, Web Developper.',
  authors: [{ name: 'Serge Mezui', url: 'https://sergemezui.dev' }],
  creator: 'Serge Mezui',
  keywords: [
    'serge',
    'mezui',
    'serge mezui',
    'gabonais',
    'gabon',
    'rwanda',
    'gabonese',
    'developper',
    'web developper',
    'sergemezui.com',
    'sergemezui.dev',
    'Serge Mezui',
  ],
};

export default function RootLayout({ children }: PropsWithChildren) {
  return (
    <html lang='en'>
      <body className={cn(ubuntu.variable, euroStile.variable)}>
        {children} <Analytics />
      </body>
    </html>
  );
}
