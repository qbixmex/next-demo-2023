import Head from "next/head";
import styles from "../styles/Home.module.css";
import { Navbar } from "../components/Navbar";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>NextJs - Home</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="description" content="This content should be shown on search results" />
        <meta name="robots" content="index, follow" />
      </Head>

      <Navbar />

      <main className={styles.main}>
        <h1 className={styles.title}>
          Home <span className="blue">Page</span>
        </h1>
      </main>
    </div>
  );
}
