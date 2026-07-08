import PageHeader from "../mainPageContent/pageHeader";
import SkillsSection from "./skillsSection";

export default function SkillsPageSection() {
  return (
    <div>
      <PageHeader
        headerTitle="Tech Stack"
        headerHeading="Skills & Technologies"
        headerSubHeading="Tools and technologies I work with to bring ideas to life"
        className=""
      />

      <SkillsSection />
    </div>
  );
}
