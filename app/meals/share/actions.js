const shareMeal = async (formData) => {
  "use server";
  const data = {
    name: formData.get("name"),
    creator_email: formData.get("email"),
    title: formData.get("title"),
    summary: formData.get("summary"),
    instructions: formData.get("instructions"),
    image: formData.get("image"),
  };

  console.log(data);
};

export { shareMeal };
