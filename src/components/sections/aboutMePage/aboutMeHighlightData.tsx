import { myData } from "@/data/myData";
import {
  Briefcase,
  LucideToolCase,
  BadgeCheck,
  MapPin,
  Clock,
  Phone,
} from "lucide-react";
import { FaEnvelope } from "react-icons/fa";

import type { IconType } from "react-icons";

export type highlightProps = {
  iconName: IconType;
  title: string;
  shortDescription: string;
};

const {
  totalExperiences,
  address,
  techSkillType,
  currentRole,
  email,
  //   phoneNumber,
  availability,
} = myData;

export const aboutMeData: highlightProps[] = [
  {
    iconName: Briefcase,
    title: "Experience",
    shortDescription: totalExperiences,
  },
  {
    iconName: MapPin,
    title: "Address",
    shortDescription: address,
  },
  {
    iconName: LucideToolCase,
    title: "Tech tool",
    shortDescription: techSkillType,
  },
  {
    iconName: BadgeCheck,
    title: "Current Role",
    shortDescription: currentRole,
  },
];

export const ContactMeData: highlightProps[] = [
  {
    iconName: FaEnvelope,
    title: "Email",
    shortDescription: email,
  },
  //   {
  //     iconName: Phone,
  //     title: "Phone Number",
  //     shortDescription: phoneNumber,
  //   },
  {
    iconName: MapPin,
    title: "Address",
    shortDescription: address,
  },
  {
    iconName: Clock,
    title: "Availability",
    shortDescription: availability,
  },
];
