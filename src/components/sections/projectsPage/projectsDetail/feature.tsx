import { CheckCircle } from "lucide-react";
export default function Feature({ feature }: { feature: string }) {
  return (
    <div
      className="
            flex
            items-start
            gap-3
            rounded-xl
            border
            border-white/10
            bg-white/5
            p-4
            text-sm
            text-slate-200
            transition
            hover:bg-white/10
            sm:text-base
          "
    >
      <CheckCircle className="mt-1 shrink-0 text-green-400" size={20} />

      <span>{feature}</span>
    </div>
  );
}
