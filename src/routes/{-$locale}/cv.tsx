import { createFileRoute, redirect } from '@tanstack/react-router';
import { getResumeUrl } from '@/config/constants';

export const Route = createFileRoute('/{-$locale}/cv')({
  beforeLoad: ({ params }) => {
    const locale = params.locale ?? 'en';
    throw redirect({ href: getResumeUrl(locale), reloadDocument: true });
  },
  component: () => null,
});
