import { myProjects } from "@/data/myProjects";
import ProjectCard from "./projectCard";

export default function ProjectsSection() {
  return (
    <div className="space-y-10 ">
      {Object.values(myProjects).map((group) => (
        <section key={group.title} className="flex flex-col gap-4 p-2">
          <h2 className="text-2xl text-white font-bold">{group.title}</h2>

          <div className="grid md:grid-cols-2 gap-4">
            {group.projects.map((project) => (
              <ProjectCard key={project.name} project={project} />
            ))}
          </div>
        </section>
      ))}
    </div>
  );
}
