import { cn } from "@/lib/cn";
import {
  CogIcon,
  Layers3Icon,
  LayoutIcon,
  LucideIcon,
  ServerIcon,
} from "lucide-react";
import { MotionDiv } from "../atom";
import { getScopedI18n } from "@/locales/server";

export const SkillCard = async () => {
  const t = await getScopedI18n("skill");

  const data = [
    {
      title: t("skills.design.title"),
      description: t("skills.design.description"),
      icon: Layers3Icon,
      technos: ["Figma", "Adobe XD"],
    },
    {
      title: t("skills.backend.title"),
      description: t("skills.backend.description"),
      icon: ServerIcon,
      technos: ["Symfony", "API Platform", "Adonis JS", "Node JS"],
    },
    {
      title: t("skills.frontend.title"),
      description: t("skills.frontend.description"),
      icon: LayoutIcon,
      technos: ["Next JS", "React JS", "Vanilla Javascript", "Tailwind", "TypeScript"],
    },
    {
      title: t("skills.others.title"),
      description: t("skills.others.description"),
      icon: CogIcon,
      technos: ["GitHub & Git", "Linux", "Apache Server", "Java"],
    },
  ] satisfies {
    title: string;
    description: string;
    icon: LucideIcon;
    technos: string[];
  }[];

  return (
    <div className="container min-h-screen flex items-center py-16" id="skill">
      <div className="">
        <MotionDiv className="text-center tablet:text-start p-5">
          <h1 className="text-6xl font-bold break-all">
            {t("title")}<span className="text-primary">.</span>
          </h1>
          <p className="my-1 italic text-primary">{t("question")}</p>
          <div className="py-4">
            {t("description")}
          </div>
        </MotionDiv>
        <MotionDiv className="flex flex-col tablet:flex-row tablet:mt-5 border rounded my-4">
          {data.map(({ icon: Icon, technos, title, description }, i) => (
            <MotionDiv
              key={title}
              className={cn(
                "flex flex-col w-full items-center gap-2 text-center p-2",
                i !== 0 && "border-t tablet:border-t-0 tablet:border-l"
              )}
            >
              <div className="bg-thirdly rounded-full w-16 h-16 flex items-center justify-center">
                <Icon className="stroke-1 w-10 h-10"/>
              </div>
              <h2 className="text-2xl font-bold">
                {title}
                <span className="text-primary">.</span>
              </h2>
              <div className="p-5">
                <p>{description}</p>
                <h3 className="text-xl font-bold my-4 text-primary">{t("techno")}</h3>
                <p className="flex flex-col gap-1">
                  {technos.map((t) => (
                    <span key={t}>{t}</span>
                  ))}
                </p>
              </div>
            </MotionDiv>
          ))}
        </MotionDiv>
      </div>
    </div>
  );
};
