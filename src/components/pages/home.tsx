import Image from "next/image";
import { Button } from "../ui/button";
import Link from "next/link";
import { MotionDiv } from "../atom";
import { getI18n } from "@/locales/server";
import dataSmall from "@/assets/img/photo.png";
import dataBig from "@/assets/img/photo-original.png";

export const HomeCard = async () => {
  const t = await getI18n();
  return (
    <div
      className="container min-h-screen flex items-center justify-center bg-background"
      id="home"
    >
      <div className="flex flex-col tablet:flex-row">
        <MotionDiv className="w-full items-end tablet:items-center justify-center flex">
          <Image
            className="w-[124px] h-[124px] md:w-[184px] md:h-[184px] tablet:w-[344px] tablet:h-[344px] rounded-full shadow-lg shadow-primary mb-8 tablet:mb-0 transition-all hover:scale-105"
            src={dataBig}
            alt="Logo Serge Mezui"
            width={1080}
            height={1080}
            placeholder="blur"
            blurDataURL={dataSmall.blurDataURL}
            priority
          />
        </MotionDiv>
        <MotionDiv className="w-full tablet:text-end flex flex-col tablet:gap-3 gap-6 text-center">
          <h1 className="tablet:text-8xl md:text-6xl text-3xl font-bold">
            {t("home.name")}<span className="text-primary">.</span>
          </h1>
          <p className="text-lg md:text-xl text-secondary-foreground">
            {t("home.bio")}
          </p>
          <p className="text-muted-foreground">{t("home.nickName")}</p>
          <Link href="/#service">
            <Button>{t("home.next")}</Button>
          </Link>
        </MotionDiv>
      </div>
    </div>
  );
};
