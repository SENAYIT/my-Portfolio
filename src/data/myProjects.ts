export type projectCategory = "frontend" | "backend" | "fullstack" | "others";
export type ProjectLink = {
  name: "live demo" | "github";
  href: string;
};

export type Project = {
  id: string;
  name: string;
  projectCategory: projectCategory;
  description: string;
  links: ProjectLink[];
  techUsed: string[];
};

export const myProjects: Project[] = [
  {
    id: "1f",
    name: "project name",
    projectCategory: "frontend",
    description: "project description",
    links: [
      { name: "live demo", href: "https://yourwebsite.com" },
      { name: "github", href: "https://github.com/SENAYIT/my-portfolio" },
    ],
    techUsed: ["teck1", "teck2"],
  },
  {
    id: "2f",
    name: "Portfolio Website",
    projectCategory: "frontend",
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
    description: "Personal portfolio built with Next.js and Tailwind CSS.",
    links: [
      { name: "live demo", href: "https://yourwebsite.com" },
      { name: "github", href: "https://github.com/SENAYIT/my-portfolio" },
    ],
    techUsed: ["Next.js", "React", "Tailwind CSS", "TypeScript"],
  },
  {
    id: "3b",
    name: "E-commerce UI",
    projectCategory: "backend",
    description: "Modern UI for an e-commerce platform.",
    links: [
      { name: "live demo", href: "https://yourwebsite.com" },
      { name: "github", href: "https://github.com/SENAYIT/my-portfolio" },
    ],
    techUsed: ["React", "Redux", "Tailwind CSS"],
  },

  {
    id: "1Fs",
    name: "project name",
    projectCategory: "fullstack",
    description: "project description",
    links: [
      { name: "live demo", href: "https://yourwebsite.com" },
      { name: "github", href: "https://github.com/SENAYIT/my-portfolio" },
    ],
    techUsed: ["teck1", "teck2"],
  },
  {
    id: "2Fs",
    name: "Portfolio Website",
    projectCategory: "fullstack",
    description: "Personal portfolio built with Next.js and Tailwind CSS.",
    links: [
      { name: "live demo", href: "https://yourwebsite.com" },
      { name: "github", href: "https://github.com/SENAYIT/my-portfolio" },
    ],
    techUsed: ["Next.js", "React", "Tailwind CSS", "TypeScript"],
  },
  {
    id: "3Fs",
    name: "E-commerce UI",
    projectCategory: "fullstack",
    description: "Modern UI for an e-commerce platform.",
    links: [
      { name: "live demo", href: "https://yourwebsite.com" },
      { name: "github", href: "https://github.com/SENAYIT/my-portfolio" },
    ],
    techUsed: ["React", "Redux", "Tailwind CSS"],
  },

  {
    id: "1oth",
    name: "project name",
    projectCategory: "others",
    description: "project description",
    links: [
      { name: "live demo", href: "https://yourwebsite.com" },
      { name: "github", href: "https://github.com/SENAYIT/my-portfolio" },
    ],
    techUsed: ["teck1", "teck2"],
  },
  {
    id: "2oth",
    name: "Portfolio Website",
    projectCategory: "others",
    description: "Personal portfolio built with Next.js and Tailwind CSS.",
    links: [
      { name: "live demo", href: "https://yourwebsite.com" },
      { name: "github", href: "https://github.com/SENAYIT/my-portfolio" },
    ],
    techUsed: ["Next.js", "React", "Tailwind CSS", "TypeScript"],
  },
  {
    id: "3oth",
    name: "E-commerce UI",
    projectCategory: "others",
    description: "Modern UI for an e-commerce platform.",
    links: [
      { name: "live demo", href: "https://yourwebsite.com" },
      { name: "github", href: "https://github.com/SENAYIT/my-portfolio" },
    ],
    techUsed: ["React", "Redux", "Tailwind CSS"],
  },
];
