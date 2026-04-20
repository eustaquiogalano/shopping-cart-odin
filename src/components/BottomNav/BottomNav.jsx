import React from "react";
import { House, Search, ShoppingBag, User } from "lucide-react";
import { NavLink, Outlet } from "react-router";

import styles from "./BottomNav.module.css";
import { Button } from "../ui/button";

function BottomNav() {
  return (
    <nav className="flex justify-around gap-[0.25] fixed bottom-0 left-0 right-0 h-14 bg-background border-t border-stone-300 z-10">
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

      <Button variant="outline" className={`${styles.navLinks} `}>
        <a
          href="#featured"
          className="text-xs flex flex-col items-center justify-between h-full"
        >
          <ShoppingBag strokeWidth={1.5} className="w-[1.20rem] flex-1 " />
          Featured
        </a>
      </Button>

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
