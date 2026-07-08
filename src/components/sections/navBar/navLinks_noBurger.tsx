import NavLink from "@/components/ui/links/navLink";

export default function NavLinks() {
  const links = [
    { href: "/", linkName: "Home" },
    { href: "/about", linkName: "About" },
    { href: "/experience", linkName: "Experience" },
    { href: "/projects", linkName: "Projects" },
    { href: "/skills", linkName: "Skills" },
    { href: "/services", linkName: "Services" },
    { href: "/contacts", linkName: "Contacts" },
  ];

  return (
    <nav className="flex items-center space-x-6">
      {links.map((link, index) => (
        <NavLink key={index} href={link.href} linkName={link.linkName} />
      ))}
    </nav>
  );
}
