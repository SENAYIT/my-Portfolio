export type Experience = {
  company: string;
  role: string;
  location?: string;
  startDate: string;
  endDate: string | "Present";
  description: string;
  responsibilities: string[];
  techStack: string[];
};
export const experiences: Experience[] = [
  {
    company: "Freelance / Personal Projects",
    role: "Frontend Developer",
    location: "Remote",
    startDate: "2024",
    endDate: "Present",
    description:
      "Building modern, responsive web applications using React and Next.js.",
    responsibilities: [
      "Developed multiple portfolio and dashboard projects",
      "Built reusable UI components",
      "Improved performance and responsive design",
      "Integrated REST APIs",
    ],
    techStack: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Node.js"],
  },
  {
    company: "Learning Projects",
    role: "Full Stack Developer (Practice)",
    location: "Remote",
    startDate: "2023",
    endDate: "2024",
    description:
      "Focused on learning full-stack development and building real-world clone applications.",
    responsibilities: [
      "Built CRUD applications",
      "Practiced authentication systems (JWT)",
      "Worked with databases (MongoDB, PostgreSQL)",
      "Learned API development with Express",
    ],
    techStack: [
      "React",
      "Express.js",
      "MongoDB",
      "PostgreSQL",
      "JWT",
      "Node.js",
    ],
  },
];
