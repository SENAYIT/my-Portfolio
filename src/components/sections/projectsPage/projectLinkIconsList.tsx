import ProjectLinks from "@/components/ui/links/socialLinks";

import { ExternalLink } from "lucide-react";
import { FaGithub } from "react-icons/fa";

export default function ProjectsIconsList({
  projectLinksData,
  showiconName,
}: {
  projectLinksData: {
    name: string;
    href: string;
  }[];
  showiconName: boolean;
}) {
  const liveName = "live demo";
  const githubName = "github";

  return (
    <div className="my-4 flex flex-row items-center space-x-4">
      {/* check by using - <div className="flex gap-3">
        {project.links.github && <a href={project.links.github}>GitHub</a>}
        {project.links.live && <a href={project.links.live}>Live</a>}
      </div> */}
      {projectLinksData.map((link, index) => (
        <ProjectLinks href={link.href} key={index}>
          <div className="flex flex-row items-center space-x-2 hover:text-cyan">
            {link.name && link.name == liveName && (
              <ExternalLink className="w-5 h-5 md:w-6 md:h-6 text-gray-400 hover:text-cyan-400" />
            )}
            {link.name && link.name == githubName && (
              <FaGithub className="w-5 h-5 md:w-6 md:h-6 text-gray-400 hover:text-cyan-400" />
            )}
            {showiconName && <span>{link.name}</span>}
          </div>
        </ProjectLinks>
      ))}
    </div>
  );
}
