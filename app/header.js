import Link from "next/link";
import Image from "next/image";

import logoImg from "@/assets/logo.png";

import styles from "./header.module.css";

const Header = () => (
  <header className={styles.header}>
    <Link href="/" className={styles.logo}>
      <Image src={logoImg} alt="a plate with food on it" priority />
      NextLevel Food
    </Link>
    <nav className={styles.nav}>
      <ul>
        <li>
          <Link href="/meals">Browse Meals</Link>
        </li>
        <li>
          <Link href="/community">Foodie Community</Link>
        </li>
      </ul>
    </nav>
  </header>
);

export default Header;
