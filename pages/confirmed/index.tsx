import Head from 'next/head'
import styles from '../../styles/Home.module.css'
import Header from '../../components/header/index'
import Image from 'next/image'

export default function Confirmed() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Confirmed - Oliver Qin</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <Header />
        <div className={styles.mainHome}>
            <h1 className={styles.title}>Subscription Confirmed</h1>
            <p className={styles.homePageDescription}>
                Thank you for Subscribing!
            </p>
            <Image
              alt="Me"
              src="/bike.png"
              layout="intrinsic" 
              width="1400"
              height="1000"
            />
        </div>
      </main>
    </div>
  )
}