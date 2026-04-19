import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export default function ProductCard({ image, badge, name, spec, price }) {
  return (
    <div className="bg-white border border-stone-200 rounded-xl overflow-hidden">
      <div className="h-28 bg-stone-100 flex items-center justify-center border-b border-stone-200">
        <img src={image} alt={name} className="w-16 h-16 object-contain" />
      </div>
      <div className="p-3">
        {badge && <Badge className="mb-2 text-[10px]">{badge}</Badge>}
        <p className="text-sm font-medium text-stone-900">{name}</p>
        <p className="text-xs text-stone-400 mb-3">OLED · 256GB</p>
        <div className="flex justify-between items-center ">
          <span className="text-sm font-medium">{price}</span>
          <Button variant="outline" size="sm" className="text-xs h-7">
            Add
          </Button>
        </div>
      </div>
    </div>
  );
}
