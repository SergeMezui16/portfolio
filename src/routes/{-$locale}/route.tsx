import { createFileRoute, Outlet } from '@tanstack/react-router';
import { IntlayerProvider, useLocale } from 'react-intlayer';
import { Footer, Header, Social } from '@/components/molecule';
import { GridPattern } from '@/components/molecule/grid-pattern-background';
import { cn } from '@/lib/utils';

export const Route = createFileRoute('/{-$locale}')({
  component: LayoutComponent,
});

function LayoutComponent() {
  const { defaultLocale } = useLocale();
  const { locale } = Route.useParams();

  return (
    <IntlayerProvider locale={locale ?? defaultLocale}>
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
            'pointer-events-none absolute inset-0 z-10 h-screen top-20',
            '[mask-image:radial-gradient(700px_circle_at_center,white,transparent)]',
            'opacity-70 skew-y-12'
          )}
        />
        <div className="relative z-10 overflow-hidden mx-auto">
          <Header />
          <main>
            <Outlet />
          </main>
          <Footer />
        </div>
      </div>
      <Social />
    </IntlayerProvider>
  );
}
