import Link from "next/link";

import ImageSlideshow from "./(image-slideshow)";
import styles from "./page.module.css";

const Home = () => (
  <>
    <header className={styles.header}>
      <div className={styles.slideshow}>
        <ImageSlideshow />
      </div>
      <div>
        <div className={styles.hero}>
          <h1>NextLevel Food for NextLevel Foddies</h1>
          <p>Taste & Share food from all over the world</p>
        </div>
        <div className={styles.cta}>
          <Link href="/community">
            <p>Join the Community</p>
          </Link>
          <Link href="/meals">
            <p>Explore Meals</p>
          </Link>
        </div>
      </div>
    </header>
    <main>
      <section className={styles.section}>
        <h2>How it works</h2>
        <p>
          NextLevel Food is a platform for foodies to share their favorite
          recipes with the world. It&apos;s a place to discover new dishes, and
          to connect with other food lovers.
        </p>
        <p>
          NextLevel Food is a place to discover new dishes, and to connect with
          other food lovers.
        </p>
      </section>

      <section className={styles.section}>
        <h2>Why NextLevel Food?</h2>
        <p>
          NextLevel Food is a platform for foodies to share their favorite
          recipes with the world. It&apos;s a place to discover new dishes, and
          to connect with other food lovers.
        </p>
        <p>
          NextLevel Food is a place to discover new dishes, and to connect with
          other food lovers.
        </p>
      </section>
    </main>
  </>
);

export default Home;
