import DevName from "@/components/ui/links/devName";

export default function Hero() {
  const devName = { name: "Senayit", href: "/" };
  return (
    <div>
      <DevName href={devName.href} DevName={devName.name} />
    </div>
  );
}
