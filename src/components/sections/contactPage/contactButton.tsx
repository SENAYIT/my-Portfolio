import ContactCardUI from "@/components/ui/CardUI/contactCardUI";
interface ContactDataProps {
  contactName: string;
  contactData: string;
  children?: React.ReactNode;
}

export default function ContactButton({
  contactName,
  contactData,
  children,
}: ContactDataProps) {
  return (
    <ContactCardUI>
      <div className="flex flex-row items-center justify-start gap-2 ">
        {children}
        <div className="fle flex-col items-start justify-around gap-2">
          <p className="text-base md:text-lg font-medium text-gray-500">
            {contactName}
          </p>
          <p className="font-medium text-white">{contactData}</p>
        </div>
      </div>
    </ContactCardUI>
  );
}
