import FooterCopyright from "../sections/footer/footerCopyright";
import MySocialMediaLinks from "../sections/homePage/mySocialLinks";

export default function Footer() {
  return (
    <footer className="text-white border-t border-white/10 bg-linear-to-r from-zinc-950 via-slate-950 to-zinc-950">
      <div className="flex flex-col items-center justify-between gap-4 px-6 py-6 md:px-18 md:flex-row">
        <FooterCopyright />
        <MySocialMediaLinks />
      </div>
    </footer>
  );
}
