"use server";
import { redirect } from "next/navigation";
import { revalidatePath } from "next/cache";
import { saveMeal } from "@/lib/meals";

const isInvalidData = (data) => {
  return !data || data.trim() === "";
};

const shareMeal = async (prevState, formData) => {
  const data = {
    creator: formData.get("name"),
    creator_email: formData.get("email"),
    title: formData.get("title"),
    summary: formData.get("summary"),
    instructions: formData.get("instructions"),
    image: formData.get("image"),
  };

  if (
    isInvalidData(data.creator) ||
    isInvalidData(data.creator_email) ||
    isInvalidData(data.title) ||
    isInvalidData(data.summary) ||
    isInvalidData(data.instructions) ||
    !data.image ||
    data.image.size === 0
  ) {
    return { message: "Invalid data!" };
  }

  await saveMeal(data);
  revalidatePath("/meals");
  redirect("/meals");
};

export { shareMeal };
