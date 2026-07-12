import PageHeader from "../mainPageContent/pageHeader";
import ServicesSection from "./servicesSection";

export default function ServicesPageSection() {
  return (
    <div>
      <PageHeader
        headerTitle="Services"
        headerHeading="Web Development"
        headerSubHeading="Bringing your ideas to life through web development."
        className=""
      />
      <ServicesSection />
    </div>
  );
}
