export default function SocialLinks({
  href,
  target,
  rel,
  children,
}: {
  href: string;
  target?: string;
  rel?: string;
  children: React.ReactNode;
}) {
  return (
    <a
      href={href}
      target={target}
      rel={rel}
      className="text-base md:text-lg text-gray-500 hover:text-cyan-400 transition-colors duration-200"
    >
      {children}
    </a>
  );
}
