export default function SocialLinks({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="text-base md:text-lg text-gray-500 hover:text-cyan-400 transition-colors duration-200"
    >
      {children}
    </a>
  );
}
