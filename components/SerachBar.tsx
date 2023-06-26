"use client";
import styles from '@/styles/components/SearchBar.module.scss';
import Image from 'next/image';
import imSource from '@/public/searchIcon.svg'
import React, { useState, ChangeEvent, FormEvent } from 'react';
import { useRouter } from 'next/navigation';


const SerachBar = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const router = useRouter()

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSearchTerm(event.target.value);
      };
    
      const handleFormSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        var searchURL = encodeURI(searchTerm);
        const navigateLink = '/patient/ServiceSearch/result?search_query='+ searchURL;
        console.log(navigateLink);

        router.push(navigateLink);
      };
   
    return(
        <form onSubmit={handleFormSubmit} className='flex flex-row h-12 w-auto'>
            <input value={searchTerm} onChange={handleInputChange} className={styles.searchInput}/>
            <button type='submit' className={styles.searchButton} >
                <Image src={imSource} alt='search image' fill={true} className={styles.searchImage}></Image>
            </button>
        </form>
    )
}

export default SerachBar;

