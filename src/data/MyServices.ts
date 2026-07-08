export type Service = {
  name: string;
  description: string;
  TeckSkill: string[];
  workPosition: string[];
};

export const services: Service[] = [
  {
    name: "service 1 Name",
    description: "services description",
    TeckSkill: ["a", "b", "c"],
    workPosition: ["Remote", "Part time", "Full Time"],
  },
  {
    name: "service 2 Name",
    description: "services description",
    TeckSkill: ["a", "b", "c"],
    workPosition: ["Remote", "Part time", "Full Time"],
  },
  {
    name: "service 3 Name",
    description: "services description",
    TeckSkill: ["a", "b", "c"],
    workPosition: ["Remote", "Part time", "Full Time"],
  },
];
