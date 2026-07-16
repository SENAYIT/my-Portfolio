import NotFound from "@/app/not-found";
import Breadcrumbs from "@/components/sections/projectsPage/breadcrumbs";
import { myProjects } from "@/data/myProjects";
import ProjectDetails from "./projectDetails";

export default async function DetailHomePage(props: {
  params: Promise<{ projectId: string }>;
}) {
  const params = await props.params;
  const project_Id = params.projectId;
  const project = myProjects.find((project) => project.id === project_Id);

  if (!project_Id || !project) {
    return NotFound();
  }
  // console.log(` from the detail page the project id is:${project_Id}`);

  // const project = myProjects.find((project) => project.id === project_Id);

  return (
    <section className="flex flex-col gap-2">
      <Breadcrumbs
        breadcrumbs={[
          { label: "Projects", href: "/projects" },
          {
            label: project?.name || "Project Details",
            href: `/projects/${project_Id}`,
            active: true,
          },
        ]}
      />

      <ProjectDetails project={project} />
    </section>
  );
}
