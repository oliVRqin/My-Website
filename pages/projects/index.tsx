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
            <a href="https://github.com/oliVRqin/strava-api-workout-visualizer" className={styles.card}>
              <div className={styles.divDivider}>
                <Image
                      alt="Strava API Workout Visualizer"
                      src="/strava_dark.jpg"
                      layout="intrinsic" 
                      width="2000"
                      height="1250"
                />
              </div>
              <h3 className={styles.blogTitle}>Strava API Workout Visualizer &rarr;</h3>
              <p className={styles.homePageDescription}>An app which uses the Strava API to visualize my Strava exercises. Each color-coded grid represents a day in the past year, and clicking on the grids would yield additional workout info for that particular day.</p>
            </a>
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
            <a href="https://github.com/oliVRqin/scotty-shirts" className={styles.card}>
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
            <a href="https://github.com/oliVRqin/movie-search" className={styles.card}>
              <div className={styles.divDivider}>
                <Image
                      alt="Movie Search"
                      src="/movie_search.png"
                      layout="intrinsic" 
                      width="2000"
                      height="1475"
                />
              </div>
              <h3 className={styles.blogTitle}>Movie Search &rarr;</h3>
              <p className={styles.homePageDescription}>Connected with the OMDb Movie List API to make a movie search app.</p>
            </a>
            <a href="https://github.com/oliVRqin/time-adjusted-wealth-calculator" className={styles.card}>
              <div className={styles.divDivider}>
                <Image
                      alt="Wealth Calculator"
                      src="/ta_wealth_calc.png"
                      layout="intrinsic" 
                      width="2000"
                      height="1000"
                />
              </div>
              <h3 className={styles.blogTitle}>Time-Adjusted Wealth Calculator &rarr;</h3>
              <p className={styles.homePageDescription}>Traditional measures of "wealth" are usually monetary or asset-based; 
              however, this calculator adds the extra parameter of time as a way to put things into perspective. 
              Included is the option to switch currency values for wealth metrics.</p>
            </a>
          </div>
      </main>
    </div>
  )
}