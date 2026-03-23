import { useOutletContext } from "react-router";

export default function Shop() {
  const { laptops } = useOutletContext();

  return (
    <main>
      {laptops &&
        laptops.map((laptop) => {
          return (
            <div>
              <img src={`${laptop.images[0]}`} alt="" />
              <p>{laptop.title}</p>
              <p>{laptop.brand}</p>
              <p>$ {laptop.price}</p>

              <br />
              <br />
            </div>
          );
        })}
    </main>
  );
}
