import { useOutletContext } from "react-router";

import {
  Card,
  CardAction,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
  CardContent,
} from "@/components/ui/card";

import { Button } from "@/components/ui/button";

import styles from "./Shop.module.css";

export default function Shop() {
  const { laptops, error, addLaptopToCart } = useOutletContext();

  console.log(laptops);

  return (
    <main className={styles.main}>
      <div className="grid grid-cols-[repeat(auto-fill,_minmax(300px,_1fr))] grid-rows-auto  gap-[1rem] h-full p-[1rem]">
        {laptops &&
          laptops.map((laptop) => {
            return (
              <Card className="w-full h-fit overflow-hidden p-0">
                <img
                  src={laptop.images[0]}
                  alt=""
                  className="w-full h-[180px] object-cover"
                />
                <CardContent className="p-4">
                  <div className="flex justify-between items-start">
                    <div>
                      <p className="font-medium">{laptop.title}</p>
                      {/* <p className="text-sm text-muted-foreground">
                        {laptop.description}
                      </p> */}
                    </div>
                    <p className="font-medium">${laptop.price}</p>
                  </div>
                  <div className="flex gap-2 mt-4">
                    <Button className="flex-1">Buy now</Button>
                    <Button
                      variant="outline"
                      className="flex-1"
                      onClick={() => addLaptopToCart(laptop.id, laptops)}
                    >
                      Add to cart
                    </Button>
                  </div>
                </CardContent>
              </Card>
            );
          })}
      </div>
    </main>
  );
}
