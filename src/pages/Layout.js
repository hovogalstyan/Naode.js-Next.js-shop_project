import React, {useEffect, useMemo, useState} from 'react';
import Link from "next/link";
import {TfiShoppingCart} from "react-icons/tfi";
import navStyles from '../styles/Nav.module.css';
import NavSearch from "@/Componets/navSearch/NavSearch";
import imagesNav from '../../public/navbar.webp';
import Footer from "@/pages/Footer";

const Layout = ({children}) => {
    const [headerActive, setHeaderActive] = useState(false);

    useEffect(() => {
        window.addEventListener('scroll', () => {
            if (window.pageYOffset > 70) {
                setHeaderActive(!headerActive)
            } else {
                setHeaderActive(false)
            }
        })
    }, []);
    const toggleHeader = useMemo(() => {
        return headerActive ? navStyles.header_active : ''
    }, [headerActive])
    return (
        <div>
            <header className={`${navStyles.header} ${toggleHeader}`}>
                <nav>
                    <figure className={navStyles.nav_logo}>
                        <img src={imagesNav.src} alt="logo"/>
                    </figure>
                    <NavSearch/>
                    <ul>
                        <li><Link href={'/'}>Home</Link></li>
                        <li><Link href={'/Card'}>Card <span><TfiShoppingCart/></span> </Link></li>
                    </ul>
                </nav>
            </header>
            <div className={navStyles.children_container}>
                {children}
            </div>
            <Footer/>
        </div>
    );
};

export default Layout;