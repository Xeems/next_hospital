import styles from "@/styles/doctor.module.scss"
import NavBar from "@/components/NavBar"
import {PriceList} from "@/app/services/PriceList"

type NavLink ={
    Name: string;
    href: string;
};

const links: NavLink[] = [
    {Name: "Услуги", href: "/services"},
    {Name: "Записи", href: "/appointments"}
]

let priceLisrt = new PriceList();

export default function DoctorPage() {   
    const data = priceLisrt.GetServices();
    
    return(
        <>
        <NavBar links={links}></NavBar> 
        <div className={styles.container}>
            <div className={styles.newServiceContainer}>
                <h2 className="text-3xl">Новая услуга</h2>
                <p>Название услуги:</p>
                <input placeholder="Название" className={styles.serviceInput}/> 
                <textarea className={styles.serviceInput}></textarea>
                <div className="flex flex-row">   
                    <input placeholder="Цена" className={styles.serviceInput}/>
                    <input placeholder="Продолжительность" className="serviceInput w-1/4"/> 
                </div>
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