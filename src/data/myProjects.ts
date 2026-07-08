export type ProjectLink = {
  github?: string;
  live?: string;
};

export type Project = {
  name: string;
  description: string;
  links: ProjectLink;
  techUsed: string[];
};

export type ProjectGroup = {
  title: string;
  projects: Project[];
};

export const frontendProjects: ProjectGroup = {
  title: "Frontend Projects",
  projects: [
    {
      name: "project name",
      description: "project description",
      links: { github: "github link", live: "live Demo Link" },
      techUsed: ["teck1", "teck2"],
    },
    {
      name: "Portfolio Website",
      description: "Personal portfolio built with Next.js and Tailwind CSS.",
      links: {
        github: "https://github.com/yourname/portfolio",
        live: "https://yourportfolio.com",
      },
      techUsed: ["Next.js", "React", "Tailwind CSS", "TypeScript"],
    },
    {
      name: "E-commerce UI",
      description: "Modern UI for an e-commerce platform.",
      links: {
        github: "https://github.com/yourname/ecommerce-ui",
        live: "https://ecommerce-demo.com",
      },
      techUsed: ["React", "Redux", "Tailwind CSS"],
    },
  ],
};

export const backendProjects: ProjectGroup = {
  title: "Backend Projects",
  projects: [
    {
      name: "project name",
      description: "project description",
      links: { github: "github link", live: "live Demo Link" },
      techUsed: ["teck1", "teck2"],
    },
    {
      name: "Portfolio Website",
      description: "Personal portfolio built with Next.js and Tailwind CSS.",
      links: {
        github: "https://github.com/yourname/portfolio",
        live: "https://yourportfolio.com",
      },
      techUsed: ["Next.js", "React", "Tailwind CSS", "TypeScript"],
    },
    {
      name: "E-commerce UI",
      description: "Modern UI for an e-commerce platform.",
      links: {
        github: "https://github.com/yourname/ecommerce-ui",
        live: "https://ecommerce-demo.com",
      },
      techUsed: ["React", "Redux", "Tailwind CSS"],
    },
  ],
};

export const fullstackProjects: ProjectGroup = {
  title: "Fullstack Projects",
  projects: [
    {
      name: "project name",
      description: "project description",
      links: { github: "github link", live: "live Demo Link" },
      techUsed: ["teck1", "teck2"],
    },
    {
      name: "Portfolio Website",
      description: "Personal portfolio built with Next.js and Tailwind CSS.",
      links: {
        github: "https://github.com/yourname/portfolio",
        live: "https://yourportfolio.com",
      },
      techUsed: ["Next.js", "React", "Tailwind CSS", "TypeScript"],
    },
    {
      name: "E-commerce UI",
      description: "Modern UI for an e-commerce platform.",
      links: {
        github: "https://github.com/yourname/ecommerce-ui",
        live: "https://ecommerce-demo.com",
      },
      techUsed: ["React", "Redux", "Tailwind CSS"],
    },
  ],
};

export const othersProjects: ProjectGroup = {
  title: "Others Projects",
  projects: [
    {
      name: "project name",
      description: "project description",
      links: { github: "github link", live: "live Demo Link" },
      techUsed: ["teck1", "teck2"],
    },
    {
      name: "Portfolio Website",
      description: "Personal portfolio built with Next.js and Tailwind CSS.",
      links: {
        github: "https://github.com/yourname/portfolio",
        live: "https://yourportfolio.com",
      },
      techUsed: ["Next.js", "React", "Tailwind CSS", "TypeScript"],
    },
    {
      name: "E-commerce UI",
      description: "Modern UI for an e-commerce platform.",
      links: {
        github: "https://github.com/yourname/ecommerce-ui",
        live: "https://ecommerce-demo.com",
      },
      techUsed: ["React", "Redux", "Tailwind CSS"],
    },
  ],
};

// export const myProjects = {
//   frontend: frontendProjects,
//   backend: backendProjects,
//   fullstack: fullstackProjects,
//   others: othersProjects,
// };

export type ProjectCategory = "frontend" | "backend" | "fullstack" | "others";

export const myProjects: Record<ProjectCategory, ProjectGroup> = {
  frontend: frontendProjects,
  backend: backendProjects,
  fullstack: fullstackProjects,
  others: othersProjects,
};
