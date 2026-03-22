import { Link } from "react-router";
import styles from "./Home.module.css";

export default function Home() {
  return (
    <main className={styles.homeMain}>
      <Link to={"shop"} className={styles.button}>
        <h1>Shop Now!</h1>
      </Link>
    </main>
  );
}
