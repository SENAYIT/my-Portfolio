import MySocialMediaLinks from "../homePage/mySocialLinks";
import PageHeader from "../mainPageContent/pageHeader";
import ContactWrapper from "./contactWrapper";
import Map from "./googleMap";

export default function ContactPageSection() {
  const mapSrc =
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2679.897542210394!2d38.816132899368874!3d9.005829404236957!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x164b85aa0b67dc25%3A0xe0d3ff1019a23986!2sJacros%20Adebabay!5e0!3m2!1sen!2sus!4v1783298992803!5m2!1sen!2sus";

  return (
    <div className="flex flex-col items-center gap-2">
      <PageHeader
        headerTitle="Get In Touch"
        headerHeading=""
        headerSubHeading=""
        className=""
      />
      <div className="w-full flex flex-col gap-4 md:flex-row md:items-center md:justify-between md:gap-4">
        <div className=" md:flex md:flex-col md:flex-1">
          <ContactWrapper />
          <div className="my-10 md:my-8">
            <p className="text-white">Conect with Me</p>
            <MySocialMediaLinks />
          </div>
        </div>

        <div className="md:flex md:w-96 md:h-96 md:flex-1">
          <Map src={mapSrc} />
        </div>
      </div>
    </div>
  );
}
