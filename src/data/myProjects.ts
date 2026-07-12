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
    name: "All Js Projects",
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
    name: "Admin-Dashboard Project",
    projectCategory: "frontend",
    image: "/projects/world_map.jpeg",
    description: "This Project has all CRUD features.",
    links: [
      { name: "live demo", href: "https://yourwebsite.com" },
      { name: "github", href: "https://github.com/SENAYIT/my-portfolio" },
    ],
    techUsed: ["React", "Redux", "Tailwind CSS"],
  },

  {
    id: "1b",
    name: "All NextJs Projects ",
    projectCategory: "backend",
    image: "/projects/world_map.jpeg",
    description: "project description",
    links: [
      { name: "live demo", href: "https://yourwebsite.com" },
      { name: "github", href: "https://github.com/SENAYIT/my-portfolio" },
    ],
    techUsed: ["teck1", "teck2"],
  },
  {
    id: "2b",
    name: "All React Projects",
    projectCategory: "backend",
    image: "/projects/world_map.jpeg",
    description: "Personal portfolio built with Next.js and Tailwind CSS.",
    links: [
      { name: "live demo", href: "https://yourwebsite.com" },
      { name: "github", href: "https://github.com/SENAYIT/my-portfolio" },
    ],
    techUsed: ["Next.js", "React", "Tailwind CSS", "TypeScript"],
  },

  // all projects that i have done while I am learning , react js

  {
    id: "2React_vitejs_investmentCalculator ",
    name: "Investment Calculator",
    projectCategory: "frontend",
    image: "/projects/world_map.jpeg",
    description:
      "It is a react js vite project and it has the following features - it accepts the initial investment , time , interest , due date  and Calculates the value and Show each results or Values in each year by using the table",
    links: [
      {
        name: "live demo",
        href: "   https://vercel.com/senayits-projects/react-js-vite-project-2-investment_essentials-practice",
      },
      { name: "github", href: "https://github.com/SENAYIT/my-portfolio" },
    ],
    techUsed: ["React.js", "JS", "CSS", "Html"],
  },

  {
    id: "5React_vitejs_Project_list_Management ",
    name: "Project list Management ",
    projectCategory: "backend",
    image: "/projects/world_map.jpeg",
    description:
      "It is a react js vite project and it has the following features - Adding the new Project with its Task , Showing all the Project lists that Added ,looking the project detail , and Clear the project's Task , and  Deleting the Project",
    links: [
      {
        name: "live demo",
        href: "https://react-js-vite-project-5-project-lis.vercel.app/",
      },
      { name: "github", href: "https://github.com/SENAYIT/my-portfolio" },
    ],
    techUsed: ["React.js", "JS", "CSS", "Html"],
  },
  {
    id: "6React_viteJS-Cart",
    name: "Cart ",
    projectCategory: "frontend",
    image: "/projects/world_map.jpeg",
    description:
      "It is a react js vite project and it has the following features -shows the list of selling closthed with their image and description , - it can add the items to the cart and shows the total price of it , - and it can reduce the total price and quantity  ",
    links: [
      {
        name: "live demo",
        href: "https://reactjs-vite-project-6-cart.vercel.app/",
      },
      { name: "github", href: "https://github.com/SENAYIT/my-portfolio" },
    ],
    techUsed: ["React.js", "JS", "CSS", "Html"],
  },
  {
    id: "7React_viteJS7-place-picker",
    name: "Place Picker ",
    projectCategory: "frontend",
    image: "/projects/world_map.jpeg",
    description:
      "It is a react js vite project and it has the following features -shows the list of available visiting places based on your location, - and it collects the selected places that you want to visit or visted places at the container and shows ",
    links: [
      {
        name: "live demo",
        href: "https://reactjs-vite-project-7-place-picker.vercel.app/",
      },
      { name: "github", href: "https://github.com/SENAYIT/my-portfolio" },
    ],
    techUsed: ["React.js", "JS", "CSS", "Html"],
  },
  {
    id: "8React_vitejs_reactQuiz",
    name: "React Quiz ",
    projectCategory: "frontend",
    image: "/projects/world_map.jpeg",
    description:
      "It is a react js vite project and it has the following features -shows the Quiz and its time remaining bar, - at the end of the test , it shows the result of the quize in percentage (the skipped questions , and the correct and wrong answers ) with its description ",
    links: [
      {
        name: "live demo",
        href: "https://react-js-vite-project-8-react-quiz.vercel.app/",
      },
      { name: "github", href: "https://github.com/SENAYIT/my-portfolio" },
    ],
    techUsed: ["React.js", "JS", "CSS", "Html"],
  },

  {
    id: "23React_vitejs_react_challenges",
    name: "React Challenges ",
    projectCategory: "frontend",
    image: "/projects/world_map.jpeg",
    description:
      "It is a react js vite project and it has the following features -it registered the challengs tasks and show its list , - after it shows the active challenges , - it shows the failed challenges list ,  - it shows the completed challenges list",
    links: [
      {
        name: "live demo",
        href: "https://react-js-vite-project-23-reactchall.vercel.app/",
      },
      { name: "github", href: "https://github.com/SENAYIT/my-portfolio" },
    ],
    techUsed: ["React.js", "JS", "CSS", "Html"],
  },

  // for the react post full stack project - currently not working
  {
    id: "1_React_Projects_reactPost",
    name: "React Post ",
    projectCategory: "fullstack",
    image: "/projects/world_map.jpeg",
    description: "A React Post Project ",
    links: [
      {
        name: "live demo",
        href: "https://full-stack-react-js-vite-project-30-nu.vercel.app/",
      },
      { name: "github", href: "https://github.com/SENAYIT/my-portfolio" },
    ],
    techUsed: ["ReactJS", "JS", " CSS", "HTML"],
  },

  // all js Projects list

  {
    id: "1_JsProjects_geolocation",
    name: "Geo location",
    projectCategory: "frontend",
    image: "/projects/world_map.jpeg",
    description:
      "A Geo Location Project that can help you , the location of Country and all Details about that country.",
    links: [
      {
        name: "live demo",
        href: "https://geolocation-with-js-html.vercel.app/",
      },
      { name: "github", href: "https://github.com/SENAYIT/my-portfolio" },
    ],
    techUsed: ["JS", " CSS", "HTML"],
  },

  {
    id: "2_JsProjects_Bankist",
    name: "Bankist",
    projectCategory: "frontend",
    image: "/projects/world_map.jpeg",
    description:
      "A Bankist  Project that has the following features - it has login features , - it shows current balance and its transaction history with date order, - it has transfer , asking loan , and close account features",
    links: [
      {
        name: "live demo",
        href: "https://bankist-with-js-html.vercel.app/",
      },
      { name: "github", href: "https://github.com/SENAYIT/my-portfolio" },
    ],
    techUsed: ["JS", " CSS", "HTML"],
  },
];
