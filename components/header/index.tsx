import styles from '../../styles/Home.module.css'
import Link from 'next/link'

const Header = () => {
    return (
        <div className={styles.navPages}>
            <Link href="/">
                <a>Home</a>
            </Link>
            <Link href="/blog">
                <a>Blog</a>
            </Link>
            <Link href="/projects">
                <a>Projects</a>
            </Link>
            <Link href="/about">
                <a>About</a>
            </Link>
            <Link href="/calendar">
                <a>Calendar</a>
            </Link>
        </div>
    );
};

export default Header;