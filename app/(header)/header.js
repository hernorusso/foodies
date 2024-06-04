import Link from "next/link";
import Image from "next/image";

import logoImg from "@/assets/logo.png";

import { HeaderBackground } from "./header-background";
import { NavLink } from "./navlink";
import styles from "./header.module.css";

const Header = () => (
  <>
    <HeaderBackground />
    <header className={styles.header}>
      <Link href="/" className={styles.logo}>
        <Image src={logoImg} alt="a plate with food on it" priority />
        NextLevel Food
      </Link>
      <nav className={styles.nav}>
        <ul>
          <li>
            <NavLink href="/meals">Browse Meals</NavLink>
          </li>
          <li>
            <NavLink href="/community">Foodie Community</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  </>
);

export { Header };
