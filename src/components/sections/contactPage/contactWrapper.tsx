import ContactButton from "./contactButton";
import { ContactMeData } from "../aboutMePage/aboutMeHighlightData";

export default function ContactWrapper() {
  return (
    <div className="flex flex-col items-start justify-center gap-4">
      {ContactMeData.map((data, index) => (
        <ContactButton
          key={index}
          contactName={data.title}
          contactData={data.shortDescription}
        >
          {data.iconName && (
            <div className="bg-gray-800 border border-cyan-900 p-4 rounded-xl">
              <data.iconName className="w-5 h-5 md:w-7 md:h-7 text-cyan-400 " />
            </div>
          )}
        </ContactButton>
      ))}
    </div>
  );
}
