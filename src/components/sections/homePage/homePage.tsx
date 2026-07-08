import HeroPageHeader from "../mainPageContent/heroPageHeader";
import HeroPageLinks from "./heroPageLinks";
import RotationImage from "./rotationImage";
import AnimateBounce from "./animateBounce";
import { myData, Mydata } from "@/data/myData";

export default function HomePageSection() {
  const { name, title, heroDescription } = myData;

  return (
    <div className="flex flex-col gap-1">
      <div className="md:flex md:flex-row md:items-center md:justify-between md:pr-45 ">
        {/* for the homepagecontent */}
        <div className="flex flex-col items-start gap-8 w-auto md:w-2xl">
          <HeroPageHeader
            headerTitle={`Hi, I'm ${name}`}
            headerHeading={title}
            headerSubHeading={heroDescription}
            className="items-start justify-center w-auto md:gap-6"
          />
          <HeroPageLinks />
        </div>
        <div className="hidden md:block">
          <RotationImage />
        </div>
      </div>
      <div className="flex items-center justify-center">
        <AnimateBounce />
      </div>
    </div>
  );
}
