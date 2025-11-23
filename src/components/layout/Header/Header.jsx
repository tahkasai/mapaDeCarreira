import { useState } from 'react';
import styles from './Header.module.css';

export default function Header() {

    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <header className={styles.headerContainer}>
            <div className={styles.header}>
                <span>Tainá Kasai</span>

                {/* Menu Hamburguer */}
                <button 
                    className={styles.hamburger}
                    onClick={() => setMenuOpen(!menuOpen)}
                    aria-label="Menu"
                >
                    <span className={menuOpen ? styles.bar1Active : styles.bar1}></span>
                    <span className={menuOpen ? styles.bar2Active : styles.bar2}></span>
                    <span className={menuOpen ? styles.bar3Active : styles.bar3}></span>
                </button>

                {/* Menu Padrão */}
                <ul className={`${styles.menu} ${menuOpen ? styles.menuOpen : ""}`}>
                    <li><a href="#sobre">Sobre mim</a></li>
                    <li><a href="#habilidades">Habilidades</a></li>
                    <li><a href="#carreira">Mapa de Carreira</a></li>
                    <li><a href="#contato">Contato</a></li>
                </ul>
            </div>
        </header>
    );
}
