import { useEffect, useState } from "react";

export default function useDataFetcher() {
  const [laptops, setlaptops] = useState();
  const [error, setError] = useState();

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

  return { laptops, error };
}
