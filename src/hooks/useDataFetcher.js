import { useEffect, useState } from "react";
import addToCart from "../utils/addToCart/addToCart";

export default function useDataFetcher() {
  const [laptops, setlaptops] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function getData() {
      try {
        const request = await fetch(
          "https://dummyjson.com/products/category/laptops"
        );
        const result = await request.json();

        setlaptops(result.products);
      } catch (error) {
        setError(error);
      }
    }

    getData();
  }, []);

  const addLaptopToCart = (productID) => {
    setlaptops((prev) => addToCart(productID, prev));
  };

  const incrementQuantity = (productID) => {
    setlaptops((prev) => {
      return prev.map((laptop) => {
        return laptop.id === productID
          ? { ...laptop, quantity: laptop.quantity + 1 }
          : laptop;
      });
    });
  };

  const decrementQuantity = (productID) => {
    setlaptops((prev) => {
      return prev.map((laptop) => {
        return laptop.id === productID
          ? { ...laptop, quantity: laptop.quantity - 1 }
          : laptop;
      });
    });
  };
  return {
    laptops,
    error,
    addLaptopToCart,
    incrementQuantity,
    decrementQuantity,
  };
}
