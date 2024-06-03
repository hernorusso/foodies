import Link from "next/link";

const MealDetails = ({ params: { ["meal-slug"]: mealSlug } }) => {
  return (
    <main>
      <h1>Your meal details</h1>
      <Link href="/meals/share">
        <p>Share {mealSlug} your meal</p>
      </Link>
    </main>
  );
};

export default MealDetails;
