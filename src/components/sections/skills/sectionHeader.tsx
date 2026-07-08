type SectionHeaderProps = {
  title: string;
};

export default function SectionHeader({ title }: SectionHeaderProps) {
  return (
    <div className="flex items-center gap-4 w-full my-8">
      {/* left line */}
      <div className="flex-1 h-[1px] bg-gradient-to-r from-transparent via-gray-500 to-transparent" />

      {/* title */}
      <h2 className="text-xl md:text-2xl font-semibold text-gray-200 tracking-wide whitespace-nowrap">
        {title}
      </h2>

      {/* right line */}
      <div className="flex-1 h-[1px] bg-gradient-to-r from-transparent via-gray-500 to-transparent" />
    </div>
  );
}
