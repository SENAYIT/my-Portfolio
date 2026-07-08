import PageHeader from "../mainPageContent/pageHeader";
import AboutMeCardSection from "./aboutMeCardSection";
import ContentDisplaySection from "./contentDisplaySection";

export default function AboutMePageSection() {
  return (
    <div className="flex flex-col items-center justify-center gap-4">
      <PageHeader
        headerTitle="About Me"
        headerHeading="Building Digital Products"
        headerSubHeading="Passionate about creating seamless user experiences and scalable systems"
        className=""
      />
      <main className="flex flex-col items-center justify-center gap-4 md:flex md:flex-row md:items-center md:justify-between">
        <ContentDisplaySection />
        <AboutMeCardSection />
      </main>
    </div>
  );
}
