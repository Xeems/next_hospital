import Image from 'next/image'
import BackgroundPic from '@/public/loginBackGround.jpg'
import styles from './page.module.scss'

export default function LoginPage() {
    return (
      <div className={styles.background}>
        <Image src={BackgroundPic} fill={true} alt='background'/>
      <div className={styles.wrapper}>
        <div className={styles.container}>
          <div className={styles.headerContainer}>           
            <h1>Login</h1>
            <p>Введите Логин и Пароль</p>
          </div>
          <p>Логин:</p>
          <input className={styles.inputs}/>
          <p>Пароль:</p>
          <input className={styles.inputs}/>
          <button className={styles.loginButton}>Вход</button>
        </div>
        
      </div>
    </div>
    )
  }
