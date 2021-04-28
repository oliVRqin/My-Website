import Head from 'next/head'
import styles from '../../styles/Home.module.css'
import Header from '../../components/header/index'
import Image from 'next/image'
import { GA_TRACKING_ID } from '../../lib/gtag'

export default function Projects() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Projects - Oliver Qin</title>
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
        <h1 className={styles.title}>
          Personal Projects
        </h1>
        <div className={styles.grid}>
            <a href="https://github.com/oliVRqin/Ninja-Run" className={styles.card}>
              <div className={styles.divDivider}>
                <Image
                      alt="Ninja Run"
                      src="/ninja_run.png"
                      layout="intrinsic" 
                      width="2000"
                      height="1200"
                />
              </div>
              <h3 className={styles.blogTitle}>Ninja Run &rarr;</h3>
              <p className={styles.homePageDescription}>A Unity2D game mimicking the Super Mario-style. Collect coins and beat the levels!</p>
            </a>
            <a href="https://github.com/oliVRqin/E-Commerce-Shopping-Cart-App" className={styles.card}>
              <div className={styles.divDivider}>
                <Image
                      alt="Scotty Shirts"
                      src="/scotty_shirts.png"
                      layout="intrinsic" 
                      width="2000"
                      height="1000"
                />
              </div>
              <h3 className={styles.blogTitle}>Scotty Shirts &rarr;</h3>
              <p className={styles.homePageDescription}>An e-commerce shopping cart application selling T-shirts.</p>
            </a>
            <a href="https://github.com/oliVRqin/wealth-calculator" className={styles.card}>
              <div className={styles.divDivider}>
                <Image
                      alt="Time-Adjusted Wealth Calculator"
                      src="/ta_wealth_calc.png"
                      layout="intrinsic" 
                      width="2000"
                      height="1000"
                />
              </div>
              <h3 className={styles.blogTitle}>Time-Adjusted Wealth Calculator &rarr;</h3>
              <p className={styles.homePageDescription}>A time-adjusted wealth calculator for people of all ages.</p>
            </a>
            <a href="" className={styles.card}>
              {/* <div className={styles.divDivider}>
                <Image
                      alt=""
                      src=""
                      layout="intrinsic" 
                      width="800"
                      height="480"
                />
              </div> */}
              <h3 className={styles.blogTitle}>Space Shooters Virtual Reality Game &rarr;</h3>
              <p className={styles.homePageDescription}>A “Space Invaders” inspired shooting game in virtual reality with Unity and C#</p>
            </a>
          </div>
      </main>
    </div>
  )
}