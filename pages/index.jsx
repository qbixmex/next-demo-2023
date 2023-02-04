import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>NextJs - Home</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="description" content="This content should be shown on search results" />
        <meta name="robots" content="index, follow" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Bienvenido a <a href="https://nextjs.org">Next.js!</a>
        </h1>
        <p className={styles.description}>
          Para comenzar edite
          <code className={styles.code}>pages/index.js</code><br />
        </p>
        <p className={styles.description}>
          <span>Ir a <a href="http://localhost:3000/about">About page</a></span>
        </p>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Patrocinado por
          <span className={styles.logo}>
            <Image
              className={styles["logo-image"]}
              src="/vercel.svg"
              alt="Vercel Logo"
              width={72}
              height={16}
            />
          </span>
        </a>
      </footer>
    </div>
  );
}
