import { NavLink, Outlet } from "react-router";
import styles from "./App.module.css";
import useDataFetcher from "./hooks/useDataFetcher";

function App() {
  const {
    laptops,
    error,
    addLaptopToCart,
    incrementQuantity,
    decrementQuantity,
  } = useDataFetcher();

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
            Cart
          </NavLink>
        </nav>
      </header>
      <Outlet
        context={{
          laptops,
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
