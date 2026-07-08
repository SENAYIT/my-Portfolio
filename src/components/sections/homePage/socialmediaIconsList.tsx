import SocialLinks from "@/components/ui/links/socialLinks";
import { SocialLinkData } from "../../ui/iconListShowUI/socialLinksDatawithIcon";

export default function SocialMediaIcons({
  socialLinksData,
}: {
  socialLinksData: SocialLinkData[];
}) {
  return (
    <div className="my-4 flex gap-4">
      {socialLinksData.map((link, index) => (
        <SocialLinks key={index}
        href={
            link.type === "email"
              ? `mailto:${link.href}`
              : link.href
          }
        
          target={link.type === "email" ? undefined : "_blank"}
          rel={link.type === "email" ? undefined : "noopener noreferrer"}>
          {link.icon && (
            <link.icon className="w-7 h-7 md:w-8 md:h-8 text-gray-400 hover:text-cyan-400" />
          )}
        </SocialLinks>
      ))}
    </div>
  );
}
