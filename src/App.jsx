import { NavLink, Outlet } from "react-router";
import styles from "./App.module.css";
import useDataFetcher from "./hooks/useDataFetcher";
import { Button } from "./components/ui/button";
import BottomNav from "./components/BottomNav/BottomNav";
import { Search, ShoppingBag, ShoppingCart, Sidebar } from "lucide-react";
import { Badge } from "./components/ui/badge";
import { AppSidebar } from "./components/AppSidebar";
import { SidebarInset, SidebarTrigger } from "./components/ui/sidebar";

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
      <AppSidebar />
      <SidebarInset className="lg:p-[1rem] lg:pt-0 lg:gap-[1rem]">
        <header className={styles.header}>
          <h1 className={styles.title}>Laps.</h1>
          <div className="flex gap-1 ">
            <Button variant="secondary">
              <Search className="" />
            </Button>
            <Button asChild variant="secondary">
              <NavLink to="/cart">
                <Badge>{cartListCount}</Badge>
                <ShoppingCart className="" />
              </NavLink>
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
      </SidebarInset>
    </>
  );
}

export default App;
