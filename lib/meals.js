import fs from "node:fs";
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

const saveMeal = async (meal) => {
  const { title, instructions, image } = meal;

  // create the slug
  const mealSlug = slugify(title, { lower: true });

  // image processing
  const imageFileExtension = image.name.split(".").pop();
  const imageFileName = `${mealSlug}.${imageFileExtension}`;
  const imagePath = `images/${imageFileName}`;
  // Create a buffer and a stream
  const imageBuffer = await image.arrayBuffer();
  const imageFile = fs.createWriteStream(`public/${imagePath}`);
  imageFile.write(Buffer.from(imageBuffer), (err) => {
    if (err) throw new Error("We could not save the file!");
  });

  //data manipulation
  meal.slug = mealSlug;
  meal.instructions = xss(instructions);
  meal.image = `/${imagePath}`;

  // data saving
  const stmt = db.prepare(
    `INSERT INTO meals
      (
        slug,
        title,
        image,
        summary,
        instructions,
        creator,
        creator_email
      )
      VALUES (
        @slug,
        @title,
        @image,
        @summary,
        @instructions,
        @creator,
        @creator_email
      )`
  );
  stmt.run(meal);
};

export { getMeals, getMealDetail, saveMeal };
