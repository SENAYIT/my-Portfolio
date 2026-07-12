import { services } from "@/data/myOfferingServices";
import ServiceCard from "./serviceCard";

export default function ServicesSection() {
  return (
    <section className="p-2">
      <div className="grid gap-6 md:grid-cols-3">
        {services.map((service, index) => (
          <ServiceCard key={index} service={service} />
        ))}
      </div>
    </section>
  );
}
