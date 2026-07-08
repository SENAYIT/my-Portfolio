export default function TimelineDot({ isCurrent }: { isCurrent: boolean }) {
  return (
    <div className="hidden md:flex absolute left-[11px] top-2">
      <span
        className={`w-3 h-3 rounded-full transition-all ${
          isCurrent
            ? "bg-cyan-400 animate-pulse shadow-cyan-400 shadow-md"
            : "bg-gray-500"
        }`}
      />
    </div>
  );
}
