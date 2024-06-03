import Link from "next/link";

const MealsPage = () => (
  <main>
    <h1>Welcome to the Melas Page!</h1>
    <Link href="/meals/meal-1">
      <p>meal 1</p>
    </Link>
    <Link href="/meals/meal-2">
      <p>meal 2</p>
    </Link>
    <Link href="/meals/meal-3">
      <p>meal 2</p>
    </Link>
  </main>
);

export default MealsPage;
