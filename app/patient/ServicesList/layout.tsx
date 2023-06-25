'use client'

import SerachBar from "@/components/SerachBar";
import { useState } from "react";
import { PriceList } from "@/app/services/PriceList";

let priceLisrt: PriceList;

export default function RootLayout({children,}: {children: React.ReactNode}) {

    const [searchResult, setSearchResult] = useState<any>(null);

    const handleSearch = (searchTerm: string) => {
        console.log('Выполняется поиск по запросу:', searchTerm);
        
    }

return (    
        <>
            <div className="flex flex-col items-center mt-24">
                <SerachBar onSearch={handleSearch} ></SerachBar>
                <body>{children}</body>
            </div>
        </>
    )
}