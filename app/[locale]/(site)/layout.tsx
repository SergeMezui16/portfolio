import { AppProvider } from '@/context';
import { ReactNode } from 'react';
import { setStaticParamsLocale } from 'next-international/server';
import { Footer, Header, Social } from '@/components/molecule';
import { GridPattern } from '@/components/molecule/grid-pattern-background';
import { cn } from '@/lib/cn';

export default async function Layout({ params, children }: {
  params: Promise<{ locale: string }>,
  children: ReactNode
}) {
  const { locale } = await params;
  setStaticParamsLocale(locale);
  return <AppProvider locale={locale}>
    <div className="relative min-h-screen bg-background">
      <GridPattern
        width={40}
        height={40}
        x={-1}
        y={-1}
        squares={[
          [4, 4],
          [5, 1],
          [8, 2],
          [5, 3],
          [5, 5],
        ]}
        className={cn(
          "pointer-events-none absolute inset-0 z-10 h-screen top-20",
          "[mask-image:radial-gradient(700px_circle_at_center,white,transparent)]",
          "opacity-70 skew-y-12"
        )}
      />

      <div className="relative z-10 overflow-hidden">
        <Header />
        <main>{children}</main>
        <Footer />
      </div>
    </div>
    <Social />
  </AppProvider>;
}
