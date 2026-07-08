// import type { Skill } from "@/data/mySkills";
import type { Skill } from "@/components/ui/iconListShowUI/mySkillsWithIcon";
import SkillTechCardUI from "@/components/ui/CardUI/skillTechCardUI";

// // type Props = {
// //   skill: Skill;
// // };

export default function SkillCard({ skill }: { skill: Skill }) {
  return (
    <SkillTechCardUI>
      {/* icon */}
      {/* // <div className="text-cyan-400 text-xl">{skill.icon}</div> */}
      <skill.icon className="w-7 h-7 md:w-8 md:h-8 text-cyan-400 text-xl" />

      {/* text content */}
      <div className="flex flex-col leading-tight">
        <p className="text-base md:text-lg font-medium text-white">
          {skill.name}
        </p>

        <p className="text-sm font-semibold text-green-500">{skill.level}</p>
      </div>
    </SkillTechCardUI>
  );
}
