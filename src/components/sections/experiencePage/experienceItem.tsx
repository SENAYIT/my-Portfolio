import TimelineDot from "./timeLineDot";

import { Experience } from "@/data/myExperciences";

export default function ExperienceItem({ exp }: { exp: Experience }) {
  const isCurrent = exp.endDate === "Present";

  return (
    <div className="relative flex flex-col md:flex-row md:items-start gap-4 md:gap-6">
      {/* Dot */}
      <TimelineDot isCurrent={isCurrent} />

      {/* Card */}
      <div
        className={`w-full md:ml-10 rounded-xl p-5 md:p-6 border transition relative
        ${
          isCurrent
            ? "bg-zinc-900/70 border-cyan-500 shadow-[0_0_25px_rgba(34,211,238,0.15)] scale-[1.02]"
            : "bg-zinc-900/60 border-zinc-800 hover:shadow-cyan-500/10"
        }`}
      >
        {/* Badge */}
        {isCurrent && (
          <span className="absolute top-3 right-3 text-[10px] px-2 py-1 rounded-full bg-cyan-500 text-black font-semibold">
            CURRENT
          </span>
        )}

        {/* Header */}
        <div className="flex flex-col gap-1">
          <h3 className="text-lg md:text-xl font-semibold text-white">
            {exp.role}
          </h3>

          <p className="text-cyan-400 font-medium">{exp.company}</p>

          <p className="text-xs md:text-sm text-gray-400">
            {exp.location ?? "Remote"} • {exp.startDate} - {exp.endDate}
          </p>
        </div>

        {/* Description */}
        <p className="mt-3 text-gray-300 text-sm leading-relaxed">
          {exp.description}
        </p>

        {/* Responsibilities */}
        <ul className="mt-3 space-y-1 text-gray-400 text-sm">
          {exp.responsibilities.map((item, i) => (
            <li key={i} className="flex gap-2">
              <span className="text-cyan-400">•</span>
              <span>{item}</span>
            </li>
          ))}
        </ul>

        {/* Tech Stack */}
        <div className="mt-4 flex flex-wrap gap-2">
          {exp.techStack.map((tech) => (
            <span
              key={tech}
              className="text-xs px-2 py-1 rounded-md bg-zinc-800 text-cyan-300 border border-zinc-700"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
