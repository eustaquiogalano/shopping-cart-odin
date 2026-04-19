import React from "react";
import { House, Search, ShoppingBag, User } from "lucide-react";
import { NavLink, Outlet } from "react-router";

import styles from "./BottomNav.module.css";

function BottomNav() {
  return (
    <nav className="flex justify-around gap-[0.25]">
      <NavLink
        to="/"
        className={({ isActive }) =>
          `${styles.navLinks} ${isActive ? styles.active : ""}`
        }
      >
        <House strokeWidth={1.5} className="w-[1.20rem] h-[1.20rem]" />
        Home
      </NavLink>
      <NavLink
        to="/shop"
        className={({ isActive }) =>
          `${styles.navLinks} ${isActive ? styles.active : ""}`
        }
      >
        <Search strokeWidth={1.5} className="w-[1.20rem] h-[1.20rem]" />
        Search
      </NavLink>
      <NavLink
        to="/cart"
        className={({ isActive }) =>
          `${styles.navLinks} ${isActive ? styles.active : ""}`
        }
      >
        <ShoppingBag strokeWidth={1.5} className="w-[1.20rem] h-[1.20rem]" />
        Cart
      </NavLink>
      <NavLink
        to="/profile"
        className={({ isActive }) =>
          `${styles.navLinks} ${isActive ? styles.active : ""}`
        }
      >
        <User strokeWidth={1.5} className="w-[1.20rem] h-[1.20rem]" />
        Profile
      </NavLink>
    </nav>
  );
}

export default BottomNav;
