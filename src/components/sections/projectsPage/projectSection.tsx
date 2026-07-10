import { myProjects } from "@/data/myProjects";
import ProjectCard from "./projectCard";

export default function ProjectsSection() {
  return (
    <div className="space-y-10 ">
      <section className="grid md:grid-cols-2 gap-6 pt-4">
        {myProjects.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </section>
    </div>
  );
}
