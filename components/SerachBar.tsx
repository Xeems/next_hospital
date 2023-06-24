"use client";
import styles from '@/styles/components/SearchBar.module.scss';
import Image from 'next/image';
import imSource from '@/public/searchIcon.svg'
import { MouseEventHandler } from 'react';

export default function SerachBar(searchClick: MouseEventHandler) {
   
    return(
        <div className='flex flex-row h-12 w-auto'>
            <input className={styles.searchInput}/>
            <button className={styles.searchButton}>
                <Image src={imSource} alt='search image' fill={true} className={styles.searchImage} onClick={searchClick}></Image>
            </button>
        </div>
    )
}

