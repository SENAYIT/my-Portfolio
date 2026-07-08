import React from "react";

type TechCardUIProps = {
  children?: React.ReactNode;
};

export default function SkillTechCardUI({ children }: TechCardUIProps) {
  return (
    <div
      className="
        w-80 md:w-96
        h-16 md:h-20

        flex items-center gap-3
        px-4 py-3

        rounded-xl
        border border-cyan-800/40
        bg-zinc-950/40 backdrop-blur-md

        transition-all duration-300 ease-in-out

        hover:shadow-[0_0_20px_rgba(34,211,238,0.25)]
        hover:border-cyan-400/60
        hover:-translate-y-1
      "
    >
      {children}
    </div>
  );
}
