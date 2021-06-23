import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>helloCast</title>
        <meta name="description" content="Hello Cast App" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <a href="#">helloCast!</a>
        </h1>
        </main>
      <footer className={styles.footer}>
      Copyright ©2021 All rights reserved
      </footer>
    </div>
  )
}
