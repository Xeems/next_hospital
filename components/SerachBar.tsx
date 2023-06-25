"use client";
import styles from '@/styles/components/SearchBar.module.scss';
import Image from 'next/image';
import imSource from '@/public/searchIcon.svg'
import React, { useState, ChangeEvent, FormEvent } from 'react';

interface SearchBarProps {
    onSearch: (searchTerm: string) => void;
  }

const SerachBar :React.FC<SearchBarProps> = ({onSearch}) => {
    const [searchTerm, setSearchTerm] = useState('');

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSearchTerm(event.target.value);
      };
    
      const handleFormSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        onSearch(searchTerm);
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

