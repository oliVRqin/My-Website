import Head from 'next/head'
import styles from '../../styles/Home.module.css'
import Header from '../../components/header/index'
import Iframe from 'react-iframe'

export default function Calendar() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Calendar - Oliver Qin</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <Header />
        <h1 className={styles.title}>
          My Calendar
        </h1>
        <br></br>
        <Iframe className={styles.calendar} url="https://calendar.google.com/calendar/embed?height=600&amp;wkst=1&amp;bgcolor=%23ffffff&amp;ctz=America%2FNew_York&amp;src=b2xpdmVycWluMjI4QGdtYWlsLmNvbQ&amp;color=%23039BE5&amp;title=My%20Calendar&amp;showTitle=0&amp;showPrint=0&amp;showDate=0&amp;showNav=1&amp;showCalendars=1&amp;showTz=1&amp;showTabs=1&amp;mode=WEEK" scrolling="no" />
      </main>
    </div>
  )
}