import Head from 'next/head'
import styles from '../../styles/Home.module.css'
import Header from '../../components/header/index'
import Link from 'next/link'

export default function About() {
  return (
    <div className={styles.container}>
      <Head>
        <title>About - Oliver Qin</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <Header />
        <h1 className={styles.title}>About Me</h1>
        <p className={styles.homePageDescription}>
            I love thinking about how technological advancements could possibly shape the future of our world, and am particularly interested 
            in how virtual reality could possibly allow immersive “virtual worlds" to be built in the future. This semester, I 
            am doing mixed reality research on how the positioning of virtual elements in users’ field of view influences noticeability, saliency, 
            and readability. <br></br> <br></br>
            I also reflect a lot, and through my journey 
            of running into new perspectives I will write some of them on this <Link href="/blog">
            <a>blog</a></Link>. Outside of school I love to explore the outdoors, and you could usually find me either going for a run, biking 
            around Pittsburgh, or playing basketball. I like to experience and learn new things, and am always down for an adventure or two! Some adventures I wish to 
            experience/goals I want to accomplish in the years ahead are here. <br></br>
            <br></br>
            If you're into amateur photography (mostly of the landscape variety), feel free to check out some photos I take in my free time.<br></br>
        </p>
        <h1 className={styles.title}>Reading</h1>
        <ul>
            <li className={styles.homePageDescription}>Mastery by Robert Greene</li>
        </ul>
      </main>
    </div>
  )
}