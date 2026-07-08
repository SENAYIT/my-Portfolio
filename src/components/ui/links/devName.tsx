import Link from "next/link";

export default function DevName({
  href,
  DevName,
}: {
  href: string;
  DevName: string;
}) {
  return (
    <Link
      href={href}
      className="text-base font-bold md:text-3xl md:font-extrabold text-white"
    >
      <span className="text-cyan-400">&lt;</span>
      {DevName}
      <span className="text-cyan-400">/&gt;</span>
    </Link>
  );
}
