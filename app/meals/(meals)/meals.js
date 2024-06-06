import { getMeals } from "@/lib/meals";
import { MealGrid } from "./(meal-grid)";

const Meals = async () => {
  const meals = await getMeals();

  return <MealGrid meals={meals} />;
};

export { Meals };
