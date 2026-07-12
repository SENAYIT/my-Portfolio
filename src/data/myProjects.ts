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
    name: "Geo Location",
    projectCategory: "fullstack",
    image: "/projects/world_map.jpeg",
    description:
      "A Geo Location Project that can help you , the location of Country and all Details about that country.",
    links: [
      { name: "live demo", href: "https://yourwebsite.com" },
      { name: "github", href: "https://github.com/SENAYIT/my-portfolio" },
    ],
    techUsed: ["Next.js", "React", "Tailwind CSS", "TypeScript"],
  },
  {
    id: "3f",
    name: "Admin-Dashboard",
    projectCategory: "fullstack",
    image: "/projects/world_map.jpeg",
    description:
      "This Project has all CRUD features, and login & Logout Features , ",
    links: [
      { name: "live demo", href: "https://yourwebsite.com" },
      { name: "github", href: "https://github.com/SENAYIT/my-portfolio" },
    ],
    techUsed: ["Next.js", "ReactJS", "Typescript", "Tailwind CSS"],
  },
];
