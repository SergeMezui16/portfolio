import {
  ContactIcon,
  FlagIcon,
  MailIcon,
  MapPinIcon,
  PhoneIcon,
} from "lucide-react";
import { MotionDiv } from "../atom";
import { getCurrentLocale, getScopedI18n } from "@/locales/server";
import { getResumeUrl } from "@/lib/utils";
import { FlagGa } from "@/components/flags";

export const ContactCard = async () => {
  const t = await getScopedI18n("contact");
  const locale = getCurrentLocale();

  return (
    <div
      className="min-h-screen flex items-start bg-primary py-20"
      id="contact"
    >
      <div className="container">
        <MotionDiv className="my-10 text-center tablet:text-start">
          <h1 className="text-6xl font-bold break-all">
            {t("title")}<span className="text-primary-foreground">.</span>
          </h1>
          <p className="my-1 italic text-primary-foreground">
            {t("question")}
          </p>
        </MotionDiv>
        <div className="py-20">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-10 tablet:mb-0">
            <MotionDiv className="flex gap-3 items-center">
              <div className="p-4">
                <PhoneIcon className="text-white w-10 h-10 stroke-1"/>
              </div>
              <div className="flex-1 flex flex-col">
                <h2 className="text-2xl">{t("phone")}</h2>
                <a
                  href="tel:+250791901792"
                  className="text-primary-foreground font-mono"
                >
                  +250 791 901 792
                </a>
              </div>
            </MotionDiv>
            <MotionDiv className="flex gap-3 items-center">
              <div className="p-4">
                <MailIcon className="text-white w-10 h-10 stroke-1"/>
              </div>
              <div className="flex-1 flex flex-col">
                <h2 className="text-2xl">{t("email")}</h2>
                <a
                  href="mailto:sergemezui.dev@gmail.com"
                  className="text-primary-foreground"
                >
                  sergemezui.dev@gmail.com
                </a>
              </div>
            </MotionDiv>
            <MotionDiv className="flex gap-3 items-center">
              <div className="p-4">
                <MapPinIcon className="text-white w-10 h-10 stroke-1"/>
              </div>
              <div className="flex-1 flex flex-col">
                <h2 className="text-2xl">{t("location")}</h2>
                <span className="text-primary-foreground">Kigali, Rwanda</span>
              </div>
            </MotionDiv>
            <MotionDiv className="flex gap-3 items-center">
              <div className="p-4">
                <FlagIcon className="text-white w-10 h-10 stroke-1"/>
              </div>
              <div className="flex-1 flex flex-col">
                <h2 className="text-2xl">{t("country")}</h2>
                <span className="text-primary-foreground flex gap-2 items-center"><FlagGa className="w-6 shadow-xl" /> {t("from")}</span>
              </div>
            </MotionDiv>
          </div>
        </div>
        <div className="flex items-center md:justify-center justify-start">
          <MotionDiv className="flex gap-3 items-center">
            <div className="p-4">
              <ContactIcon className="text-white w-10 h-10 stroke-1"/>
            </div>
            <div className="flex-1 flex flex-col">
              <h2 className="text-2xl">{t("resume")}</h2>
              <a href={getResumeUrl(locale)} target="_blank"
                className="text-primary-foreground cursor-pointer">{t("open_resume")}</a>
            </div>
          </MotionDiv>
        </div>
      </div>
    </div>
  );
};
