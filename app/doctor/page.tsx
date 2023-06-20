import styles from "./doctor.module.scss"
import data from "@/data/services.json"

export default function DoctorPage() {
    return(
        <div className={styles.container}>
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