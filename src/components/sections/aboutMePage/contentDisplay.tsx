export default function ContentDisplay({
  shortDescription,
}: {
  shortDescription: string;
}) {
  return (
    <div className="w-full border-l-2 border-cyan-800 p-4">
      <p className="text-base md:text-lg break-words text-wrap text-gray-600 font-light">
        {shortDescription}
      </p>
    </div>
  );
}
