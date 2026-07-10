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
    company: "Learning Projects",
    role: "Full Stack Developer (Practice)",
    location: "online",
    startDate: "2026",
    endDate: "Present",
    description:
      "Focused on learning full-stack development and building real-world Project applications.",
    responsibilities: [
      "Built CRUD applications",
      "Practiced authentication systems (with JWT and Next Auth)",
      "Practiced handling the website in multilanguages (with  Next i18)",
      "Worked with databases (MongoDB, PostgreSQL)",
      "Learned API development with Express",
    ],
    techStack: [
      "React",
      "Next.js",
      "TypeScript",
      "Express.js",
      "MongoDB",
      "PostgreSQL",
      "Postman",
      "Node.js",
    ],
  },
  {
    company: "Personal Projects",
    role: "Frontend Developer",
    location: "Online",
    startDate: "2024",
    endDate: "Current",
    description:
      "Built modern and responsive portfolio websites and web applications using WordPress, React, Next.js, and modern frontend technologies.",
    responsibilities: [
      "Developed personal portfolio websites and real-world web projects.",
      "Designed and built reusable UI components with clean and maintainable code.",
      "Created responsive layouts optimized for desktop and mobile devices.",
      "Improved website performance, SEO, and overall user experience.",
      "Designed interfaces using Figma and deployed applications using Vercel.",
    ],
    techStack: [
      "WordPress",
      "HTML",
      "CSS",
      "JavaScript",
      "TypeScript",
      "React",
      "Next.js",
      "Tailwind CSS",
      "Figma",
      "Vercel",
    ],
  },
  {
    company: "Tamcon Software Solution P.L.C l  at Addis Ababa ",
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
