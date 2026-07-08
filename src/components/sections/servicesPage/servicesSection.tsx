import { services } from "@/data/MyServices"; // adjust path
import ServiceCard from "./serviceCard";

export default function ServicesSection() {
  return (
    <section className="p-6">
      <div className="grid gap-6 md:grid-cols-3">
        {services.map((service, index) => (
          <ServiceCard key={index} service={service} />
        ))}
        ;
      </div>
    </section>
  );
}
