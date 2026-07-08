import { experiences } from "@/data/myExperciences";
import ExperienceItem from "./experienceItem";

export default function ExperienceTimeline() {
  return (
    <section className="max-w-4xl mx-auto py-6">
      <div className="relative">
        {/* Timeline line */}
        <div className="hidden md:block absolute left-4 top-0 h-full w-[2px] bg-zinc-700" />

        <div className="space-y-8 md:space-y-10">
          {experiences.map((exp, index) => (
            <ExperienceItem key={index} exp={exp} />
          ))}
        </div>
      </div>
    </section>
  );
}
