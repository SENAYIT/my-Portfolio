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
    icon: FaGithub,
  },
  {
    name: "Linkedin",
    href: linkedin,
    icon: FaLinkedin,
  },
  {
    name: "Telegram",
    href: telegram,
    icon: FaTelegram,
  },
  {
    name: "WhatsApp",
    href: whatsApp, // Replace with your number
    icon: FaWhatsapp,
  },
  {
    name: "Envelope",
    href: email,
    icon: FaEnvelope,
  },
];
