export default function WorkPosition({ workPos }: { workPos: string }) {
  return (
    <span className="text-xs bg-cyan-200 text-cyan-700 px-2 py-1 rounded-full">
      {workPos}
    </span>
  );
}
