import styles from './Header.module.css';

export default function Header(){
    return(
        <>
            <header>
                <div  className={styles.header}>
                    <span>Tainá Kasai</span>
                    <ul>
                        <li><a href="#">Sobre mim</a></li>
                        <li><a href="#">Habilidades</a></li>
                        <li><a href="#">Mapa de Carreira</a></li>
                        <li><a href="#">Contato</a></li>
                    </ul>
                </div>
            </header>
        </>
    );
}