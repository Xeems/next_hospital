import SerachBar from "@/components/SerachBar";
import { useState } from "react";
import { PriceList } from "@/app/api/PriceList";
import { url } from "inspector";

let priceLisrt: PriceList;

export default function RootLayout({children,}: {children: React.ReactNode}) {


return (    
        <>
            <div className="flex flex-col items-center mt-24">
                <SerachBar></SerachBar>
                <body>{children}</body>
            </div>
        </>
    )
}