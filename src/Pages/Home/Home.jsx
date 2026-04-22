import { useOutletContext } from "react-router";

import { Link } from "react-router";
import styles from "./Home.module.css";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Smartphone, Laptop, Headphones, Camera } from "lucide-react";

import heroImg from "../../assets/hero.jpg";

import ProductCard from "@/components/FeaturedCard";
import PromoBanner from "@/components/PromoBanner";

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
  const { laptops } = useOutletContext();

  return (
    <main className={styles.homeMain}>
      {/* Hero section */}
      <section className="flex flex-col h-fit p-[1.5rem] gap-[.75rem] w-full relative border border-stone-300 rounded-xl overflow-hidden">
        <Badge variant="secondary" className=" ">
          New Arrivals
        </Badge>
        <div className="w-full h-55 overflow-hidden rounded-lg md:absolute md:right-[1.5rem] md:top-1/2 md:-translate-y-1/2 md:w-[40%] md:h-[70%]">
          <img
            src={heroImg}
            alt="Laptop in a modern workspace"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="md:w-[50%] ">
          <h2 className="text-2xl">Tech that fits you everyday.</h2>
          <p className="text-xs text-muted-foreground">
            Curate eletronics. Simple prices. Fast shipping.
          </p>
        </div>
        <div className="flex justify-between gap-[.75rem] md:w-[50%] ">
          <Button variant="default" className="flex-1 md:h-[3rem]">
            Shop Now!
          </Button>
          <Button variant="outline" className="flex-1 md:h-[3rem]">
            View Deals
          </Button>
        </div>
      </section>

      {/* Category Section */}
      <section className="flex flex-col h-fit gap-[.5rem] w- full">
        <h3>Categories</h3>
        <div className="flex gap-[.5rem] justify-between overflow-x-auto ">
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

      {/* Featured Section */}
      <section
        id="featured"
        className="flex flex-col h-fit gap-[.5rem] w- full"
      >
        <h3>Featured</h3>
        <div className="grid grid-cols-[repeat(auto-fill,_minmax(150px,_1fr))] auto-rows-min gap-[1rem]  overflow-y-auto min-h-0 flex-1">
          {laptops &&
            laptops
              .slice(0, 4)
              .map((laptop) => (
                <ProductCard
                  key={laptop.id}
                  image={laptop.thumbnail}
                  badge="New"
                  name={laptop.title}
                  spec={laptop.description}
                  price={`$${laptop.price.toFixed(2)}`}
                />
              ))}
        </div>
      </section>

      {/* Limited Time Section */}
      <section className="flex flex-col h-fit gap-[.5rem] w- full">
        <PromoBanner
          label="Limited time"
          title="Up to 30% off accessories"
          description="Cases, cables, chargers and more."
          cta="Shop deals"
        />
      </section>
    </main>
  );
}
