import Link from "next/link";
import { Suspense } from "react";

import { LoadingFallback } from "./(loading-fallback)";

import Meals from "./(meals)";
import styles from "./page.module.css";

export const metadata = {
  title: "Meals",
  description:
    "Delicious meals, created by a our vibran food-loving community.",
};

const MealsPage = async () => {
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
        <Suspense fallback={<LoadingFallback />}>
          <Meals />
        </Suspense>
      </main>
    </>
  );
};

export default MealsPage;
