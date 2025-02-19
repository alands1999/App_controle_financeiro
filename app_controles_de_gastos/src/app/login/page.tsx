import styles from "./style.module.css";
import Link from "next/link";
import LoginImg from "../../../public/login.jpg";
import Image from "next/image";

export default function LoginPage (){
    return(
    <main className={styles.container_principal}>
        <section className={styles.container}>
            <h1 className={styles.titulo}>Seja bem-vindo!</h1>
            <input type="text" className={styles.inputLog} placeholder="Usuário" />
            <input type="text" className={styles.inputLog} placeholder="Senha"/>

            <div className={styles.container_options}><div><input type="checkbox" id="rememberUser" /><label htmlFor="rememberUser">Lembrar</label></div> <Link className={styles.esqueceuSenha} href="/">Esqueceu a senha?</Link> </div>

            <button className={styles.botao}>Login</button>

        </section>
        <section className={styles.container}>
            <Image className={styles.imgLogin} src={LoginImg}/>
        </section>

    </main>    
    );
}