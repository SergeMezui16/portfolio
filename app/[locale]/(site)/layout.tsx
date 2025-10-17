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
    <div className="min-h-screen">
      <div className=""><Header /></div>
      <div className="relative overflow-hidden bg-background">
        {children}
      </div>
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
          "[mask-image:radial-gradient(700px_circle_at_center,white,transparent)]",
          "inset-x-0 inset-y-[-30%] h-[200%] skew-y-12"
        )}
      />
      <Footer />
    </div>
    <Social />
  </AppProvider>;
}
