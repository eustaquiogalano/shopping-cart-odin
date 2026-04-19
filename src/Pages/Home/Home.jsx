import { Link } from "react-router";
import styles from "./Home.module.css";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

import heroImg from "../../assets/hero.jpg";

export default function Home() {
  return (
    <main className={styles.homeMain}>
      <section className="flex flex-col h-fit p-[1.5rem] gap-[1rem] w- full border border-stone-300 rounded-xl">
        <Badge variant="secondary">New Arrivals</Badge>
        <div className="w-full h-55 overflow-hidden rounded-lg">
          <img
            src={heroImg}
            alt="Laptop in a modern workspace"
            className="w-full h-full object-cover"
          />
        </div>
        <h2 className="text-xl">Tech that fits you everyday.</h2>
        <p className="text-muted-foreground">
          Curate eletronics. Simple prices. Fast shipping.
        </p>
        <div className="flex justify-between">
          <Button variant="default">Shop Now!</Button>
          <Button variant="outline">View Deals</Button>
        </div>
      </section>
    </main>
  );
}
