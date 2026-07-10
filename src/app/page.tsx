import HomePageSection from "@/components/sections/homePage/homePage";
import AboutPage from "./about/page";
import ExperiencePage from "./experience/page";
import ProjectsPage from "./projects/(all)/page";
import SkillsPage from "./skills/page";
import ServicesPage from "./services/page";
import ContactPage from "./contacts/page";

export default function Home() {
  return (
    <div className="flex flex-col gap-20">
      <HomePageSection />
      <AboutPage />
      <ExperiencePage />
      <ProjectsPage />
      <SkillsPage />
      <ServicesPage />
      <ContactPage />
    </div>
  );
}
