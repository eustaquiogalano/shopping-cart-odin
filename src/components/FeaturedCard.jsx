import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";

export default function FeaturedCard({ image, badge, name, spec, price }) {
  return (
    <Card className="">
      <CardContent className="flex-1">
        {/* <div className="w-full bg-secondary flex items-center justify-center"> */}
        <img src={image} alt={name} className="object-contain w-full" />
        {/* </div> */}
        {badge && (
          <Badge className="mb-2 text-[10px] bg-accent text-accent-foreground">
            {badge}
          </Badge>
        )}
        <p className="text-lg font-medium mb-1">{name}</p>
        <p className="text-xs">OLED · 256GB</p>
      </CardContent>

      <CardFooter className="flex justify-center items-center ">
        <Button variant="default" size="sm" className="text-xs h-7 w-full">
          See in Full
        </Button>
      </CardFooter>
      {/* <div className="p-3 text-card-foreground"></div> */}
    </Card>
  );
}
