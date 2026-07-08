import NavLinks from "@/components/sections/navBar/navLinks";
import Hero from "@/components/sections/navBar/hero";

export default function NavBar() {
  // for scrollin up color change- bg-[#0a0a0f]
  return (
    // <header className="fixed top-0 left-0 w-full flex justify-between items-center bg-[#0f172a] p-6">

    <header
      className="fixed top-0 left-0 p-6 w-full z-50 md:px-18 md:py-6 flex justify-between items-center bg-slate-950/80
    backdrop-blur-md
    border-b border-white/10"
    >
      <Hero />
      <NavLinks />
    </header>
  );
}
