import PageHeader from "../mainPageContent/pageHeader";

import ProjectsSection from "./projectSection";

export default function ProjectsPageSection() {
  return (
    <div>
      <PageHeader
        headerTitle="Projects"
        headerHeading="Featured Projects"
        headerSubHeading="Explore the projects I've built throughout my learning journey."
        // headerSubHeading="Explore my latest work and contributions"
        className=""
      />

      <ProjectsSection />
    </div>
  );
}
