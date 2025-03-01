import {
  ContactCard,
  EnterpriseCard,
  HomeCard,
  ProjectCard,
  ServiceCard,
  SkillCard,
} from "@/components/pages";
import { Header, Social, Footer } from "@/components/molecule";

export default function Home() {
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
