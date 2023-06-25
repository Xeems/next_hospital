import styles from '@/styles/patientData.module.scss';
import SearchBar from '@/components/SerachBar';

export default function patientPage() {
    return (
    <div className={styles.container}>
        <SearchBar></SearchBar>
    </div>
    )
}