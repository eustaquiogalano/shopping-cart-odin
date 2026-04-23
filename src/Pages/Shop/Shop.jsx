import { useOutletContext } from "react-router";

import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
  CardContent,
} from "@/components/ui/card";

import { Button } from "@/components/ui/button";

import styles from "./Shop.module.css";

export default function Shop() {
  const { laptops, addLaptopToCart } = useOutletContext();

  console.log(laptops);

  return (
    <main className={styles.main}>
      <div className="grid grid-cols-[repeat(auto-fill,_minmax(250px,_1fr))] auto-rows-min gap-[1rem] pb-[calc(56px_+_2rem)] overflow-y-auto min-h-0 flex-1 p-[1rem]">
        {laptops &&
          laptops.map((laptop) => {
            return (
              <Card className="h-full overflow-hidden p-0">
                <img
                  src={laptop.thumbnail}
                  alt=""
                  className="w-full h-[180px] object-cover"
                />
                <CardHeader>
                  <CardTitle className="">{laptop.title}</CardTitle>
                  <CardDescription className="">
                    ${laptop.price}
                  </CardDescription>
                </CardHeader>
                <CardContent className="flex flex-col p-4 gap-4 h-full">
                  <CardDescription>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Brand:</span>
                      <span>{laptop.brand}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Dimensions:</span>
                      <span>
                        {laptop.dimensions.depth} x {laptop.dimensions.width} x{" "}
                        {laptop.dimensions.height}
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Stock:</span>
                      <span>{laptop.stock}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Weight:</span>
                      <span>{laptop.weight}</span>
                    </div>
                  </CardDescription>
                </CardContent>
                <CardFooter className="flex justify-between gap-1  ">
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
                </CardFooter>
              </Card>
            );
          })}
      </div>
    </main>
  );
}
