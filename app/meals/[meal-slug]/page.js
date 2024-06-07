import Link from "next/link";
import Image from "next/image";

import { getMealDetail } from "@/lib/meals";

import styles from "./page.module.css";

const MealDetails = ({ params }) => {
  const { ["meal-slug"]: mealSlug } = params;
  const { title, image, summary, instructions, creator, creator_email } =
    getMealDetail(mealSlug);

  const htmlIntructions = instructions.replace(/\n/g, "<br />");
  const markup = { __html: htmlIntructions };
  return (
    <>
      <header className={styles.header}>
        <div className={styles.image}>
          <Image src={image} fill alt={"title"} />
        </div>
        <div className={styles.headerText}>
          <h1>{title}</h1>
          <p className={styles.creator}>
            by <Link href={`mailto:${creator_email}`}>{creator}</Link>
          </p>
          <p className={styles.summary}>{summary}</p>
        </div>
      </header>
      <main>
        <p dangerouslySetInnerHTML={markup} className={styles.instructions}></p>
      </main>
    </>
  );
};

export default MealDetails;
