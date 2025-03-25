import React, { useState, useEffect } from 'react';
import { Link } from "@components/navigation/Link";
import style from './Header.module.css';

export default function Header({ theme }) {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <div
            className={`${style['container']} 
                ${scrolled ? style.scrolled : ''} 
                ${theme === 'darkMode' ? style.darkMode : style.lightMode}`}
        >
            <header className={style.header}>
                <h2 className={style['header-title']}>
                    <Link to="/">Avenue Home</Link>
                </h2>
                <nav className={style['header-nav']}>
                    <ul>
                        <li><Link to="/AboutUs">ABOUT US +</Link></li>
                        <li><Link to="/OurPeople">OUR PEOPLE +</Link></li>
                        <li><Link to="/LatestNews">LATEST NEWS +</Link></li>
                    </ul>
                </nav>
            </header>
        </div>
    );
}
