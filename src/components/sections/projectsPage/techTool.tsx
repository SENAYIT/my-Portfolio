export default function TechTool({ techTool }: { techTool: string }) {
  return (
    <span className="text-sm font-light text-white bg-gray-700 px-2 py-1 rounded">
      {techTool}
    </span>
  );
}
