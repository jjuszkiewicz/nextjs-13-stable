import Link from "next/link";
import styles from "../styles/Home.module.css";

export const Layout = ({ children }) => {
  return (
    <div className={styles.container}>
      <nav>
        <Link href="/">Home</Link> | <Link href="/posts">Artykuły</Link>
      </nav>
      <main>{children}</main>
    </div>
  );
};
