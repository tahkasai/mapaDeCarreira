import styles from './Footer.module.css'

export default function Footer(){
    return(
        <>
            <footer>
                <div className={styles.footer}>
                    <h2><a href="#hero">Tainá Kasai</a></h2>
                    <ul>
                        <li><a href="#sobre">Sobre mim</a></li>
                        <li><a href="#habilidade">Habilidades</a></li>
                        <li><a href="#carreira">Mapa de Carreira</a></li>
                        <li><a href="#contato">Contato</a></li>
                    </ul>
                    <p>Repositório no <a href="https://github.com/tahkasai/mapaDeCarreira">GitHub</a></p>
                </div>
            </footer>
        </>
    )
}