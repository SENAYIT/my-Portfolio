export default function ContentDisplay({
  shortDescription,
}: {
  shortDescription: string;
}) {
  return (
    <div className="p-2 border-2 border-l-cyan-800 ">
      <p className="text-gray-600 font-light">{shortDescription}</p>
    </div>
  );
}
