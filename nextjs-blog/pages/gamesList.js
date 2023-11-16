// pages/gamesList.js

import Head from 'next/head';
import styles from '../styles/Home.module.css';
import { useRouter } from "next/router";


const GamesList = () => {
    const router = useRouter();

const handleGoBack = () => {
    router.push('/')
}

  return (
    <div className={styles.container}>
      <Head>
        <title>Game List - GameStop</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header>
        <button onClick={handleGoBack}>Go Back Home</button>
      </header>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to the <span className={styles.highlight}>Game List</span>
        </h1>
        {/* Add your games list content here */}
      </main>

      <footer className={styles.footer}>
        <p>
          Powered by <span className={styles.highlight}>Hunter Monaghan</span>
        </p>
      </footer>
    </div>
  );
};

export default GamesList;
