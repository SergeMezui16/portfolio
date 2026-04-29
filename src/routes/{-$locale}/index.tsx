import { createFileRoute } from '@tanstack/react-router';
import { getIntlayer } from 'intlayer';
import { HomeCard } from '@/components/pages/home';
import { ServiceCard } from '@/components/pages/service';
import { SkillCard } from '@/components/pages/skill';
import { ProjectCard } from '@/components/pages/project';
import { EnterpriseCard } from '@/components/pages/enterprise';
import { ContactCard } from '@/components/pages/contact';

export const Route = createFileRoute('/{-$locale}/')({
  component: RouteComponent,
  head: ({ params }) => {
    const locale = params.locale ?? 'en';
    const meta = getIntlayer('app', locale);
    return {
      meta: [
        { title: String(meta.meta.title) },
        { name: 'description', content: String(meta.meta.description) },
      ],
    };
  },
});

function RouteComponent() {
  return (
    <>
      <HomeCard />
      <ServiceCard />
      <SkillCard />
      <ProjectCard />
      <EnterpriseCard />
      <ContactCard />
    </>
  );
}
