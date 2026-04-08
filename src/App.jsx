import { NavLink, Outlet } from "react-router";
import styles from "./App.module.css";
import useDataFetcher from "./hooks/useDataFetcher";
import { Button } from "./components/ui/button";

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
        <nav className={styles.nav}>
          <NavLink
            to="/"
            className={({ isActive }) =>
              `${styles.navLinks} ${isActive ? styles.active : ""}`
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/shop"
            className={({ isActive }) =>
              `${styles.navLinks} ${isActive ? styles.active : ""}`
            }
          >
            Shop
          </NavLink>
          <NavLink
            to="/cart"
            className={({ isActive }) =>
              `${styles.navLinks} ${isActive ? styles.active : ""}`
            }
          >
            <span>{cartListCount}</span>
            Cart
          </NavLink>
        </nav>
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
    </>
  );
}

export default App;
