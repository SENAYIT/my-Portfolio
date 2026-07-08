import NavLink from "@/components/ui/links/navLink";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center bg-black min-h-screen gap-4 m-0">
      <h1 className="text-cyan-400 font-bold text-xl md:text-3xl">
        Page Not Found
      </h1>
      <p className="text-gray-400">Sorry!!! This page is not found</p>
      <NavLink href="/" linkName="Back to Home" />
    </div>
  );
}
