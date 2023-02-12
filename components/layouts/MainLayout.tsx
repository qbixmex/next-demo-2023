import { ReactNode } from 'react';
import Head from 'next/head';

import { Navbar } from '../../components/Navbar';
import styles from './MainLayout.module.css';

type Props = {
  children: ReactNode;
};

export function MainLayout({ children }: Props) {
  return (
    <div className={ styles.container }>
      <Head>
        <title>NextJs - Home</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="description" content="This content should be shown on search results" />
        <meta name="robots" content="index, follow" />
      </Head>
      <Navbar />
      <main className={ styles.main }>
        { children }
      </main>
    </div>
  );
}