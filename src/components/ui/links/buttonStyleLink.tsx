// it is assmued that the link is a button style link, so it will have a button style link class
// it can use for all link by updating the className prop, and children prop, and href prop

import Link from "next/link";

export default function ButtonStyleLink({
  href,
  children,
  className = "",
}: {
  href: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <Link href={href} className={` text-base md:text-lg ${className}`}>
      {children}
    </Link>
  );
}
