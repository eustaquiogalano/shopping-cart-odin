import { useEffect, useReducer } from "react";
import cartReducer from "../reducers/cartReducer";

export default function useDataFetcher() {
  const [laptops, dispatch] = useReducer(cartReducer, []);
  // const [laptops, setlaptops] = useState([]);
  // const [error, setError] = useState(null);

  useEffect(() => {
    async function getData() {
      try {
        const request = await fetch(
          "https://dummyjson.com/products/category/laptops"
        );
        const result = await request.json();

        dispatch({ type: "add_to_cart", productList: result.products });
      } catch (error) {
        console.log(error);
      }
    }

    getData();
  }, []);

  const addLaptopToCart = (productID) => {
    dispatch({ type: "add_to_cart", productID, productList: laptops });
  };

  const incrementQuantity = (productID) => {
    dispatch({ type: "increment_quantity", productID });
  };

  const decrementQuantity = (productID) => {
    dispatch({ type: "decrement_quantity", productID });
  };
  return {
    laptops,
    // error,
    addLaptopToCart,
    incrementQuantity,
    decrementQuantity,
  };
}
