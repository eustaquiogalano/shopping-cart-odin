import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export default function ProductCard({ image, badge, name, spec, price }) {
  return (
    <div className="bg-card text-secondary-foreground border  rounded-xl overflow-hidden">
      <div className="h-28  bg-secondary flex items-center justify-center">
        <img src={image} alt={name} className="w-16 h-16 object-contain" />
      </div>

      <div className="p-3 text-card-foreground">
        {badge && (
          <Badge className="mb-2 text-[10px] bg-accent text-accent-foreground">
            {badge}
          </Badge>
        )}
        <p className="text-sm font-medium">{name}</p>
        <p className="text-xs mb-3">OLED · 256GB</p>
        <div className="flex justify-between items-center ">
          <span className="text-sm font-medium">{price}</span>
          <Button variant="default" size="sm" className="text-xs h-7">
            Add
          </Button>
        </div>
      </div>
    </div>
  );
}
