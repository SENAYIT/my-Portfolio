import ViewProjectsLink from "@/components/sections/homePage/viewProjects";
import MySocialMediaLinks from "./mySocialLinks";
import DownloadResumeButton from "./downloadResumeButton";

export default function HeroPageLinks() {
  return (
    <div className="flex flex-col items-start gap-8">
      <div className="flex flex-col gap-4 md:flex md:flex-row  md:space-x-4">
        <DownloadResumeButton />

        <ViewProjectsLink />
      </div>

      <MySocialMediaLinks />
    </div>
  );
}
