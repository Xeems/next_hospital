import styles from "@/styles/doctor.module.scss"
import {PriceList} from "@/app/api/PriceList"

let priceLisrt = new PriceList();

export default function ServicesPage() {   
    const data = priceLisrt.GetServicesByDoctor();
    
    return(
        <>
        <div className={styles.container}>
            <div className={styles.newServiceContainer}>
                <h2 className="text-3xl">Новая услуга</h2>
                <p className="mb-4">Название услуги:</p>
                <input placeholder="Название" className={styles.serviceInput}/> 
                <textarea className={styles.serviceInput}></textarea>
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

            <ul  className={styles.servicesList}>
                <h2 className="text-3xl my-8">Список услуг</h2>
                {data.map((el) =>( 
                    <li key={el.id}>
                        <div className={styles.serviceContainer}>
                            <h2 className="font-bold text-2xl">{el.service.name}</h2>
                            <p className={styles.serviceDescription}>{el.service.description}</p>
                            <div className = "flex flex-row w-auto">
                                <p className="mr-5">{el.price} .руб</p>
                                <p>{el.duration} .мин</p>
                            </div>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
        </>
    )
}