import PageHeader from "../mainPageContent/pageHeader";
import ExperienceTimeline from "./experienceTimeline";

export default function ExperiencesPageSection() {
  return (
    <div>
      <PageHeader
        headerTitle="Experiences"
        headerHeading="Professional Experience"
        headerSubHeading="A timeline of my professional growth and key contributions"
        className=""
      />
      <ExperienceTimeline />
    </div>
  );
}
