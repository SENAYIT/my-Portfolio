export type level = "Advanced" | "Intermediate" | "Beginner";

export type Skill = {
  name: string;
  level: string;
};

export const frontendSkills: Skill[] = [
  { name: "HTML", level: "Advanced" },
  { name: "CSS", level: "Advanced" },
  { name: "JavaScript", level: "Intermediate" },
  { name: "TypeScript", level: "Intermediate" },
  { name: "React", level: "Intermediate" },
  { name: "Next.js", level: "Intermediate" },
  { name: "Tailwind CSS", level: "Intermediate" },
  { name: "Redux", level: "Intermediate" },
  { name: "Figma", level: "Beginner" },
];

export const backendSkills: Skill[] = [
  { name: "JWT Authentication", level: "Intermediate" },
  { name: "NextAuth", level: "Intermediate" },
  { name: "REST API", level: "Intermediate" },
  { name: "MongoDB", level: "Beginner" },
  { name: "PostgreSQL", level: "Intermediate" },
  { name: "MySQL", level: "Beginner" },
];

export const toolsSkills: Skill[] = [
  { name: "WordPress", level: "Intermediate" },
  { name: "GitHub", level: "Intermediate" },
  { name: "VS Code", level: "Intermediate" },
  { name: "Vercel", level: "Intermediate" },
  { name: "Postman", level: "Intermediate" },
  { name: "Netlify", level: "Intermediate" },
  { name: "Figma", level: "Beginner" },
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
