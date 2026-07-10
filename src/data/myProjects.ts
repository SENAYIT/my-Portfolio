export type projectCategory =
  | "frontend"
  | "backend"
  | "fullstack"
  | "wordpress"
  | "others";
export type ProjectLink = {
  name: "live demo" | "github";
  href: string;
};

export type Project = {
  id: string;
  name: string;
  projectCategory: projectCategory;
  image?: string;
  description: string;
  links: ProjectLink[];
  techUsed: string[];
};

export const myProjects: Project[] = [
  {
    id: "1wordpress",
    name: "Acupuncture In Addis",
    projectCategory: "wordpress",
    image: "/projects/world_map.jpeg",
    description:
      "WordPress Website – acupunctureinaddis.com. A real, professional, responsive, and SEO-optimized WordPress website. ",
    links: [
      { name: "live demo", href: "https://acupunctureinaddis.com" },
      { name: "github", href: " " },
    ],
    techUsed: ["WordPress", "HTML", "CSS"],
  },
  {
    id: "2f",
    name: "Portfolio Website",
    projectCategory: "frontend",
    image: "/projects/world_map.jpeg",
    description: "Personal portfolio built with Next.js and Tailwind CSS.",
    links: [
      { name: "live demo", href: "https://yourwebsite.com" },
      { name: "github", href: "https://github.com/SENAYIT/my-portfolio" },
    ],
    techUsed: ["Next.js", "React", "Tailwind CSS", "TypeScript"],
  },
  {
    id: "3f",
    name: "E-commerce UI",
    projectCategory: "frontend",
    image: "/projects/world_map.jpeg",
    description: "Modern UI for an e-commerce platform.",
    links: [
      { name: "live demo", href: "https://yourwebsite.com" },
      { name: "github", href: "https://github.com/SENAYIT/my-portfolio" },
    ],
    techUsed: ["React", "Redux", "Tailwind CSS"],
  },

  {
    id: "1b",
    name: "project name",
    projectCategory: "backend",
    image: "/projects/world_map.jpeg",
    description: "project description",
    links: [
      { name: "live demo", href: "https://yourwebsite.com" },
      { name: "github", href: "https://github.com/SENAYIT/my-portfolio" },
    ],
    techUsed: ["teck1", "teck2"],
  },
  {
    id: "2b",
    name: "Portfolio Website",
    projectCategory: "backend",
    image: "/projects/world_map.jpeg",
    description: "Personal portfolio built with Next.js and Tailwind CSS.",
    links: [
      { name: "live demo", href: "https://yourwebsite.com" },
      { name: "github", href: "https://github.com/SENAYIT/my-portfolio" },
    ],
    techUsed: ["Next.js", "React", "Tailwind CSS", "TypeScript"],
  },
];
