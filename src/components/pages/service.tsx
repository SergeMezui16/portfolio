import {
  AppWindowIcon,
  LucideIcon,
  PaletteIcon,
  PointerIcon,
  ServerIcon,
  UsersIcon,
  WebcamIcon,
} from "lucide-react";
import { MotionDiv } from "../atom";
import { getScopedI18n } from "@/locales/server";


export const ServiceCard = async () => {
  const t = await getScopedI18n("service");

  const data = [
    {
      id: "1",
      title: t("services.design.title"),
      icon: WebcamIcon,
      content: t("services.design.description"),
    },
    {
      id: "2",
      title: t("services.website.title"),
      icon: AppWindowIcon,
      content: t("services.website.description"),
    },
    {
      id: "3",
      title: t("services.api.title"),
      icon: ServerIcon,
      content: t("services.api.description"),
    },
    {
      id: "4",
      title: t("services.site.title"),
      icon: PaletteIcon,
      content: t("services.site.description"),
    },
    {
      id: "5",
      title: t("services.showcase.title"),
      icon: PointerIcon,
      content: t("services.showcase.description"),
    },
    {
      id: "6",
      title: t("services.team.title"),
      icon: UsersIcon,
      content: t("services.team.description"),
    },
  ] satisfies { id: string; title: string; content: string; icon: LucideIcon }[];
  return (
    <div
      className='min-h-screen flex items-center bg-primary py-10'
      id='service'
    >
      <div className='container'>
        <MotionDiv className='my-10 text-center tablet:text-start'>
          <h1 className='text-6xl font-bold break-all'>
            {t("title")}<span className='text-primary-foreground'>.</span>
          </h1>
          <p className='my-1 italic text-primary-foreground'>
            {t("question")}
          </p>
          <div className='py-4'>
            {t("description")}
          </div>
        </MotionDiv>
        <div className=''>
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20 tablet:mb-0'>
            {data.map(({ title, content, id, icon: Icon }) => (
              <MotionDiv
                key={id}
                className='max-w-md flex gap-2 backdrop-blur-lg mt-4'
              >
                <div className='m-2'>
                  <Icon className='w-8 h-8 stroke-1 text-primary-foreground' />
                </div>
                <div className='flex flex-col gap-3'>
                  <h1 className='text-xl font-bold'>{title}</h1>
                  <p className='text-primary-foreground'>{content}</p>
                </div>
              </MotionDiv>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
