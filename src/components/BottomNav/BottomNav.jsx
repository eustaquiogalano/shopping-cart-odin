import React, { useEffect } from "react";
import { House, Search, ShoppingBag, User } from "lucide-react";
import { Link, NavLink, Outlet, useLocation } from "react-router";

import styles from "./BottomNav.module.css";
import { Button } from "../ui/button";

function BottomNav() {
  const { hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const el = document.querySelector(hash);
      if (el) el.scrollIntoView({ behavior: "smooth" });
    }
  }, [hash]);

  return (
    <nav className="flex justify-around gap-[0.25] fixed bottom-0 left-0 right-0 h-14 bg-background border-t border-stone-300 z-10">
      <NavLink
        to="/"
        end
        className={({ isActive }) =>
          `${styles.navLinks} ${isActive && hash === "" ? styles.active : ""}`
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

      <Button
        variant="outline"
        className="border-0 h-full rounded-none p-0 w-[20%]"
      >
        <Link
          to="/#featured"
          className={`${hash === "#featured" ? styles.active : ""} p-[.5rem] font-[helvetica] text-[.75rem] flex flex-col items-center justify-between h-full w-full`}
        >
          <ShoppingBag strokeWidth={1.5} className="w-[1.20rem] flex-1 " />
          Featured
        </Link>
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
