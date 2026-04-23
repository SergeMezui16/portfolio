import {
  AppWindowIcon,
  type LucideIcon,
  PaletteIcon,
  PointerIcon,
  ServerIcon,
  UsersIcon,
  WebcamIcon,
} from 'lucide-react';
import { useIntlayer } from 'react-intlayer';
import { MotionDiv, Point } from '../atom';

export const ServiceCard = () => {
  const t = useIntlayer('service');

  const data: { id: string; title: string; icon: LucideIcon; content: string }[] = [
    { id: '1', title: t.services.design.title.toString(), icon: WebcamIcon, content: t.services.design.description.toString() },
    { id: '2', title: t.services.website.title.toString(), icon: AppWindowIcon, content: t.services.website.description.toString() },
    { id: '3', title: t.services.api.title.toString(), icon: ServerIcon, content: t.services.api.description.toString() },
    { id: '4', title: t.services.site.title.toString(), icon: PaletteIcon, content: t.services.site.description.toString() },
    { id: '5', title: t.services.showcase.title.toString(), icon: PointerIcon, content: t.services.showcase.description.toString() },
    { id: '6', title: t.services.team.title.toString(), icon: UsersIcon, content: t.services.team.description.toString() },
  ];

  return (
    <div className="min-h-screen flex items-center py-4" id="service">
      <div className="container">
        <MotionDiv className="my-10 text-center tablet:text-start">
          <h1 className="text-6xl font-bold break-all">
            {t.title}<Point />
          </h1>
          <p className="my-1 italic text-primary">{t.question}</p>
          <div className="py-4">{t.description}</div>
        </MotionDiv>
        <div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20 tablet:mb-0">
            {data.map(({ title, content, id, icon: Icon }) => (
              <MotionDiv
                key={id}
                className="max-w-md flex gap-2 backdrop-blur-lg mt-4 border transition-all duration-400 bg-card p-4 rounded-md cursor-pointer hover:border-primary hover:border-dashed hover:shadow-lg"
              >
                <div className="m-2">
                  <Icon className="w-8 h-8 stroke-1 text-primary" />
                </div>
                <div className="flex flex-col gap-3">
                  <h1 className="text-xl font-bold">{title}</h1>
                  <p className="text-secondary-foreground">{content}</p>
                </div>
              </MotionDiv>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
