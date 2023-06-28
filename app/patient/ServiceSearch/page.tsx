import {PriceList} from "@/app/api/PriceList"
import ServiceList from '@/components/ServiceList'
import styles from "@/styles/doctor.module.scss"

let priceLisrt = new PriceList();

export default function ServicesPage() {
    const data = priceLisrt.GetAllServices();
    return( 
        <div className='flex justify-center'>
            <ServiceList ServiceList={data}></ServiceList>
        </div>    
    );
}