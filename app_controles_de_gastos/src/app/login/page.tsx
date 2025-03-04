"use client";

import styles from "./style.module.css";
import Link from "next/link";
import LoginImg from "../../../public/login.jpg";
import Image from "next/image";
import { useState } from "react";
import { useRouter } from "next/navigation";


export default function LoginPage (){
    const [password, setPassword] = useState("");
    const router = useRouter();

    const handleLogin = () => {
        // Simulando um login (pode substituir por autenticação real)
        if (password === "1234") {
          localStorage.setItem("isAuthenticated", "true");
          router.push("/cadastro"); // Redireciona para a home
        } else {
          alert("Senha incorreta!");
        }
      };

    return(
    <main className={styles.container_principal}>
        <section className={styles.container}>
            <h1 className={styles.titulo}>Seja bem-vindo!</h1>
            <input type="text" className={styles.inputLog} placeholder="Usuário" />
            <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} className={styles.inputLog} placeholder="Senha"/>

            <div className={styles.container_options}><div><input type="checkbox" id="rememberUser" /><label htmlFor="rememberUser">Lembrar</label></div> <Link className={styles.esqueceuSenha} href="/">Esqueceu a senha?</Link> </div>

            <button className={styles.botao} onClick={handleLogin}>Login</button>

        </section>
        <section className={styles.container}>
            <Image className={styles.imgLogin} src={LoginImg} alt="Login image"/>
        </section>

    </main>    
    );
}