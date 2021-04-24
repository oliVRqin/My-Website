import Head from 'next/head'
import { useRouter } from 'next/router'
import styles from '../../styles/Home.module.css'
import Header from '../../components/header/index'
import { GA_TRACKING_ID } from '../../lib/gtag'

const { BLOG_URL, CONTENT_API_KEY } = process.env

async function getPost(slug: string) {
    const res = await fetch(
        `${BLOG_URL}/ghost/api/v3/content/posts/slug/${slug}?key=${CONTENT_API_KEY}&fields=title,slug,html,created_at,updated_at`
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
}

const Post: React.FC<{post: Post}> = (props) => {
    const router = useRouter()
    const { post } = props

    if (router.isFallback) {
        return <h1>Loading...</h1>
    }

    // console.log(post)
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
                <div className={styles.homePageDescription} dangerouslySetInnerHTML={{ __html: post.html}}></div>
            </div>    
        </div> 
    )
}

export default Post;