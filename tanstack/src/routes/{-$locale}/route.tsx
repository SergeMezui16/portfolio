import { createFileRoute, Outlet } from '@tanstack/react-router';
import { IntlayerProvider, useLocale } from 'react-intlayer';

export const Route = createFileRoute('/{-$locale}')({
  component: LayoutComponent,
});

function LayoutComponent() {
  const { defaultLocale } = useLocale();
  const { locale } = Route.useParams();

  return (
    <IntlayerProvider locale={locale ?? defaultLocale}>
      header
      <Outlet />
    </IntlayerProvider>
  );
}
