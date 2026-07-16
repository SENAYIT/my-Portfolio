import Image from "next/image";
import ProjectsIconsList from "@/components/sections/projectsPage/projectLinkIconsList";
import { Project } from "@/data/myProjects";
import Feature from "../../../components/sections/projectsPage/projectsDetail/feature";
import ProjectDetailTech from "../../../components/sections/projectsPage/projectsDetail/projectDetailTech";
import ProjectContent from "../../../components/sections/projectsPage/projectsDetail/projectContent";

export default function ProjectDetails({ project }: { project: Project }) {
  const {
    name,
    image = "/projects/world_map.jpeg",
    short_description,
    description,
    features,
    techUsed,
    links,
    learning,
  } = project;
  return (
    <section
      className="mx-auto w-full 
    max-w-5xl 
    rounded-3xl
    border
    border-white/10
    bg-[#0b1220]/80
    px-4 
    py-8
    shadow-2xl
    backdrop-blur
    sm:px-6 
    sm:py-10 
    lg:px-8 
    lg:py-12
  "
    >
      {/* Project Image */}
      <div
        className="
      relative 
      h-56 
      w-full 
      overflow-hidden 
      rounded-2xl
      border
      border-white/10
      shadow-xl
      sm:h-80 
      md:h-[400px]
    "
      >
        <Image src={image} alt={name} fill priority className="object-cover" />
      </div>

      {/* Title Section */}
      <div className="mt-8 sm:mt-10">
        <h1
          className="
        text-2xl
        font-bold
        text-white
        sm:text-3xl
        md:text-4xl
      "
        >
          {name}
        </h1>

        <p
          className="
        mt-3
        text-base
        leading-relaxed
        text-slate-300
        sm:mt-4
        sm:text-lg
      "
        >
          {short_description}
        </p>

        {/* Links */}
        <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:gap-4">
          <ProjectsIconsList projectLinksData={links} showiconName={true} />
        </div>
      </div>

      {/* Overview */}
      <div className="mt-10 sm:mt-12">
        <h2
          className="
        mb-3
        text-xl
        font-bold
        text-white
        sm:text-2xl
      "
        >
          Project Overview
        </h2>

        <ProjectContent text={description} />
      </div>

      {/* Features */}
      <div className="mt-10 sm:mt-12">
        <h2
          className="
        mb-5
        text-xl
        font-bold
        text-white
        sm:text-2xl
      "
        >
          Key Features
        </h2>

        <div className="grid grid-cols-1 gap-3 md:grid-cols-2 md:gap-4   ">
          {features.map((feature) => (
            <Feature key={feature} feature={feature} />
          ))}
        </div>
      </div>

      {/* Technologies */}
      <div className="mt-10 sm:mt-12">
        <h2
          className="
        mb-4
        text-xl
        font-bold
        text-white
        sm:text-2xl
      "
        >
          Technologies Used
        </h2>

        <div className="flex flex-wrap gap-2 sm:gap-3">
          {techUsed.map((tech) => (
            <ProjectDetailTech key={tech} tech={tech} />
          ))}
        </div>
      </div>

      {/* Learning */}
      <div className="mt-10 sm:mt-12">
        <h2
          className="
        mb-3
        text-xl
        font-bold
        text-white
        sm:text-2xl
      "
        >
          What I Learned
        </h2>

        <ProjectContent text={learning} />
      </div>
    </section>
  );
}

//  <section className="bg-white mx-auto w-full max-w-5xl px-4 py-8 sm:px-6 sm:py-10 lg:px-8 lg:py-12">
//       {/* Project Image */}
//       <div className="relative h-56 w-full overflow-hidden rounded-xl shadow-lg sm:h-80 md:h-[400px]">
//         <Image src={image} alt={name} fill priority className="object-cover" />
//       </div>

//       {/* Title Section */}
//       <div className="mt-8 sm:mt-10">
//         <h1 className="text-2xl font-bold text-gray-900 dark:text-white sm:text-3xl md:text-4xl">
//           {name}
//         </h1>

//         <p className="mt-3 text-base leading-relaxed text-gray-600 dark:text-gray-300 sm:mt-4 sm:text-lg">
//           {short_description}
//         </p>

//         {/* Links */}
//         <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:gap-4">
//           <ProjectsIconsList projectLinksData={links} showiconName={true} />
//         </div>
//       </div>

//       {/* Overview */}
//       <div className="mt-10 sm:mt-12">
//         <h2 className="mb-3 text-xl font-bold sm:text-2xl  ">
//           Project Overview
//         </h2>

//         <p
//           className="
//           text-sm
//           leading-7
//           text-gray-700
//           dark:text-gray-300
//           sm:text-base
//           sm:leading-8
//         "
//         >
//           {description}
//         </p>
//       </div>

//       {/* Features */}
//       <div className="mt-10 sm:mt-12">
//         <h2 className="mb-5 text-xl font-bold sm:text-2xl  ">Key Features</h2>

//         <div className="grid grid-cols-1 gap-3 md:grid-cols-2 md:gap-4 ">
//           {features.map((feature) => (
//             <div
//               key={feature}
//               className="
//                 flex items-start gap-3
//                 rounded-xl
//                 border
//                 p-4
//                 text-sm
//                 sm:text-base
//               "
//             >
//               <CheckCircle className="mt-1 shrink-0 text-green-500" size={20} />

//               <span>{feature}</span>
//             </div>
//           ))}
//         </div>
//       </div>

//       {/* Technologies */}
//       <div className="mt-10 sm:mt-12">
//         <h2 className="mb-4 text-xl font-bold sm:text-2xl">
//           Technologies Used
//         </h2>

//         <div className="flex flex-wrap gap-2 sm:gap-3">
//           {techUsed.map((tech) => (
//             <span
//               key={tech}
//               className="
//                 rounded-full
//                 bg-gray-100
//                 px-3 py-2
//                 text-xs
//                 font-medium
//                 dark:bg-gray-800
//                 sm:px-4
//                 sm:text-sm
//               "
//             >
//               {tech}
//             </span>
//           ))}
//         </div>
//       </div>

//       {/* Learning */}
//       <div className="mt-10 sm:mt-12">
//         <h2 className="mb-3 text-xl font-bold sm:text-2xl">What I Learned</h2>

//         <p
//           className="
//             text-sm
//             leading-7
//             text-gray-700
//             dark:text-gray-300
//             sm:text-base
//             sm:leading-8
//           "
//         >
//           {learning}
//         </p>
//       </div>
//     </section>
