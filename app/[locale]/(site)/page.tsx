/* eslint-disable indent */
import {
  ContactCard,
  EnterpriseCard,
  HomeCard,
  ProjectCard,
  ServiceCard,
  SkillCard,
} from "@/components/pages";
import { Header, Social, Footer } from "@/components/molecule";

import { setStaticParamsLocale } from "next-international/server";

export default async function Home({ params }: { params: Promise<{ locale: "en" | "fr" }> }) {
  const { locale } = await params;
  setStaticParamsLocale(locale);
  return (
    <>
      <div className="min-h-screen">
        <Header/>
        <div className="">
          <HomeCard/>
          <ServiceCard/>
          <SkillCard/>
          <ProjectCard/>
          <EnterpriseCard/>
          <ContactCard/>
          <Footer/>
        </div>
      </div>
      <Social/>
    </>
  );
}
