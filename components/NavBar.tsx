"use client";

import styles from '@/styles/navBar.module.scss'
import Link from 'next/link';
import { useState } from 'react';
import {usePathname} from 'next/navigation';


type NavLink ={
    Name: string;
    href: string;
};

type LinkProps = {
    links: NavLink[];
};

const NavBar = ({links}: LinkProps) =>{
    const pathName = usePathname();

    return(
        <nav className={styles.navStyle}>
            <div className={styles.linksContainer}>
                {links.map((link) =>{   
                    const isActive = pathName === link.href;
                    return(
                        <div key={link.href} className={styles.linkContainer}>
                            <Link href={link.href} className={isActive ? styles.activeLink && styles.linkStyle : styles.linkStyle}>{link.Name}</Link>
                        </div>                                 
                )})}
            </div>
        </nav>
    )
}

export default NavBar;