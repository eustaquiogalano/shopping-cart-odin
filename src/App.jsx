import { NavLink, Outlet } from "react-router";
import styles from "./App.module.css";

function App() {
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
      <main>
        <Outlet />
      </main>
    </>
  );
}

export default App;
