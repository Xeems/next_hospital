import styles from "@/styles/doctor.module.scss"
import data from "@/data/services.json"
import NavBar from "@/components/NavBar"

type NavLink ={
    Name: string;
    href: string;
};

const links: NavLink[] = [
    {Name: "Дом", href: "/services"},
    {Name: "Выход", href: "/appointments"}
]

export default function DoctorPage() {
    return(
        <div className={styles.container}>
            <NavBar links={links}></NavBar>
            {data.map((el) =>(
                <ul key={el.id} className={styles.servicesList}>
                    <li>
                        <div className={styles.serviceContainer}>
                            <p>{el.name}</p>
                            <p>{el.description}</p>
                            <p>{el.price}</p>
                        </div>
                    </li>
                </ul>
            ))}
        </div>
    )
}