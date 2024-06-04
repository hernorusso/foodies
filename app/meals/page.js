import Link from "next/link";

import styles from "./page.module.css";

const MealsPage = () => (
  <>
    <header className={styles.header}>
      <h1>
        Delicious Meals, created{" "}
        <span className={styles.highlight}>by you</span>
      </h1>
      <p>
        Choose your favorite recipe and cook it yourself. It is easy and fun!
      </p>
      <div className={styles.cta}>
        <Link href="/meals/share">Share Your Favorite Recipe</Link>
      </div>
    </header>
    <main></main>
  </>
);

export default MealsPage;
