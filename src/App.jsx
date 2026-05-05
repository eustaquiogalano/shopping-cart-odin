import { NavLink, Outlet } from "react-router";
import styles from "./App.module.css";
import useDataFetcher from "./hooks/useDataFetcher";
import { Button } from "./components/ui/button";
import BottomNav from "./components/BottomNav/BottomNav";
import { Search, ShoppingBag, ShoppingCart, Sidebar } from "lucide-react";
import { Badge } from "./components/ui/badge";
import { AppSidebar } from "./components/AppSidebar";
import { SidebarInset, SidebarTrigger } from "./components/ui/sidebar";
import { Input } from "./components/ui/input";
import SearchBar from "./components/SearchBar/SearchBar";

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
          <div className="flex gap-1 items-center">
            {/* <Input></Input>
            <Button variant="default">
              <Search size={10} className="w-0.5 h-0.5" />
            </Button> */}

            <SearchBar />
            <Button asChild variant="default">
              <NavLink to="/cart">
                <Badge variant="secondary">{cartListCount}</Badge>
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
            cartListCount,
          }}
        />
        <BottomNav />
      </SidebarInset>
    </>
  );
}

export default App;
