import { saveMeal } from "@/lib/meals";

const shareMeal = async (formData) => {
  "use server";
  const data = {
    creator: formData.get("name"),
    creator_email: formData.get("email"),
    title: formData.get("title"),
    summary: formData.get("summary"),
    instructions: formData.get("instructions"),
    image: formData.get("image"),
  };

  saveMeal(data);
};

export { shareMeal };
