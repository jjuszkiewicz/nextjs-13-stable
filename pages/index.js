import { Layout } from "../components/Layout";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <Layout>
      <section className={styles.main}>
        <h1 className={styles.title}>Lubię Programować - Next.js 13 stable</h1>
      </section>
    </Layout>
  );
}
