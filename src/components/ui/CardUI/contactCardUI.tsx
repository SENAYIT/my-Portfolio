export default function ContactCardUI({
  children,
}: {
  children?: React.ReactNode;
}) {
  return (
    <div className="size-auto w-80 h-16 p-4 md:w-80 md:h-24 ">{children}</div>
  );
}
