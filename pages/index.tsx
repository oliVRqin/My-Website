import Head from 'next/head'
import styles from '../styles/Home.module.css'
import { FaGithub, FaTwitter, FaLinkedin } from 'react-icons/fa'
import { IconContext } from "react-icons";
import Header from '../components/header/index'
import Image from 'next/image'
import { GA_TRACKING_ID } from '../lib/gtag'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Home - Oliver Qin</title>
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
          <h1 className={styles.title}>
            Hi, I'm Oliver.
          </h1>
          <p className={styles.homePageDescription}>
            Current third-year student at CMU. I love to learn things.
          </p>
          <Image
              alt="Me"
              src="/personal_headshot.jpg"
              layout="intrinsic" 
              width="375"
              height="300"
          />
          <p className={styles.homePageDescription}>
            Occasionally I write about recent things I've learned and share it with people 
            in my mailing list. Feel free to join below!</p>
          <form action="https://oliverqin.us4.list-manage.com/subscribe/post?u=23cc99083b1bdacebce490aed&amp;id=44a40e085a" 
          method="post">
              <div className={styles.joinMailForm}>
                  <input type="text" className={styles.inputEmail} placeholder="Email Address"></input>
                  <input className={styles.joinMailButton} type="submit" value="Join"></input>
              </div>
          </form>
          <br></br>
          <div className={styles.navIcons}>
              <IconContext.Provider value={{ color: 'black', size: '70px' }}>
                  <a href="https://github.com/oliVRqin">
                      <FaGithub color="darkslategrey" />
                  </a>
              </IconContext.Provider>
              <IconContext.Provider value={{ color: '#00aced', size: '70px' }}>
                  <a href="https://twitter.com/OliverQin1">
                      <FaTwitter />
                  </a>
              </IconContext.Provider>
              <IconContext.Provider value={{ color: '#006192', size: '70px' }}>
                  <a href="https://www.linkedin.com/in/oliverqin/">
                      <FaLinkedin />
                  </a>
              </IconContext.Provider>
          </div>
        </div>
      </main>
    </div>
  )
}
