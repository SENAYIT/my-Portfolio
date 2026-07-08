export type ProjectLink = {
  name: "live demo" | "github";
  href: string;
  // github?: string;
  // live?: string;
};

export type Project = {
  name: string;
  description: string;
  links: ProjectLink[];
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
      links: [
        {
          name: "live demo",
          href: "https://yourwebsite.com",
        },
        {
          name: "github",
          href: "https://github.com/SENAYIT/my-portfolio",
        },
      ],
      techUsed: ["teck1", "teck2"],
    },
    {
      name: "Portfolio Website",
      description: "Personal portfolio built with Next.js and Tailwind CSS.",
      links: [
        {
          name: "live demo",
          href: "https://yourwebsite.com",
        },
        {
          name: "github",
          href: "https://github.com/SENAYIT/my-portfolio",
        },
      ],
      techUsed: ["Next.js", "React", "Tailwind CSS", "TypeScript"],
    },
    {
      name: "E-commerce UI",
      description: "Modern UI for an e-commerce platform.",
      links: [
        {
          name: "live demo",
          href: "https://yourwebsite.com",
        },
        {
          name: "github",
          href: "https://github.com/SENAYIT/my-portfolio",
        },
      ],
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
      links: [
        {
          name: "live demo",
          href: "https://yourwebsite.com",
        },
        {
          name: "github",
          href: "https://github.com/SENAYIT/my-portfolio",
        },
      ],
      techUsed: ["teck1", "teck2"],
    },
    {
      name: "Portfolio Website",
      description: "Personal portfolio built with Next.js and Tailwind CSS.",
      links: [
        {
          name: "live demo",
          href: "https://yourwebsite.com",
        },
        {
          name: "github",
          href: "https://github.com/SENAYIT/my-portfolio",
        },
      ],
      techUsed: ["Next.js", "React", "Tailwind CSS", "TypeScript"],
    },
    {
      name: "E-commerce UI",
      description: "Modern UI for an e-commerce platform.",
      links: [
        {
          name: "live demo",
          href: "https://yourwebsite.com",
        },
        {
          name: "github",
          href: "https://github.com/SENAYIT/my-portfolio",
        },
      ],
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
      links: [
        {
          name: "live demo",
          href: "https://yourwebsite.com",
        },
        {
          name: "github",
          href: "https://github.com/SENAYIT/my-portfolio",
        },
      ],
      techUsed: ["teck1", "teck2"],
    },
    {
      name: "Portfolio Website",
      description: "Personal portfolio built with Next.js and Tailwind CSS.",
      links: [
        {
          name: "live demo",
          href: "https://yourwebsite.com",
        },
        {
          name: "github",
          href: "https://github.com/SENAYIT/my-portfolio",
        },
      ],
      techUsed: ["Next.js", "React", "Tailwind CSS", "TypeScript"],
    },
    {
      name: "E-commerce UI",
      description: "Modern UI for an e-commerce platform.",
      links: [
        {
          name: "live demo",
          href: "https://yourwebsite.com",
        },
        {
          name: "github",
          href: "https://github.com/SENAYIT/my-portfolio",
        },
      ],
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
      links: [
        {
          name: "live demo",
          href: "https://yourwebsite.com",
        },
        {
          name: "github",
          href: "https://github.com/SENAYIT/my-portfolio",
        },
      ],
      techUsed: ["teck1", "teck2"],
    },
    {
      name: "Portfolio Website",
      description: "Personal portfolio built with Next.js and Tailwind CSS.",
      links: [
        {
          name: "live demo",
          href: "https://yourwebsite.com",
        },
        {
          name: "github",
          href: "https://github.com/SENAYIT/my-portfolio",
        },
      ],
      techUsed: ["Next.js", "React", "Tailwind CSS", "TypeScript"],
    },
    {
      name: "E-commerce UI",
      description: "Modern UI for an e-commerce platform.",
      links: [
        {
          name: "live demo",
          href: "https://yourwebsite.com",
        },
        {
          name: "github",
          href: "https://github.com/SENAYIT/my-portfolio",
        },
      ],
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
