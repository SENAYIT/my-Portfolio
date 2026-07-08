"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function NavLink({
  href,
  linkName,
}: {
  href: string;
  linkName: string;
}) {
  const pathname = usePathname();
  const isActive = pathname === href || pathname.startsWith(href + "/");
  // (pathname === href || pathname.startsWith(href + "/")) && href !== "/";

  return (
    <Link
      href={href}
      className={`group relative text-base md:text-lg transition-colors duration-200 ${
        isActive ? "text-cyan-400" : "text-gray-300 hover:text-cyan-400"
      }`}
    >
      {linkName}

      <span
        className={`absolute left-0 -bottom-1 h-0.5 bg-cyan-400 transition-all duration-300 ${
          isActive ? "w-full" : "w-0 group-hover:w-full"
        }`}
      />
    </Link>
  );
}

// <Link
//   href={href}
//   className="text-lg text-gray-300 hover:text-cyan-400 hover:underline underline-offset-4 decoration-2 transition-colors duration-200"
// >
//   {linkName}
// </Link>
