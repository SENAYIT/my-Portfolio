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
    image: "/projects/acupuncture_logo.jpg",
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
        href: "/projects",
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
  // will uncomment after fixed external api issues
  //   {
  //     id: "2f",
  //     name: "Geo Location",
  //     projectCategory: "frontend",
  //     image: "/projects/world_map.jpeg",

  //     short_description:
  //       "A location-based web application that allows users to know where they are , explore countries and view detailed geographical information using external APIs.",

  //     description: `Geo Location is an interactive web application that provides detailed information about countries around the world.
  //  The application retrieves country data from external APIs and presents information through a clean and responsive user interface. Users can explore country details, geographical information, and location-based data in an organized way.
  //  This project focuses on frontend development concepts including API integration, asynchronous data handling, responsive design, and creating interactive user experiences.
  //  It demonstrates my ability to connect frontend applications with external services and transform API data into meaningful information for users.`,

  //     features: [
  //       "Search and explore country information",
  //       "Integration with external REST APIs",
  //       "Dynamic data rendering",
  //       "Responsive user interface",
  //       "Clean and organized information display",
  //       "Client-side data fetching",
  //     ],

  //     links: [
  //       {
  //         name: "live demo",
  //         href: "https://geolocation-with-js-html.vercel.app/",
  //       },
  //       {
  //         name: "github",
  //         href: "https://github.com/SENAYIT/Geolocation_with_Js-html",
  //       },
  //     ],

  //     techUsed: [
  //       "Next.js",
  //       "React",
  //       "TypeScript",
  //       "Tailwind CSS",
  //       "REST API",
  //       "API Integration",
  //     ],

  //     learning:
  //       "This project improved my understanding of working with APIs, handling asynchronous operations, managing external data, and building responsive frontend applications using modern React and Next.js practices.",
  //   },

  {
    id: "3f",
    name: "Next.js Dashboard",
    projectCategory: "fullstack",
    image: "/projects/opengraph-image.png",

    short_description: `A full-stack dashboard application with authentication, protected routes, CRUD operations, and PostgreSQL database integration. Admins can securely manage data through a responsive dashboard interface.
       Note: Admin Dashboard demo credentials included below. 
 => email: 'user@nextmail.com'  
 => password: '123456'`,

    description: `This full-stack dashboard application was developed by following the official Next.js Dashboard App learning course from Next.js.
 The project demonstrates how to build a production-style application using modern full-stack development practices. 
 It includes secure authentication, protected routes, database integration, CRUD operations, form validation, and responsive dashboard interfaces.
 Admins can securely log in, access protected dashboard pages, manage application data, and interact with dynamic dashboard features.
 During development, I gained hands-on experience with the Next.js App Router, React Server Components, server actions, TypeScript type safety, PostgreSQL database operations, authentication workflows, and scalable application architecture.
 This project strengthened my understanding of connecting frontend components, backend logic, and databases together to create complete full-stack applications. 
      
 Note: Admin Dashboard demo credentials included below. 
 => email: 'user@nextmail.com'  
 => password: '123456'`,

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
      "GitHub",
    ],

    learning:
      "Through this project, I improved my understanding of full-stack development using Next.js. I learned how authentication systems, databases, server components, server actions, and frontend interfaces work together to create scalable production-ready applications.",
  },

  // for the projects that i have practiced through learning

  {
    id: "6React_viteJS-Cart",
    name: "Shopping Cart",
    projectCategory: "frontend",
    image: "/projects/practice/cart.png",
    short_description:
      "A React shopping cart application that manages products and calculates total prices.",
    description: `It is a React.js Vite project that displays products with images and descriptions. 
      Users can add products to the cart, increase quantity, decrease quantity, and calculate total price.`,
    features: [
      "Display product list",
      "Add products to cart",
      "Increase and decrease product quantity",
      "Calculate total cart price",
      "Manage cart state dynamically",
    ],
    links: [
      {
        name: "live demo",
        href: "https://reactjs-vite-project-6-cart.vercel.app/",
      },
      {
        name: "github",
        href: "https://github.com/SENAYIT/reactjs_vite_Project_6_Cart_while_advancedStateLesson",
      },
    ],
    techUsed: ["React.js", "JavaScript", "CSS", "HTML"],
    learning:
      "Learned React state management, reusable components, event handling, and dynamic UI updates.",
  },

  {
    id: "5React_vitejs_Project_list_Management",
    name: "Project List Management",
    projectCategory: "frontend",
    image: "/projects/practice/projectListManagement.png",
    short_description:
      "A React project management application for creating and managing projects and tasks.",
    description:
      "It is a React.js Vite project that allows users to add projects with tasks, view project details, clear tasks, and delete projects.",
    features: [
      "Create new projects",
      "Add and manage project tasks",
      "View project details",
      "Delete projects",
      "Clear completed tasks",
      "Responsive UI design",
    ],
    links: [
      {
        name: "live demo",
        href: "https://react-js-vite-project-5-project-lis.vercel.app/",
      },
      {
        name: "github",
        href: "https://github.com/SENAYIT/react_js_vite_Project_5_ProjectListManagement",
      },
    ],
    techUsed: ["React.js", "JavaScript", "CSS", "HTML"],
    learning:
      "Learned React state management, component communication, conditional rendering, and managing application data.",
  },

  {
    id: "2React_vitejs_investmentCalculator",
    name: "Investment Calculator",
    projectCategory: "frontend",
    image: "/projects/practice/investment-calculator-logo.png",
    short_description:
      "A React + Vite investment calculator that calculates yearly investment growth based on user inputs.",
    description: `It is a React.js Vite project that accepts initial investment, duration, interest rate, and annual contribution.
       It calculates the investment growth and displays yearly results in a table.`,
    features: [
      "Calculate investment growth based on user inputs",
      "Display yearly investment results in a table",
      "Handle user input dynamically",
      "Responsive design for mobile and tablet devices",
    ],
    links: [
      {
        name: "live demo",
        href: "https://react-js-vite-project-2-investmente.vercel.app/",
      },
      {
        name: "github",
        href: "https://github.com/SENAYIT/react_js_vite_Project_2-essentials-Practice",
      },
    ],
    techUsed: ["React.js", "JavaScript", "CSS", "HTML"],
    learning:
      "Learned React component structure, state management, handling user inputs, and rendering dynamic data.",
  },

  {
    id: "7React_viteJS7-place-picker",
    name: "Place Picker",
    projectCategory: "frontend",
    image: "/projects/practice/visitingPlaces.png",
    short_description:
      "A React location picker application for selecting and managing favorite places.",
    description:
      "It is a React.js Vite project that displays available visiting places based on location and allows users to select and manage visited or favorite places.",
    features: [
      "Display available places",
      "Select favorite locations",
      "Manage selected places",
      "Use browser location features",
      "Responsive interface",
    ],
    links: [
      {
        name: "live demo",
        href: "https://reactjs-vite-project-7-place-picker.vercel.app/",
      },
      {
        name: "github",
        href: "https://github.com/SENAYIT/reactjs_vite_Project_7_PlacePickerforVisit",
      },
    ],
    techUsed: ["React.js", "JavaScript", "CSS", "HTML"],
    learning:
      "Learned working with browser APIs, state updates, component rendering, and user interactions.",
  },

  {
    id: "8React_vitejs_reactQuiz",
    name: "React Quiz",
    projectCategory: "frontend",
    image: "/projects/practice/quiz-logo.png",
    short_description:
      "A React quiz application with timer, scoring system, and final performance summary.",
    description:
      "It is a React.js Vite project that provides timed quizzes and displays final results including percentage score, skipped questions, correct answers, and wrong answers.",
    features: [
      "Timed quiz questions",
      "Progress tracking",
      "Calculate final score percentage",
      "Show correct and incorrect answers",
      "Display quiz summary",
    ],
    links: [
      {
        name: "live demo",
        href: "https://react-js-vite-project-8-react-quiz.vercel.app/",
      },
      {
        name: "github",
        href: "https://github.com/SENAYIT/react_js_vite_Project_8_ReactQuiz",
      },
    ],
    techUsed: ["React.js", "JavaScript", "CSS", "HTML"],
    learning:
      "Learned React state management, timers, conditional rendering, and building interactive applications.",
  },

  {
    id: "23React_vitejs_react_challenges",
    name: "React Challenges",
    projectCategory: "frontend",
    image: "/projects/practice/vite.svg",
    short_description:
      "A React challenge tracker application for managing active, completed, and failed challenges.",
    description:
      "It is a React.js Vite project that registers challenge tasks and separates them into active, failed, and completed categories.",
    features: [
      "Create challenge tasks",
      "Track active challenges",
      "Show completed challenges",
      "Show failed challenges",
      "Manage challenge status",
    ],
    links: [
      {
        name: "live demo",
        href: "https://react-js-vite-project-23-reactchall.vercel.app/",
      },
      {
        name: "github",
        href: "https://github.com/SENAYIT/react_js_vite_Project_23_ReactchallengesRegistered",
      },
    ],
    techUsed: ["React.js", "JavaScript", "CSS", "HTML"],
    learning:
      "Learned advanced component design, managing complex state, and organizing application logic.",
  },

  // will uncomment after fix the backend issues
  // {
  //   id: "1_React_Projects_reactPost",
  //   name: "React Post",
  //   projectCategory: "fullstack",
  //   image: "/projects/practice/vite.svg",
  //   short_description:
  //     "A full-stack React post application for creating and managing posts.",
  //   description: "A React Post project built with React.js and Vite.",
  //   features: [
  //     "Create posts",
  //     "Display post lists",
  //     "Manage post data",
  //     "Connect frontend with backend APIs",
  //   ],
  //   links: [
  //     {
  //       name: "live demo",
  //       href: "https://full-stack-react-js-vite-project-30-nu.vercel.app/",
  //     },
  //     {
  //       name: "github",
  //       href: "https://github.com/SENAYIT/FullStack_react_js_vite_Project_30_ReactPost",
  //     },
  //   ],
  //   techUsed: ["React.js", "JavaScript", "CSS", "HTML"],
  //   learning:
  //     "Learned frontend and backend communication, API integration, and full-stack project structure.",
  // },

  {
    id: "2_JsProjects_Bankist",
    name: "Bankist",
    projectCategory: "frontend",
    image: "/projects/practice/bankist.png",
    short_description: "A banking dashboard simulation built with JavaScript.",
    description:
      "A Bankist project with login functionality, account balance display, transaction history, money transfer, loan requests, and account closing features.",
    features: [
      "User login system",
      "Display account balance",
      "Transaction history",
      "Transfer money",
      "Request loans",
      "Close account",
    ],
    links: [
      {
        name: "live demo",
        href: "https://bankist-with-js-html.vercel.app/",
      },
      {
        name: "github",
        href: "https://github.com/SENAYIT/bankist_with_js_html",
      },
    ],
    techUsed: ["JavaScript", "CSS", "HTML"],
    learning:
      "Learned JavaScript DOM manipulation, array methods, events, and building interactive applications.",
  },
];
