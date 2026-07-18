import Image from "next/image";
import ProjectsIconsList from "./projectLinkIconsList";
import ProjectCardUI from "@/components/ui/CardUI/projectCardUI";
import TechTool from "./techTool";
import { Project } from "@/data/myProjects";
import GotoLink from "@/components/ui/links/goToLink";

export default function Projectcard({ project }: { project: Project }) {
  const {
    id,
    name,
    image = "/projects/world_map.jpeg",
    short_description,
    techUsed,
    links,
  } = project;
  return (
    <ProjectCardUI>
      <div className="flex flex-col gap-2">
        {/* for image*/}
        <div>
          <Image
            src={image}
            width={300}
            height={50}
            alt={name}
            className="w-auto h-auto hidden md:block"
            loading="eager"
          />

          <Image
            src={image}
            width={200}
            height={50}
            className="w-auto h-auto block md:hidden"
            alt={name}
            loading="eager"
          />
        </div>
        {/* project for content */}

        <h3 className="text-white">{name}</h3>
        <p className="text-gray-500 text-wrap">{short_description}</p>

        {/* for project links tools */}
        <div className="flex gap-2 flex-wrap">
          {techUsed.map((tech) => (
            <TechTool key={tech} techTool={tech} />
          ))}
        </div>
        <div className="flex flex-row items-center justify-between">
          <ProjectsIconsList projectLinksData={links} showiconName={true} />
          <GotoLink
            href={`projects/${id}`}
            className="text-cyan-600 hover:underline-offset-1 hover:text-cyan-300"
          >
            Details...
          </GotoLink>
        </div>
      </div>
    </ProjectCardUI>
  );
}
