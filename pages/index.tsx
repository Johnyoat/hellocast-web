import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import {Heading,Text} from "@chakra-ui/layout";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>helloCast</title>
        <meta name="description" content="Hello Cast App" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <Heading className={styles.title}>
          Welcome to <a href="#">helloCast!</a>
        </Heading>
        </main>
      <footer className={styles.footer}>
      <Text>Copyright ©2021 All rights reserved</Text>
      </footer>
    </div>
  )
}
