export default function AboutMeCardUI({
  children,
}: {
  children?: React.ReactNode;
}) {
  return (
    <div className="bg-blend-saturation size-auto w-35 h-40 p-4 border border-cyan-800 rounded-xl md:w-64 md:h-32 hover:shadow-cyan-900 hover:shadow-lg">
      {children}
    </div>
  );
}
