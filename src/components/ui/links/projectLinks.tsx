export default function ProjectLinks({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  return (
    <a
      href={href}
      // target="no-target"
      className="text-base md:text-lg text-gray-500 hover:text-cyan-400 transition-colors duration-200"
    >
      {children}
    </a>
  );
}
