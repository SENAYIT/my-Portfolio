"use client";
import { useState } from "react";
import Button from "@/components/ui/buttons/button";
import NavLink from "@/components/ui/links/navLink";
import Hero from "./hero";
import { links } from "@/data/portfolioLinkContentsData";

export default function NavLinks() {
  const [openMenu, setOpenMenu] = useState(false);

  const toggleMenu = () => setOpenMenu((prev) => !prev);
  const closeMenu = () => setOpenMenu(false);

  // const links = [
  //   { href: "/", linkName: "Home" },
  //   { href: "/about", linkName: "About" },
  //   { href: "/experience", linkName: "Experience" },
  //   { href: "/projects", linkName: "Projects" },
  //   { href: "/skills", linkName: "Skills" },
  //   { href: "/services", linkName: "Services" },
  //   { href: "/contacts", linkName: "Contacts" },
  // ];

  return (
    <div className="relative ">
      {/* Hamburger Button */}
      <Button
        handleClick={toggleMenu}
        className="text-gray-300 md:hidden"
        aria-label="Toggle menu"
      >
        {openMenu ? "✕" : "☰"}
      </Button>

      {/* Backdrop */}
      {openMenu && (
        <div
          onClick={closeMenu}
          className="fixed inset-0 bg-black/40 backdrop-blur-sm md:hidden"
        />
      )}

      {/* Navigation */}

      {/* w-72 */}
      <nav
        className={`fixed top-0 left-0 z-50  w-100 h-screen bg-gray-900 transform transition-transform duration-300
    ${openMenu ? "translate-x-0" : "-translate-x-full"} md:relative md:top-auto md:left-auto md:h-auto  md:w-auto  md:translate-x-0  md:bg-transparent md:shadow-none`}
      >
        {/* header -only for mobile burger button display ui*/}
        {openMenu && (
          <div
            onClick={closeMenu}
            className="py-4 pt-10 px-8 pr-20 flex flex:row items-center justify-between border-b-2 border-b-white/20 md:hidden "
          >
            <Hero />
            <Button handleClick={closeMenu} className="text-white md:hidden">
              ✕
            </Button>
          </div>
        )}

        <div className="flex flex-col item-center gap-6 p-10 md:flex-row  md:p-0">
          {links.map((link, index) => (
            <div key={index} onClick={closeMenu}>
              <NavLink href={link.href} linkName={link.linkName} />
            </div>
          ))}
        </div>
      </nav>
    </div>
  );
}
