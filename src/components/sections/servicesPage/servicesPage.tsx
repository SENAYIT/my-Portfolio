import PageHeader from "../mainPageContent/pageHeader";
import ServicesSection from "./servicesSection";

export default function ServicesPageSection() {
  return (
    <div>
      <PageHeader
        headerTitle="Services"
        headerHeading="Welcome to My Services Page"
        headerSubHeading="Learn more about the services I offer"
        className=""
      />
      <ServicesSection />
    </div>
  );
}
