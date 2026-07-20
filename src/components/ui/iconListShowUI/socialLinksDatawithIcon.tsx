import {
  FaGithub,
  FaLinkedin,
  FaTelegram,
  FaEnvelope,
  FaWhatsapp,
} from "react-icons/fa";

import type { IconType } from "react-icons";
// the fetched social link data
import { mySocialLinkData } from "@/data/socialLinksData";

export type SocialLinkData = {
  name: string;
  href: string;
  type?: "email" | "external ";
  icon: IconType;
};

const { github, linkedin, telegram, whatsApp, email } = mySocialLinkData;

export const socialLinkData: SocialLinkData[] = [
  {
    name: "Github",
    href: github,
    type: "external ",
    icon: FaGithub,
  },
  {
    name: "Linkedin",
    href: linkedin,
    type: "external ",
    icon: FaLinkedin,
  },
  {
    name: "Telegram",
    href: telegram,
    type: "external ",
    icon: FaTelegram,
  },
  {
    name: "WhatsApp",
    href: whatsApp, // Replace with your number
    type: "external ",
    icon: FaWhatsapp,
  },
  {
    name: "Envelope",
    href: email,
    type: "email",
    icon: FaEnvelope,
  },
];
