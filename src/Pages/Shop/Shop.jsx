import { useOutletContext } from "react-router";

import styles from "./Shop.module.css";
import ProductCard from "@/components/ProductCard/ProductCard";
import FilterBar from "@/components/FilterBar";

export default function Shop() {
  const { laptops, addLaptopToCart } = useOutletContext();

  console.log(laptops);

  return (
    <main className={styles.main}>
      <div className="overflow-y-auto p-4 flex flex-col gap-4">
        <FilterBar />
        <div className="grid grid-cols-[repeat(auto-fill,_minmax(250px,_1fr))] auto-rows-min gap-[1rem] pb-[calc(56px_+_2rem)] ">
          {laptops &&
            laptops.map((laptop) => {
              return (
                <ProductCard
                  product={laptop}
                  handleAddToCart={addLaptopToCart}
                />
              );
            })}
        </div>
      </div>
    </main>
  );
}
