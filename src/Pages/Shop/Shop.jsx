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
      <div className="grid grid-cols-[repeat(auto-fill,_minmax(200px,_1fr))] auto-rows-min gap-[1rem]  overflow-y-auto min-h-0 flex-1 p-[1rem]">
        {laptops &&
          laptops.map((laptop) => {
            return (
              <Card className="h-full overflow-hidden p-0">
                <img
                  src={laptop.images[0]}
                  alt=""
                  className="w-full h-[180px] object-cover"
                />
                <CardContent className="flex flex-col p-4 gap-4 h-full">
                  <div className="flex justify-between items-start">
                    <div>
                      <p className="font-medium">{laptop.title}</p>
                    </div>
                    <p className="font-medium">${laptop.price}</p>
                  </div>
                  <div className="flex justify-between gap-1 mt-auto ">
                    <Button variant="default" className="flex-1">
                      Buy now
                    </Button>
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
