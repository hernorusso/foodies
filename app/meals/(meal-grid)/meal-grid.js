import { MealItem } from "../(meal-item)";
import styles from "./meal-grid.module.css";

const MealGrid = ({ meals }) => {
  return (
    <ul className={styles.meals}>
      {meals.map((meal) => (
        <li key={meal.id}>
          <MealItem {...meal} />
        </li>
      ))}
    </ul>
  );
};

export { MealGrid };
