import { Service } from "@/data/myServices";
import Image from "next/image";
import TechTool from "../projectsPage/techTool";

export default function ServiceCard({ service }: { service: Service }) {
  const {
    name,
    image = "/servicesImage/world_map.jpeg",
    description,
    techSkills,
  } = service;
  return (
    <div className="border border-cyan-950 rounded-lg p-4 shadow-sm flex flex-col items-start gap-2 justify-center">
      {/* Access simple properties */}
      <div>
        <Image
          src={image}
          width={300}
          height={50}
          className="w-auto h-auto hidden md:block"
          alt="projects Image"
          loading="eager"
        />

        <Image
          src={image}
          width={200}
          height={50}
          className="w-auto h-auto block md:hidden"
          alt="projects Image"
          loading="eager"
        />
      </div>
      <h3 className="text-xl text-white font-light">{name}</h3>
      <p className="text-gray-600 mt-2">{description}</p>

      {/* Access array: TechSkill */}
      <div className="mt-3">
        {/* <p className="text-white font-medium">Tech Skills:</p> */}
        <div className="flex gap-2 flex-wrap">
          {techSkills.map((skill, i) => (
            <TechTool key={i} techTool={skill} />
          ))}
        </div>
      </div>
    </div>
  );
}

// fot the detail access

{
  /* Access array: offer */
}
{
  /* <div className="mt-3">
          <p className="text-white font-medium">Offer:</p>
          <ul className="list-disc ml-5 text-sm text-gray-700">
            {service.offers.map((offer, i) => (
              <li key={i}>{offer}</li>
            ))}
          </ul>
        </div> */
}

{
  /* Access array: workPosition */
}
{
  /* <div className="mt-3">
        <p className="text-white font-medium">Work Positions:</p>
        <div className="flex flex-wrap gap-2 mt-1">
          {service.workPositions.map((pos, i) => (
            <WorkPosition key={i} workPos={pos} />
          ))}
        </div>
      </div> */
}
