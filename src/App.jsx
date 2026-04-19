import { NavLink, Outlet } from "react-router";
import styles from "./App.module.css";
import useDataFetcher from "./hooks/useDataFetcher";
import { Button } from "./components/ui/button";
import BottomNav from "./components/BottomNav/BottomNav";
import { Search, ShoppingBag } from "lucide-react";
import { Badge } from "./components/ui/badge";

function App() {
  const {
    laptops,
    totalPrice,
    error,
    addLaptopToCart,
    incrementQuantity,
    decrementQuantity,
  } = useDataFetcher();

  const cartListCount = laptops.reduce((acc, laptop) => {
    if (laptop.addedToCart) {
      return acc + 1;
    }
    return acc;
  }, 0);

  return (
    <>
      <header className={styles.header}>
        <h1 className={styles.title}>Laps.</h1>
        <div className="flex gap-1 ">
          <Button variant="secondary">
            <Search className="" />
          </Button>
          <Button variant="secondary">
            <Badge>{cartListCount}</Badge>
            <ShoppingBag className="" />
          </Button>
        </div>
      </header>
      <Outlet
        context={{
          laptops,
          totalPrice,
          error,
          addLaptopToCart,
          incrementQuantity,
          decrementQuantity,
        }}
      />
      <BottomNav />
    </>
  );
}

export default App;
