import { Service } from "@/data/MyServices";
import WorkPosition from "./workPosition";

export default function ServiceCard({ service }: { service: Service }) {
  return (
    <div className="border border-cyan-950 rounded-lg p-4 shadow-sm">
      {/* Access simple properties */}
      <h3 className="text-xl text-white font-semibold">{service.name}</h3>
      <p className="text-gray-600 mt-2">{service.description}</p>
      {/* Access array: TeckSkill */}
      <div className="mt-3">
        <p className="text-white font-medium">Tech Skills:</p>
        <ul className="list-disc ml-5 text-sm text-gray-700">
          {service.TeckSkill.map((skill, i) => (
            <li key={i}>{skill}</li>
          ))}
        </ul>
      </div>

      {/* Access array: workPosition */}
      <div className="mt-3">
        <p className="text-white font-medium">Work Positions:</p>
        <div className="flex flex-wrap gap-2 mt-1">
          {service.workPosition.map((pos, i) => (
            <WorkPosition key={i} workPos={pos} />
          ))}
        </div>
      </div>
    </div>
  );
}
