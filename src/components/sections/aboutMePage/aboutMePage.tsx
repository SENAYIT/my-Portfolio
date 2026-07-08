import PageHeader from "../mainPageContent/pageHeader";
import AboutMeCardSection from "./aboutMeCardSection";
import ContentDisplaySection from "./contentDisplaySection";

export default function AboutMePageSection() {
  return (
    <div className="flex flex-col items-center justify-center gap-4">
      <PageHeader
        headerTitle="About Me"
        headerHeading="Building Digital Products"
        headerSubHeading="Passionate about creating seamless user experiences and scalable systems"
        className=""
      />
      <main className="grid md:grid-cols-2 gap-2">
        <ContentDisplaySection />
        <AboutMeCardSection />
      </main>
    </div>
  );
}

{
  /* <main className=" w-full flex flex-col items-center justify-center gap-4 md:flex md:flex-row md:items-center md:justify-beween">
        <ContentDisplaySection />
        <AboutMeCardSection />
      </main> */
}
{
  /* <main className="flex w-full flex-col gap-4 md:flex-row md:items-start md:justify-between"> */
}
