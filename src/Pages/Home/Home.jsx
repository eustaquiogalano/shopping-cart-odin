import { Link } from "react-router";
import styles from "./Home.module.css";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Smartphone, Laptop, Headphones, Camera } from "lucide-react";

import heroImg from "../../assets/hero.jpg";

const categories = [
  { name: "Laptops", link: "/categories/laptops", iconName: Laptop },
  {
    name: "Smartphones",
    link: "/categories/smartphones",
    iconName: Smartphone,
  },
  { name: "Headphones", link: "/categories/headphones", iconName: Headphones },
  { name: "Cameras", link: "/categories/cameras", iconName: Camera },
];

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

      {/* Category Section */}
      <section className="flex flex-col h-fit gap-[.5rem] w- full">
        <h3>Categories</h3>
        <div className="flex gap-[.5rem] justify-between ">
          {categories.map((category) => (
            <Link
              className="flex flex-col h-fit "
              key={category.name}
              to={category.link}
            >
              <Button
                className="flex flex-col h-fit p-[1rem] text-xs "
                variant="outline"
              >
                <category.iconName className="w-6 h-6" />
                {category.name}
              </Button>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}
