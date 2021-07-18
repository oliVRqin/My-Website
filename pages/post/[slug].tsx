import Head from 'next/head'
import { useRouter } from 'next/router'
import styles from '../../styles/Home.module.css'
import Header from '../../components/header/index'
import { GA_TRACKING_ID } from '../../lib/gtag'

const { BLOG_URL, CONTENT_API_KEY } = process.env

async function getPost(slug: string) {
    const res = await fetch(
        `${BLOG_URL}/ghost/api/v3/content/posts/slug/${slug}?key=${CONTENT_API_KEY}&fields=title,slug,html,created_at,published_at`
        ).then((res) => res.json())

        const posts = res.posts
        return posts[0]
}

export const getStaticProps = async({ params }) => {
    const post = await getPost(params.slug)
    return {
        props: { post },
        revalidate: 10
    }
}

export const getStaticPaths = () => {
    return {
        paths: [],
        fallback: true
    }
}

type Post = {
    title: string
    html: string
    slug: string
    created_at: string
    updated_at: string
    published_at: String
}

const Post: React.FC<{post: Post}> = (props) => {
    const router = useRouter()
    const { post } = props

    if (router.isFallback) {
        return <h1>Loading...</h1>
    }

    let dateString = "";
    let year = post.published_at.split("T")[0].split("-")[0];
    let month = post.published_at.split("T")[0].split("-")[1];
    let day = post.published_at.split("T")[0].split("-")[2];

    if (parseInt(month) == 1) {
        if (parseInt(day) < 10) {
            dateString = `January ${parseInt(day, 10)}, ${year}`
        } else {
            dateString = `January ${day}, ${year}`
        }
    } else if (parseInt(month) == 2) {
        if (parseInt(day) < 10) {
            dateString = `February ${parseInt(day, 10)}, ${year}`
        } else {
            dateString = `February ${day}, ${year}`
        }
    } else if (parseInt(month) == 3) {
        if (parseInt(day) < 10) {
            dateString = `March ${parseInt(day, 10)}, ${year}`
        } else {
            dateString = `March ${day}, ${year}`
        }
    } else if (parseInt(month) == 4) {
        if (parseInt(day) < 10) {
            dateString = `April ${parseInt(day, 10)}, ${year}`
        } else {
            dateString = `April ${day}, ${year}`
        }
    } else if (parseInt(month) == 5) {
        if (parseInt(day) < 10) {
            dateString = `May ${parseInt(day, 10)}, ${year}`
        } else {
            dateString = `May ${day}, ${year}`
        }
    } else if (parseInt(month) == 6) {
        if (parseInt(day) < 10) {
            dateString = `June ${parseInt(day, 10)}, ${year}`
        } else {
            dateString = `June ${day}, ${year}`
        }
    } else if (parseInt(month) == 7) {
        if (parseInt(day) < 10) {
            dateString = `July ${parseInt(day, 10)}, ${year}`
        } else {
            dateString = `July ${day}, ${year}`
        }
    } else if (parseInt(month) == 8) {
        if (parseInt(day) < 10) {
            dateString = `August ${parseInt(day, 10)}, ${year}`
        } else {
            dateString = `August ${day}, ${year}`
        }
    } else if (parseInt(month) == 9) {
        if (parseInt(day) < 10) {
            dateString = `September ${parseInt(day, 10)}, ${year}`
        } else {
            dateString = `September ${day}, ${year}`
        }
    } else if (parseInt(month) == 10) {
        if (parseInt(day) < 10) {
            dateString = `October ${parseInt(day, 10)}, ${year}`
        } else {
            dateString = `October ${day}, ${year}`
        }
    } else if (parseInt(month) == 11) {
        if (parseInt(day) < 10) {
            dateString = `November ${parseInt(day, 10)}, ${year}`
        } else {
            dateString = `November ${day}, ${year}`
        }
    } else if (parseInt(month) == 12) {
        if (parseInt(day) < 10) {
            dateString = `December ${parseInt(day, 10)}, ${year}`
        } else {
            dateString = `December ${day}, ${year}`
        }
    }

    return (
        <div className={styles.container}>
            <Head>
                <title>{post.title} - Oliver Qin</title>
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
            <div className={styles.main}>
                <Header />
                <h1 className={styles.title}>{post.title}</h1>
                <h1 className={styles.homePageDescription}><i>{dateString}</i></h1>
                <div className={styles.homePageDescription} dangerouslySetInnerHTML={{ __html: post.html}}></div>
            </div>    
        </div> 
    )
}

export default Post;