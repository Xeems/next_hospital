"use client"

import styles from '@/styles/navBar.module.scss'
import Link from 'next/link';
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
            <ul className={styles.linkList}>
                {links.map((link) =>(
                    <li key={link.href} >                
                        <div className={styles.linksContainer}>
                            <Link href={link.href} className={styles.linkStyle}>{link.Name}</Link>
                        </div>  
                    </li>              
                ))}
            </ul>
        </nav>
    )
}

export default NavBar;