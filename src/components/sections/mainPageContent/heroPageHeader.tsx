export default function HeroPageHeader({
  headerTitle,
  headerHeading,
  headerSubHeading,
  className = "",
}: {
  headerTitle: string;
  headerHeading: string;
  headerSubHeading: string;
  className: string;
}) {
  return (
    <header
      className={`md:my-6 flex flex-col gap-5 items-center justify-center ${className}`}
    >
      <h1 className="text-base md:text-xl font-light text-cyan-400  bg-cyan-950 border-b-cyan-700 px-6  py-2 rounded-full">
        {headerTitle}
      </h1>

      <h2 className="text-5xl md:text-6xl font-light text-gray-300">
        {headerHeading}
      </h2>
      <p className="text-base md:text-lg font-light text-gray-400">
        {headerSubHeading}
      </p>
    </header>
  );
}
