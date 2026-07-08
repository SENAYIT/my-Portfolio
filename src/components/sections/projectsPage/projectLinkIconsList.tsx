import ProjectLinks from "@/components/ui/links/socialLinks";

import { ExternalLink } from "lucide-react";
import { FaGithub } from "react-icons/fa";

type ProjectLink = {
  name: "live demo" | "github";
  href: string;
};

export default function ProjectsIconsList({
  projectLinksData,
  showiconName = false,
}: {
  projectLinksData: ProjectLink[];
  showiconName?: boolean;
}) {
  return (
    <div className="my-4 flex flex-row items-center gap-4">
      {projectLinksData.map((link) => (
        <ProjectLinks href={link.href} key={link.name}>
          <div className="flex items-center gap-2 hover:text-cyan-400">
            {link.name === "live demo" && (
              <ExternalLink className="h-5 w-5 text-gray-400 hover:text-cyan-400" />
            )}

            {link.name === "github" && (
              <FaGithub className="h-5 w-5 text-gray-400 hover:text-cyan-400" />
            )}

            {showiconName && <span>{link.name}</span>}
          </div>
        </ProjectLinks>
      ))}
    </div>
  );
}
