import { Button } from "@/components/ui/button";

export default function PromoBanner({ label, title, description, cta }) {
  return (
    <div className="bg-secondary text-secondary-foreground border rounded-xl p-4">
      <p className="text-xs mb-1">{label}</p>
      <p className="text-sm font-medium  mb-1">{title}</p>
      <p className="text-xs text-muted-foreground mb-4">{description}</p>
      <Button variant="default" className="w-full">
        {cta}
      </Button>
    </div>
  );
}
