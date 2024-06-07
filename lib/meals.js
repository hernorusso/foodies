import sql from "better-sqlite3";

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

export { getMeals, getMealDetail };
