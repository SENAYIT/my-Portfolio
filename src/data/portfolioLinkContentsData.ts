export type Link = {
  href: string;
  linkName: string;
};
export const links: Link[] = [
  { href: "/", linkName: "Home" },
  { href: "/about", linkName: "About" },
  { href: "/experience", linkName: "Experience" },
  { href: "/projects", linkName: "Projects" },
  { href: "/skills", linkName: "Skills" },
  { href: "/services", linkName: "Services" },
  { href: "/contacts", linkName: "Contacts" },
];

// export const projectCatagorylinks: Link[] = [
//   { href: "/projects/", linkName: "All" },
//   { href: "/projects/fullstack", linkName: "FullStack" },
//   { href: "/projects/frontend", linkName: "Frontend" },
//   { href: "/projects/backend", linkName: "Backend" },
//   { href: "/projects/project", linkName: "Projects Detail" },
// ];
