import Head from 'next/head';
import { Navbar } from '../../components/Navbar';
import styles from '../../styles/Home.module.css';

export default function About() {
  return (
    <div className={styles.container}>
      <Head>
        <title>NextJs - About</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="description" content="Lorem ipsum elisius deu" />
        <meta name="robots" content="index, follow" />
      </Head>

      <Navbar />

      <main className={styles.main}>
        <h1 className={styles.title}>
          About <span className="blue">Page</span>
        </h1>
      </main>
    </div>
  );
}
