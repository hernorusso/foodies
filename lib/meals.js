import sql from "better-sqlite3";
import slugify from "slugify";
import xss from "xss";

const db = sql("meals.db");

const getMeals = async () => {
  await new Promise((resolve) => setTimeout(resolve, 2000));
  const data = db.prepare("SELECT * FROM meals").all();
  return data;
};

const getMealDetail = (slug) => {
  const stmt = db.prepare("SELECT * FROM meals WHERE slug = ?");
  const mealDetails = stmt.get(slug);
  return mealDetails;
};

const saveMeal = (meal) => {
  meal.slug = slugify(meal.title, { lower: true });
  meal.instructions = xss(meal.instructions);
};

export { getMeals, getMealDetail, saveMeal };
