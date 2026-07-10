export type Service = {
  id: number;
  name: string;
  image?: string;
  description: string;
  offers: string[];
  techSkills: string[];
  workPositions: string[];
};

export const services: Service[] = [
  {
    id: 1,
    name: "WordPress Website Development",
    image: "/servicesImage/world_map.jpeg",
    description:
      "Professional WordPress websites that are responsive, user-friendly, and tailored to your business needs.",
    offers: [
      "Business Website",
      "Portfolio Website",
      "Landing Page",
      "Elementor Customization",
      "Theme & Plugin Setup",
      "Contact Forms",
      "Responsive Design",
      "Basic SEO Optimization",
    ],
    techSkills: [
      "WordPress",
      "Elementor",
      "HTML5",
      "CSS3",
      "JavaScript",
      "Responsive Design",
      "SEO Basics",
    ],
    workPositions: [
      "WordPress Developer",
      "Frontend Developer",
      "Website Designer",
    ],
  },
  {
    id: 2,
    name: "React & Next.js Frontend Development",
    image: "/servicesImage/world_map.jpeg",
    description:
      "Modern, responsive frontend applications built with React, Next.js, and TypeScript.",
    offers: [
      "Responsive Web Interfaces",
      "React Development",
      "Next.js Development",
      "Reusable Components",
      "REST API Integration",
      "Dashboard Development",
      "Performance Optimization",
      "Cross-Browser Compatibility",
    ],
    techSkills: [
      "React",
      "Next.js",
      "TypeScript",
      "JavaScript",
      "Tailwind CSS",
      "HTML5",
      "CSS3",
      "REST API",
      "Git & GitHub",
    ],
    workPositions: [
      "Frontend Developer",
      "React Developer",
      "Next.js Developer",
      "UI Developer",
    ],
  },
  {
    id: 3,
    name: "Website Redesign & Modernization",
    image: "/servicesImage/world_map.jpeg",
    description:
      "Transform outdated websites into modern, responsive, and visually appealing experiences.",
    offers: [
      "Website Redesign",
      "UI/UX Improvements",
      "Responsive Layout Updates",
      "WordPress Customization",
      "React Frontend Migration",
      "Performance Improvements",
      "Bug Fixes",
      "Website Maintenance",
    ],
    techSkills: [
      "WordPress",
      "React",
      "Next.js",
      "TypeScript",
      "JavaScript",
      "Tailwind CSS",
      "HTML5",
      "CSS3",
      "Responsive Design",
    ],
    workPositions: [
      "Web Developer",
      "Frontend Developer",
      "WordPress Developer",
      "UI Developer",
    ],
  },
];
