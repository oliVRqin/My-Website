import React, { useState, useEffect } from "react";
import styles from '../../styles/Home.module.css'
import Link from 'next/link'

const Header = () => {
    const [isToggled, setIsToggled] = useState(false);

    useEffect(() => {
        setIsToggled(JSON.parse(localStorage.getItem("isToggled")))
    }, [])

    useEffect(() => {
        if (isToggled) {
            document.body.style.background = "black";
            document.body.style.color = "beige";
            localStorage.setItem("isToggled", JSON.stringify(isToggled));
            console.log(localStorage.getItem("isToggled"));
        } else {
            document.body.style.background = "white";
            document.body.style.color = "black";
            localStorage.setItem("isToggled", JSON.stringify(isToggled));
            console.log(localStorage.getItem("isToggled"));
        }
    })
    
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
            {/* <Link href="/calendar">
                <a>Calendar</a>
            </Link> */}
            <input type="checkbox" onClick={() => setIsToggled(!isToggled)} id="bulb"/>
            <label htmlFor="bulb"></label>
        </div>
    );
};

export default Header;