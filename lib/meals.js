import sql from "better-sqlite3";

const db = sql("meals.db");

const getMeals = async () => {
  await new Promise((resolve, reject) => setTimeout(resolve, 2000));
  const data = db.prepare("SELECT * FROM meals").all();
  return data;
};

export { getMeals };
