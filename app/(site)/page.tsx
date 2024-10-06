import {
  ContactCard,
  EnterpriseCard,
  HomeCard,
  ProjectCard,
  Servicecard,
  SkillCard
} from "@/components/pages";
import { Header, Social, Footer } from "@/components/molecule";

export default function Home() {
  return (
    <>
      <div className="min-h-screen">
        <Header/>
        <div className="">
          <HomeCard/>
          <Servicecard/>
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
