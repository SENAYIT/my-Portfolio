import Image from "next/image";
import ProjectsIconsList from "./projectLinkIconsList";
import ProjectCardUI from "@/components/ui/CardUI/projectCardUI";
import TechTool from "./techTool";

import { Project } from "@/data/myProjects";

const projectLinksData = [
  {
    name: "live demo",
    href: "google.com",
  },
  {
    name: "github",
    href: "google.com",
  },
];

export default function Projectcard({ project }: { project: Project }) {
  return (
    <ProjectCardUI>
      <div className="flex flex-col gap-2">
        {/* for image*/}

        {/* project for content */}

        <h3 className="text-white">{project.name}</h3>
        <p className="text-gray-500">{project.description}</p>

        {/* for project links tools */}
        <div className="flex gap-2 flex-wrap">
          {project.techUsed.map((tech) => (
            <TechTool key={tech} techTool={tech} />
          ))}
        </div>

        <ProjectsIconsList
          projectLinksData={projectLinksData}
          showiconName={true}
        />
      </div>
    </ProjectCardUI>
  );
}
