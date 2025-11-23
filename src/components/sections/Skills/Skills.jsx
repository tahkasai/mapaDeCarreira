import styles from './Skills.module.css'
import ProgressBar from '../../common/ProgressBar/ProgressBar';

export default function Skills(){
    return(
        <>
        <section className={styles.skills}>
            <h2>Habilidades</h2>
            <p>Afinidade com as seguintes tecnologias e técnicas:</p>
            <div className={styles.habilidades}>
                <div className={styles.habTecnicas}>
                    <div className={styles.gridHab}>
                        <div>
                            <span className={styles.nomeHab}>HTML</span>
                            <ProgressBar tamanho="95%"/>
                        </div>
                        <div>
                            <span className={styles.nomeHab}>CSS</span>
                            <ProgressBar tamanho="90%"/>
                        </div>
                        <div>
                            <span className={styles.nomeHab}>JavaScript</span>
                            <ProgressBar tamanho="70%"/>
                        </div>
                        <div>
                            <span className={styles.nomeHab}>React JS</span>
                            <ProgressBar tamanho="80%"/>
                        </div>
                        <div>
                            <span className={styles.nomeHab}>Java</span>
                            <ProgressBar tamanho="75%"/>
                        </div>
                        <div>
                            <span className={styles.nomeHab}>Python</span>
                            <ProgressBar tamanho="60%"/>
                        </div>
                        <div>
                            <span className={styles.nomeHab}>MySQL</span>
                            <ProgressBar tamanho="70%"/>
                        </div>
                    </div>
                    <h3>Ferramentas</h3>
                    <div className={styles.gridHab}>
                        <div>
                            <span className={styles.nomeHab}>Figma</span>
                            <ProgressBar tamanho="80%"/>
                        </div>
                        <div>
                            <span className={styles.nomeHab}>Canva</span>
                            <ProgressBar tamanho="95%"/>
                        </div>
                        <div>
                            <span className={styles.nomeHab}>Git</span>
                            <ProgressBar tamanho="65%"/>
                        </div>
                        <div>
                            <span className={styles.nomeHab}>GitHub</span>
                            <ProgressBar tamanho="80%"/>
                        </div>
                        <div>
                            <span className={styles.nomeHab}>Node.js</span>
                            <ProgressBar tamanho="50%"/>
                        </div>
                        <div>
                            <span className={styles.nomeHab}>Spring Boot</span>
                            <ProgressBar tamanho="35%"/>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        </>
    );
}