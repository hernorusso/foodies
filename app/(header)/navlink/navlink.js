"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

import styles from "./navlink.module.css";

const NavLink = ({ href, children }) => {
  const pathname = usePathname();
  const classname = pathname.startsWith(href) ? styles.active : undefined;

  return (
    <Link href={href} className={`${classname} ${styles.link} `}>
      {children}
    </Link>
  );
};

export { NavLink };
