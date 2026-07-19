import {
  // for frontend
  TbBrandTypescript,
  TbBrandReact,
  TbBrandNextjs,
  TbBrandTailwind,
  TbBrandRedux,
  TbBrandFigma,
  TbBrandJavascript,
  TbBrandHtml5,
  TbBrandCss3,
  //for backend
  TbBrandMysql,
  TbBrandMongodb,
  TbBrandAuth0,
  // for others
  TbBrandWordpress,
  TbBrandGithub,
  TbBrandVscode,
  TbBrandVercel,
} from "react-icons/tb";

import { SiPostman, SiNetlify, SiPostgresql } from "react-icons/si";
import { FaServer, FaLock } from "react-icons/fa";
import { IconType } from "react-icons";

export type level = "Advanced" | "Intermediate" | "Beginner";

export type Skill = {
  name: string;
  level: string;
  icon: IconType;
};

export const frontendSkills: Skill[] = [
  { name: "HTML", level: "Advanced", icon: TbBrandHtml5 },
  { name: "CSS", level: "Advanced", icon: TbBrandCss3 },
  { name: "JavaScript", level: "Intermediate", icon: TbBrandJavascript },
  { name: "TypeScript", level: "Intermediate", icon: TbBrandTypescript },
  { name: "React", level: "Intermediate", icon: TbBrandReact },
  { name: "Next.js", level: "Intermediate", icon: TbBrandNextjs },
  { name: "Tailwind CSS", level: "Intermediate", icon: TbBrandTailwind },
  { name: "Redux", level: "Intermediate", icon: TbBrandRedux },
  { name: "Figma", level: "Beginner", icon: TbBrandFigma },
];

export const backendSkills: Skill[] = [
  { name: "JWT Authentication", level: "Intermediate", icon: TbBrandAuth0 },
  { name: "NextAuth", level: "Intermediate", icon: FaLock },
  { name: "REST API", level: "Intermediate", icon: FaServer },
  { name: "MongoDB", level: "Beginner", icon: TbBrandMongodb },
  { name: "PostgreSQL", level: "Intermediate", icon: SiPostgresql },
  { name: "MySQL", level: "Beginner", icon: TbBrandMysql },
];

export const toolsSkills: Skill[] = [
  { name: "WordPress", level: "Intermediate", icon: TbBrandWordpress },
  { name: "GitHub", level: "Intermediate", icon: TbBrandGithub },
  { name: "VS Code", level: "Intermediate", icon: TbBrandVscode },
  { name: "Vercel", level: "Intermediate", icon: TbBrandVercel },
  { name: "Postman", level: "Intermediate", icon: SiPostman },
  { name: "Netlify", level: "Intermediate", icon: SiNetlify },
  { name: "Figma", level: "Beginner", icon: TbBrandFigma },
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
