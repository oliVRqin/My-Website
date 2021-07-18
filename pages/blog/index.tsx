import Head from 'next/head'
import styles from '../../styles/Home.module.css'
import Link from 'next/link'
import Header from '../../components/header/index'
import { GA_TRACKING_ID } from '../../lib/gtag'

const { BLOG_URL, CONTENT_API_KEY } = process.env

type Post = {
    title: string
    slug: string
    custom_excerpt: string
}

async function getPosts() {
    const res = await fetch(
        `${BLOG_URL}/ghost/api/v3/content/posts/?key=${CONTENT_API_KEY}&fields=title,slug,custom_excerpt&limit=all`
        ).then((res) => res.json())
        const posts = res.posts
        return posts;
}

export const getStaticProps = async({ params }) => {
    const posts = await getPosts()
    return {
        props: { posts },
        revalidate: 10
    }
}

const Blog: React.FC<{ posts: Post[] }> = (props) => {
    const { posts } = props
    return (
        <div className={styles.container}>
            <Head>
                <title>Blog - Oliver Qin</title>
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
                    All Articles
                </h1>
                <div className={styles.grid}>
                    {posts.map((post) => {
                        return (
                            <Link href="/post/[slug]" as={`/post/${post.slug}`} key={post.slug}>
                                <a className={styles.card}>
                                    <h3 className={styles.blogTitle}>{post.title}</h3>
                                    <p className={styles.homePageDescription}>{post.custom_excerpt}</p>
                                </a>
                            </Link>
                        )
                    })}
                </div>
            </main>
        </div>
    )
};

export default Blog;