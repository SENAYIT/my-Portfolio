// import Projectcard from "@/components/sections/projectsPage/projectCard";
import Image from "next/image";
import ProjectsIconsList from "@/components/sections/projectsPage/projectLinkIconsList";
import ProjectCardUI from "@/components/ui/CardUI/projectCardUI";
import TechTool from "@/components/sections/projectsPage/techTool";
import { Project } from "@/data/myProjects";

export default function ProjectDetails({ project }: { project: Project }) {
  const {
    name,
    image = "/projects/world_map.jpeg",
    description,
    techUsed,
    links,
  } = project;
  return (
    <section className="flex flex-col items-center justify-center gap-2 md:p-8 md:border-2 md:border-gray-700 md:rounded-2xl">
      {/* for image*/}
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
      {/* project for content */}

      <h3 className="text-white">{name}</h3>
      <p className="text-gray-500">{description}</p>

      {/* for project links tools */}
      <div className="flex gap-2 flex-wrap">
        {techUsed.map((tech) => (
          <TechTool key={tech} techTool={tech} />
        ))}
      </div>

      <ProjectsIconsList projectLinksData={links} showiconName={true} />
    </section>
  );
}
