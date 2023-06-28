import  {priceList}  from '@/types/priceList';
import styles from '@/styles/components/ServiceList.module.scss'


type Props = {
    ServiceList: priceList[];
}

const ServiceList = ({ServiceList}: Props) => {
  return (
    <div className={styles.servicesList}>
        <h2 className="text-3xl my-8">Список услуг</h2>
        {ServiceList.map((el) =>(            
            <div key={el.id} className={styles.serviceContainer}>
                <h2 className="font-bold text-2xl">{el.service.name}</h2>
                <p className={styles.serviceDescription}>{el.service.description}</p>
                <div className = "flex justify-between w-auto items-center">
                    <div>
                    <p className="mr-5">{el.price} .руб</p>
                    <p>{el.duration} .мин</p>
                    </div>
                    <button className='w-auto h-9 py-1 px-3 ml- bg-blue-600 hover:bg-blue-700 rounded-md text-lg text-white'>Запись</button>
                </div>
            </div>        
        ))}
    </div>
  )
}

export default ServiceList;