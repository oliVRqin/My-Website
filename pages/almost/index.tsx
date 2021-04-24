import Head from 'next/head'
import styles from '../../styles/Home.module.css'
import Header from '../../components/header/index'
import Image from 'next/image'
import { GA_TRACKING_ID } from '../../lib/gtag'

export default function Almost() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Almost - Oliver Qin</title>
        <link rel="icon" href="/favicon.ico" />
        <script async src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`} />
        <script dangerouslySetInnerHTML={{__html: `window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_TRACKING_ID}', {
            page_path: window.location.pathname,
            });`
            }}
        />
      </Head>
      <main className={styles.main}>
        <Header />
        <div className={styles.mainHome}>
            <h1 className={styles.title}>Almost Done...</h1>
            <p className={styles.homePageDescription}>
                To confirm your email and subscribe, please click the link in the email that was just sent to you.
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