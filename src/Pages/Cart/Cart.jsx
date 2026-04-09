import styles from "./Cart.module.css";
import { useOutletContext } from "react-router";

import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function Cart() {
  const { laptops, totalPrice, incrementQuantity, decrementQuantity } =
    useOutletContext();

  return (
    <main className={styles.cartMain}>
      <div className={styles.cartList}>
        {laptops &&
          laptops.map((laptop) => {
            return (
              laptop.addedToCart && (
                <Card className=" shrink-0">
                  <CardContent className="p-4">
                    <div className="flex gap-3 items-center">
                      <img
                        src={laptop.images[2]}
                        alt={laptop.title}
                        className="w-18 h-18 object-cover rounded-md flex-shrink-0"
                      />
                      <div className="flex-1 min-w-0">
                        <div className="flex justify-between items-start">
                          <p className="text-sm font-medium">{laptop.title}</p>
                          <p className="text-sm font-medium pl-2">
                            ${laptop.price}
                          </p>
                        </div>
                        <div className="flex justify-between items-center mt-2">
                          <div className="flex items-center gap-2 border rounded-md px-2 py-0.5">
                            <Button
                              variant="ghost"
                              size="icon"
                              className="h-5 w-5"
                              onClick={() => {
                                decrementQuantity(laptop.id);
                              }}
                            >
                              −
                            </Button>
                            <span className="text-sm w-4 text-center">
                              {laptop.quantity}
                            </span>
                            <Button
                              variant="ghost"
                              size="icon"
                              className="h-5 w-5"
                              onClick={() => {
                                incrementQuantity(laptop.id);
                              }}
                            >
                              +
                            </Button>
                          </div>
                          <p className="text-sm text-muted-foreground">
                            ${(laptop.price * laptop.quantity).toFixed(2)}
                          </p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              )
            );
          })}
      </div>
      <div className={styles.cartTotalAmount}>
        <Card className="w-full">
          <CardContent className="p-4 flex flex-row justify-between">
            <div className="flex items-center">
              <Button className="h-full">Checkout</Button>
            </div>
            <div className=" pt-3 flex flex-col justify-between items-center">
              <p className="font-medium">Total amount</p>
              <p className="font-medium">${totalPrice.toFixed(2)}</p>
            </div>
          </CardContent>
        </Card>
      </div>
    </main>
  );
}
