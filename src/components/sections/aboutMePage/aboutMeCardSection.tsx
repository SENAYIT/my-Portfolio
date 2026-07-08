import AboutMeCard from "./aboutMeCard";
import { aboutMeData } from "./aboutMeHighlightData";

export default function AboutMeCardSection() {
  return (
    <section>
      <div className="grid grid-cols-2 gap-4">
        {aboutMeData.map((data, index) => (
          <AboutMeCard
            key={index}
            title={data.title}
            shortDescription={data.shortDescription}
          >
            {data.iconName && (
              <data.iconName className="w-7 h-7 md:w-8 md:h-8 text-cyan-400" />
            )}
          </AboutMeCard>
        ))}
      </div>
    </section>
  );
}
