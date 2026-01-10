import { createFileRoute } from '@tanstack/react-router';
import { getIntlayer } from 'intlayer';
import { useIntlayer } from 'react-intlayer';

import { LocaleSwitcher } from '@/components/locale-switcher';
import { LocalizedLink } from '@/components/localized-link';
import { useLocalizedNavigate } from '@/hooks/useLocalizedNavigate';

export const Route = createFileRoute('/{-$locale}/')({
  component: RouteComponent,
  head: ({ params }) => {
    const { locale } = params;
    const metaContent = getIntlayer('app', locale);

    return {
      meta: [
        { title: metaContent.meta.title },
        { content: metaContent.meta.description, name: 'description' },
      ],
    };
  },
});

function RouteComponent() {
  const content = useIntlayer('app');
  const navigate = useLocalizedNavigate();

  return (
    <div>
      <div>
        {content.meta.title}
        <LocaleSwitcher />
        <div>
          <LocalizedLink to="/">{content.links.home}</LocalizedLink>
          {/* <LocalizedLink to="/about">{content.links.about}</LocalizedLink> */}
        </div>
        <div>
          <button onClick={() => navigate({ to: '/' })}>{content.links.home}</button>
          {/* <button onClick={() => navigate({ to: '/about' })}>{content.links.about}</button> */}
        </div>
      </div>
    </div>
  );
}
