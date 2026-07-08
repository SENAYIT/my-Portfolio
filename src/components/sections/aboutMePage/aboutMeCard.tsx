import AboutMeCardUI from "@/components/ui/CardUI/aboutMeCardUI";

interface AboutMeCardProps {
  title: string;
  shortDescription: string;
  children?: React.ReactNode;
}

export default function AboutMeCard({
  title,
  shortDescription,
  children,
}: AboutMeCardProps) {
  return (
    <AboutMeCardUI>
      <div className="flex flex-col items-start gap-2">
        {children}
        <p className="text-base md:text-lg text-gray-500">{title}</p>
        <p className="font-bold text-white">{shortDescription}</p>
      </div>
    </AboutMeCardUI>
  );
}
