export default function ProjectContent({ text }: { text: string }) {
  return (
    <p
      className="
        text-sm
        leading-7
        text-slate-300
        sm:text-base
        sm:leading-8
      "
    >
      {text}
    </p>
  );
}
