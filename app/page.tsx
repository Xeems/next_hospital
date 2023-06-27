'use client';

import { useRouter } from "next/navigation";
import { signIn } from "next-auth/react";
import type { FormEventHandler } from "react";
import Image from 'next/image'
import BackgroundPic from '@/public/loginBackGround.jpg'
import styles from '@/styles/login.module.scss'

export default function LoginPage() {
  const router = useRouter();

  const handleSubmit: FormEventHandler<HTMLFormElement> = async (event) => {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);

    const res = await signIn("credentials", {
      login: formData.get("login"),
      password: formData.get("password"),
      redirect: false,
    });

    console.log(res);
    if (res && !res.error) {
      router.push("/patient/ServiceSearch");
    } else {
      console.log(res);
    }
  };

    return (
      <div className={styles.background}>
        <Image src={BackgroundPic} fill={true} alt='background'/>
      <div className={styles.wrapper}>
        <div className={styles.container}>
          <div className={styles.headerContainer}>           
            <h1>Login</h1>
            <p>Введите Логин и Пароль</p>
          </div>

          <form onSubmit={handleSubmit}>
            <p>Логин:</p>
            <input className={styles.inputs}/>
            <p>Пароль:</p>
            <input className={styles.inputs}/>
            <button className={styles.loginButton} type="submit">Вход</button>
          </form>
        </div>
        
      </div>
    </div>
    )
  }
