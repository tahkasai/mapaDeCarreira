import styles from './hero.module.css';
import Botao from './../../common/Button/Button';
import {BotaoTransparente} from './../../common/Button/Button';
import Header from './../../layout/Header/Header';
import LiquidEther from '../../common/LiquidEther/LiquidEther';

export default function Hero(){
    return(
        <>
            <div className={styles.hero} id="hero">
                <LiquidEther/>
                <Header/>    
                <div className={styles.informacoesHero}>
                    <span className={styles.apresentacao}>Venha conhecer o meu</span>
                    <h1>Mapa de Carreira</h1>
                    <div>
                        <Botao 
                        texto="Entre em contato"
                        link="#contato"
                        />
                        <BotaoTransparente 
                        texto="Veja mais"
                        link="#sobre"
                        />
                    </div>
                </div>
            </div>
        </>
    )
}