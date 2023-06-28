import styles from "@/styles/doctor.module.scss"
import {PriceList} from "@/app/api/PriceList"
import ServiceList from "@/components/ServiceList";

let priceLisrt = new PriceList();

export default function ServicesPage() {   
    const data = priceLisrt.GetServicesByDoctor();
    
    return(
        <>
        <div className={styles.container}>
            <div className={styles.newServiceContainer}>
                <h2 className="text-3xl">Новая услуга</h2>
                <input placeholder="Название" className={styles.serviceInput}/> 
                <textarea className={styles.serviceInput} placeholder="Описание"></textarea>
                <div className="flex flex-row">   
                    <div className="w-1/6 mr-2">
                        <input placeholder="Цена" className={styles.serviceInput}/>
                    </div>
                    <div className="w-1/6">
                        <input placeholder="Продолжительность" className={styles.serviceInput}/> 
                    </div>
                </div>
                <button className="w-24 h-9 relative mt-3 -z-10 rounded-sm text-white bg-blue-500 hover:bg-blue-700">Добавить</button>
            </div>

            <ServiceList  ServiceList={data} ></ServiceList>
        </div>
        </>
    )
}