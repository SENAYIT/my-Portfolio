import { skills } from "@/components/ui/iconListShowUI/mySkillsWithIcon";
import SkillCard from "./skillCard";
import SectionHeader from "./sectionHeader";

export default function SkillsSection() {
  const groups = [skills.frontend, skills.backend, skills.tools];

  return (
    <section className="w-full px-4 md:px-10 space-y-12">
      {groups.map((group, groupIndex) => (
        <div
          key={groupIndex}
          className="flex flex-col items-start justify-center gap-4"
        >
          {/* Header */}
          <SectionHeader title={group.name} />

          {/* GRID container */}
          <div
            className="
              w-full
              grid
              grid-cols-1
              sm:grid-cols-2
              lg:grid-cols-3
              xl:grid-cols-4
              gap-5
              justify-items-center
            "
          >
            {group.skillList.map((skill, skillIndex) => (
              <SkillCard key={skillIndex} skill={skill} />
            ))}
          </div>
        </div>
      ))}
    </section>
  );
}
