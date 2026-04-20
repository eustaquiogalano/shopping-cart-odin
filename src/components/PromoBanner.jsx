import { Button } from "@/components/ui/button";

export default function PromoBanner({ label, title, description, cta }) {
  return (
    <div className="bg-stone-100 border border-stone-200 rounded-xl p-4">
      <p className="text-xs text-stone-400 mb-1">{label}</p>
      <p className="text-sm font-medium text-stone-900 mb-1">{title}</p>
      <p className="text-xs text-stone-500 mb-4">{description}</p>
      <Button variant="outline" className="w-full">
        {cta}
      </Button>
    </div>
  );
}
