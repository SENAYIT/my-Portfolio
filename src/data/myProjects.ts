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
  short_description: string;
  description: string;
  features: string[];
  links: ProjectLink[];
  techUsed: string[];
  learning: string;
};

export const myProjects: Project[] = [
  {
    id: "1wordpress",
    name: "Acupuncture In Addis",
    projectCategory: "wordpress",
    image: "/projects/world_map.jpeg",

    short_description:
      "A professional WordPress website developed for Acupuncture In Addis. The website is responsive, SEO-optimized, and designed to provide users with a smooth experience when exploring acupuncture services.",

    description: `Acupuncture In Addis is a real-world WordPress website created to establish a professional online presence for an acupuncture service provider.

      The project focuses on building a clean, responsive, and user-friendly website where visitors can learn about services, understand available treatments, and easily contact the business.

      I developed the website using WordPress and Elementor, applying modern web design principles such as responsive layouts, optimized page structure, and SEO-friendly content organization.

      This project demonstrates my ability to create professional business websites based on real client requirements while focusing on usability, performance, and visual design.`,

    features: [
      "Responsive design for desktop, tablet, and mobile devices",
      "Professional service-based website structure",
      "SEO-friendly page organization",
      "Easy-to-manage WordPress content",
      "Custom page design using Elementor",
      "User-friendly navigation and layout",
    ],

    links: [
      {
        name: "live demo",
        href: "https://acupunctureinaddis.com",
      },
      {
        name: "github",
        href: "",
      },
    ],

    techUsed: [
      "WordPress",
      "Elementor",
      "HTML",
      "CSS",
      "Responsive Design",
      "SEO",
    ],

    learning:
      "Through this project, I gained practical experience in WordPress development, Elementor customization, responsive web design, website optimization, and creating professional websites based on real business needs.",
  },

  {
    id: "2f",
    name: "Geo Location",
    projectCategory: "frontend",
    image: "/projects/world_map.jpeg",

    short_description:
      "A location-based web application that allows users to explore countries and view detailed geographical information using external APIs.",

    description: `Geo Location is an interactive web application that provides detailed information about countries around the world.

      The application retrieves country data from external APIs and presents information through a clean and responsive user interface. Users can explore country details, geographical information, and location-based data in an organized way.

      This project focuses on frontend development concepts including API integration, asynchronous data handling, responsive design, and creating interactive user experiences.

      It demonstrates my ability to connect frontend applications with external services and transform API data into meaningful information for users.`,

    features: [
      "Search and explore country information",
      "Integration with external REST APIs",
      "Dynamic data rendering",
      "Responsive user interface",
      "Clean and organized information display",
      "Client-side data fetching",
    ],

    links: [
      {
        name: "live demo",
        href: "https://yourwebsite.com",
      },
      {
        name: "github",
        href: "https://github.com/SENAYIT/my-portfolio",
      },
    ],

    techUsed: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "REST API",
      "API Integration",
    ],

    learning:
      "This project improved my understanding of working with APIs, handling asynchronous operations, managing external data, and building responsive frontend applications using modern React and Next.js practices.",
  },

  {
    id: "3f",
    name: "Next.js Dashboard",
    projectCategory: "fullstack",
    image: "/projects/opengraph-image.png",

    short_description:
      "A full-stack dashboard application with authentication, protected routes, CRUD operations, and PostgreSQL database integration. Users can securely manage data through a responsive dashboard interface.",

    description: `This full-stack dashboard application was developed by following the official Next.js Dashboard App learning course from Next.js.

      The project demonstrates how to build a production-style application using modern full-stack development practices. It includes secure authentication, protected routes, database integration, CRUD operations, form validation, and responsive dashboard interfaces.

      Users can securely log in, access protected dashboard pages, manage application data, and interact with dynamic dashboard features.

      During development, I gained hands-on experience with the Next.js App Router, React Server Components, server actions, TypeScript type safety, PostgreSQL database operations, authentication workflows, and scalable application architecture.

      This project strengthened my understanding of connecting frontend components, backend logic, and databases together to create complete full-stack applications.`,

    features: [
      "User authentication and secure login system",
      "Protected dashboard routes",
      "Complete CRUD functionality",
      "PostgreSQL database integration",
      "Form validation and error handling",
      "Responsive dashboard interface",
      "Reusable React components",
      "Optimized data fetching with Next.js",
    ],

    links: [
      {
        name: "live demo",
        href: "https://next-js-dashboard-topaz-mu.vercel.app/",
      },
      {
        name: "github",
        href: "https://github.com/SENAYIT/NextJs_Dashboard",
      },
    ],

    techUsed: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "NextAuth.js",
      "PostgreSQL",
      "Zod",
      "Vercel",
      "Git",
    ],

    learning:
      "Through this project, I improved my understanding of full-stack development using Next.js. I learned how authentication systems, databases, server components, server actions, and frontend interfaces work together to create scalable production-ready applications.",
  },
];
