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
                <h2>Новая услуга</h2>
                <p>Название услуги:</p>
                <input placeholder="Название"/>    
            </div>

            <ul  className={styles.servicesList}>
                {data.map((el) =>( 
                    <li key={el.id}>
                        <div className={styles.serviceContainer}>
                            <h2>{el.service.name}</h2>
                            <p className={styles.serviceDescription}>{el.service.description}</p>
                            <div className = {styles.horizontalContainer}>
                                <p>{el.price} .руб</p>
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