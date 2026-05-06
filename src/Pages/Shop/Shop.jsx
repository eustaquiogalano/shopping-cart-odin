import { useOutletContext } from "react-router";

import styles from "./Shop.module.css";
import ProductCard from "@/components/ProductCard/ProductCard";

export default function Shop() {
  const { laptops, addLaptopToCart } = useOutletContext();

  console.log(laptops);

  return (
    <main className={styles.main}>
      <div className="grid grid-cols-[repeat(auto-fill,_minmax(250px,_1fr))] auto-rows-min gap-[1rem] pb-[calc(56px_+_2rem)] overflow-y-auto min-h-0 flex-1 p-[1rem]">
        {laptops &&
          laptops.map((laptop) => {
            return (
              <ProductCard product={laptop} handleAddToCart={addLaptopToCart} />
            );
          })}
      </div>
    </main>
  );
}
