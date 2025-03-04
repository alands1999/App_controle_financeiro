import Estilos from "./style.module.css";
import Link from "next/link";
import Image from "next/image";
import PerfilImg from "../../../public/SideBar/perfil.png";
import ResumoImg from "../../../public/SideBar/resumo.png";
import CadastroImg from "../../../public/SideBar/cadastro.png";
import GraficosImg from "../../../public/SideBar/graficos.png";
import ConfigImg from "../../../public/SideBar/configuracoes.png";

export default function MenuLateral (){
    return(
        <nav className={Estilos.menu_Lateral}>
            <Link href="/login"><Image className={Estilos.img_Icon} src={PerfilImg} alt="Logo de perfil"/></Link>
            <Link href="/login"><Image className={Estilos.img_Icon} src={ResumoImg} alt="Resumo"/></Link>
            <Link href="/login"><Image className={Estilos.img_Icon} src={CadastroImg} alt="Área de Cadastro"/></Link>
            <Link href="/login"><Image className={Estilos.img_Icon} src={GraficosImg} alt="Gráficos"/></Link>
            <Link href="/login"><Image className={Estilos.img_Icon} src={ConfigImg} alt="Configurações"/></Link>
        </nav>
    )
}