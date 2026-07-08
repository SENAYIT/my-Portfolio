// for frontend
import {
  // for frontend
  TbBrandTypescript,
  TbBrandReact,
  TbBrandNextjs,
  TbBrandTailwind,
  TbBrandRedux,
  TbBrandGit,
  TbBrandFigma,
  TbBrandJavascript,
  TbBrandHtml5,
  TbBrandCss3,
  //for backend
  TbBrandNodejs,
  TbBrandMysql,
  TbBrandMongodb,
  TbBrandPrisma,
  TbBrandAuth0,
  // others
  TbBrandGithub,
  TbBrandVscode,
  TbBrandVercel,
  TbBrandNpm,
  TbBrandWordpress,
} from "react-icons/tb";

import { IconType } from "react-icons";

export type Skill = {
  name: string;
  level: string;
  icon: IconType;
};

export const frontendSkills: Skill[] = [
  { name: "HTML", level: "Advanced", icon: TbBrandHtml5 },
  { name: "CSS", level: "Advanced", icon: TbBrandCss3 },
  { name: "JavaScript", level: "Advanced", icon: TbBrandJavascript },
  { name: "TypeScript", level: "Intermediate", icon: TbBrandTypescript },
  { name: "React", level: "Advanced", icon: TbBrandReact },
  { name: "Next.js", level: "Intermediate", icon: TbBrandNextjs },
  { name: "Tailwind CSS", level: "Advanced", icon: TbBrandTailwind },
  { name: "Redux", level: "Intermediate", icon: TbBrandRedux },
  { name: "Git", level: "Intermediate", icon: TbBrandGit },
  { name: "Figma", level: "Beginner", icon: TbBrandFigma },
];

export const backendSkills: Skill[] = [
  { name: "Node.js", level: "Intermediate", icon: TbBrandNodejs },
  { name: "MySQL", level: "Intermediate", icon: TbBrandMysql },
  { name: "MongoDB", level: "Intermediate", icon: TbBrandMongodb },
  { name: "Prisma", level: "Beginner", icon: TbBrandPrisma },
  { name: "JWT Authentication", level: "Intermediate", icon: TbBrandAuth0 },
  // important
  //  { name: "Express.js", level: "Beginner", icon: null },//
  // { name: "REST API", level: "Advanced", icon: null}, //
  // { name: "GraphQL", level: "Beginner", icon: null },
  // { name: "PostgreSQL", level: "Intermediate", icon: null  },
];

export const toolsSkills: Skill[] = [
  { name: "WordPress", level: "Intermediate", icon: TbBrandWordpress },
  { name: "Git", level: "Intermediate", icon: TbBrandGit },
  { name: "GitHub", level: "Advanced", icon: TbBrandGithub },
  { name: "VS Code", level: "Advanced", icon: TbBrandVscode },
  { name: "Figma", level: "Beginner", icon: TbBrandFigma },
  { name: "Vercel", level: "Intermediate", icon: TbBrandVercel },
  { name: "NPM", level: "Advanced", icon: TbBrandNpm },
  // important
  //  { name: "Postman", level: "Intermediate", icon: null },
  // { name: "Netlify", level: "Beginner", icon: null },
];

export type SkillGroup = {
  name: string;
  skillList: Skill[];
};

export type SkillsData = {
  title: string;
  frontend: SkillGroup;
  backend: SkillGroup;
  tools: SkillGroup;
};

export const skills: SkillsData = {
  title: "Full Stack Developer",

  frontend: {
    name: "Frontend",
    skillList: frontendSkills,
  },

  backend: {
    name: "Backend",
    skillList: backendSkills,
  },

  tools: {
    name: "Tools",
    skillList: toolsSkills,
  },
};
