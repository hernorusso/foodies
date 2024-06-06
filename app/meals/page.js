import Link from "next/link";

import { getMeals } from "@/lib/meals";

import { MealGrid } from "./(meal-grid)";
import styles from "./page.module.css";

const MealsPage = async () => {
  const meals = await getMeals();

  return (
    <>
      <header className={styles.header}>
        <h1>
          Delicious Meals, created{" "}
          <span className={styles.highlight}>by you</span>
        </h1>
        <p>
          Choose your favorite recipe and cook it yourself. It is easy and fun!
        </p>
        <p className={styles.cta}>
          <Link href="/meals/share">Share Your Favorite Recipe</Link>
        </p>
      </header>
      <main>
        <MealGrid meals={meals} />
      </main>
    </>
  );
};

export default MealsPage;
