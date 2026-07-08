import PageHeader from "../mainPageContent/pageHeader";

import ProjectsSection from "./projectSection";

export default function ProjectsPageSection() {
  return (
    <div>
      <PageHeader
        headerTitle="Projects"
        headerHeading="Featured Projects"
        headerSubHeading="Explore my latest work and contributions"
        className=""
      />

      <ProjectsSection />
    </div>
  );
}
