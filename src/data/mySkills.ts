export type Skill = {
  name: string;
  level: string;
};

export const frontendSkills: Skill[] = [
  { name: "HTML", level: "Advanced" },
  { name: "CSS", level: "Advanced" },
  { name: "JavaScript", level: "Advanced" },
  { name: "TypeScript", level: "Intermediate" },
  { name: "React", level: "Advanced" },
  { name: "Next.js", level: "Intermediate" },
  { name: "Tailwind CSS", level: "Advanced" },
  { name: "Redux", level: "Intermediate" },
  { name: "Git", level: "Intermediate" },
  { name: "Figma", level: "Beginner" },
];

export const backendSkills: Skill[] = [
  { name: "Node.js", level: "Intermediate" },
  { name: "MySQL", level: "Intermediate" },
  { name: "MongoDB", level: "Intermediate" },
  { name: "Prisma", level: "Beginner" },
  { name: "JWT Authentication", level: "Intermediate" },
  // important
  //  { name: "Express.js", level: "Beginner" },//
  // { name: "REST API", level: "Advanced"}, //
  // { name: "GraphQL", level: "Beginner" },
  // { name: "PostgreSQL", level: "Intermediate" },
];

export const toolsSkills: Skill[] = [
  { name: "Git", level: "Intermediate" },
  { name: "GitHub", level: "Advanced" },
  { name: "VS Code", level: "Advanced" },
  { name: "Figma", level: "Beginner" },
  { name: "Vercel", level: "Intermediate" },
  { name: "NPM", level: "Advanced" },
  // important
  //  { name: "Postman", level: "Intermediate" },
  // { name: "Netlify", level: "Beginner" },
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
