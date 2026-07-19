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
    company: "Personal Projects",
    role: "Full Stack Developer (Self-Directed Projects)",
    location: "Online",
    startDate: "2024",
    endDate: "Present",
    description:
      "Building real-world web applications while improving frontend, backend, database, and authentication skills.",
    responsibilities: [
      "Built responsive websites and full-stack applications using modern technologies.",
      "Developed reusable UI components with React, Next.js, TypeScript, and Tailwind CSS.",
      "Created CRUD applications with RESTful APIs and database integration.",
      "Implemented authentication using JWT, cookies, sessions, and NextAuth.js.",
      "Worked with MongoDB and PostgreSQL for data management.",
      "Added multilingual features and tested APIs using Postman.",
      "Designed interfaces with Figma and deployed applications using Vercel.",
    ],
    techStack: [
      "WordPress",
      "React",
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Node.js",
      "Express.js",
      "MongoDB",
      "PostgreSQL",
      "NextAuth.js",
      "JWT",
      "Postman",
      "Figma",
      "Vercel",
    ],
  },
  {
    company: "Tamcon Software Solution P.L.C | at Addis Ababa ",
    role: "Quality Assurance(QA)Tester",
    location: "Full-Time",
    startDate: "July 07/2024",
    endDate: "Aug 31/2025",
    description:
      "Worked as a Quality Assurance Tester, focusing on manual testing, defect identification, and ensuring reliable software quality.",
    responsibilities: [
      "Designing, executing, and documenting software test cases.",
      "Identifying, reporting, and tracking software defects.",
      "Performed functional, regression,compatibility and usability testing.",
      "Tested APIs using Postman and validated application responses.",
      "Ensuring product quality through manual and automated testing methods.",
      "Collaborating with developers, product managers, and other stakeholders to resolve issues.",
    ],
    techStack: [
      "Postman",
      "Jira",
      "Browser DevTools",
      "REST API Testing",
      "Test Case Documentation",
      "Bug Reporting",
    ],
  },
];
