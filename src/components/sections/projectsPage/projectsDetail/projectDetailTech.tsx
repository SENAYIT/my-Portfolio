export default function ProjectDetailTech({ tech }: { tech: string }) {
  return (
    <span
      className="
            rounded-full
            border
            border-blue-400/20
            bg-blue-500/10
            px-3
            py-2
            text-xs
            font-medium
            text-blue-200
            sm:px-4
            sm:text-sm
          "
    >
      {tech}
    </span>
  );
}
