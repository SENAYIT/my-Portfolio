// not edited the using the typescript related to others -> for easy access in starting one

import { aboutMe, heroDescription } from "./aboutMe";
import { skills } from "./mySkills"; // it is data with out icon
import { experiences } from "./myExperciences";
import { myProjects } from "./myProjects";
import { services } from "./myOfferingServices";
import { mySocialLinkData } from "./socialLinksData";

export type Mydata = {
  name: string;
  title: string;
  heroDescription: typeof heroDescription;
  description: typeof aboutMe;
  techSkill: typeof skills;
  techSkillType: string;
  experiences: typeof experiences;
  totalExperiences: string;
  projects: typeof myProjects;
  myServices: typeof services;
  currentRole: string;
  availability: string;
  email: string;
  phoneNumber: string;
  address: string;
  socialLinks: typeof mySocialLinkData;
};

export const myData: Mydata = {
  name: "Senayit Awoke",
  title: "Junior Frontend Website Developer",
  heroDescription: heroDescription,
  description: aboutMe,
  techSkill: skills,
  techSkillType: "React / Mern",
  experiences: experiences,
  totalExperiences: "1 + years",
  projects: myProjects,
  myServices: services,
  currentRole: "Getting exp. on Real Projects",
  availability: "Open to opportunities",
  email: "senaitaweke2019@gmail.com",
  phoneNumber: "+251 938 957 338",
  address: "Addis Ababa, Ethiopia",
  socialLinks: mySocialLinkData,
};
