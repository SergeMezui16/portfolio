import { AppProvider } from '@/context';
import { ReactNode } from 'react';
import { setStaticParamsLocale } from 'next-international/server';
import { Header, Social } from '@/components/molecule';

export default async function Layout({ params, children }: {
  params: Promise<{ locale: string }>,
  children: ReactNode
}) {
  const { locale } = await params;
  setStaticParamsLocale(locale);
  return <AppProvider locale={locale}>
    <div className="min-h-screen">
      <Header />{children}
    </div>
    <Social />
  </AppProvider>;
}
