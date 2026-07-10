import GoToLink from "@/components/ui/links/goToLink";
import { ArrowRight } from "@/components/icons/lucidIcons";

export default function ViewProjectsLink() {
  return (
    <GoToLink
      href="/projects"
      className="text-white bg-gray-600 hover:bg-gray-500 transition-colors duration-200 rounded-md px-4 py-2"
    >
      <div className="flex flex-row items-center space-x-2">
        <span>View Projects</span>
        <ArrowRight className="w-5 h-5" />
      </div>
    </GoToLink>
  );
}
