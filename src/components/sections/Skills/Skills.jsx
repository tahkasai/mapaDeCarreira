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
                    <h3>Técnicas (Hard Skills)</h3>
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
                        <span className={styles.nomeHab}>PHP</span>
                        <ProgressBar tamanho="70%"/>
                    </div>
                    <div>
                        <span className={styles.nomeHab}>Java</span>
                        <ProgressBar tamanho="75%"/>
                    </div>
                    <div>
                        <span className={styles.nomeHab}></span>
                        <ProgressBar tamanho="10%"/>
                    </div>
                    <div>
                        <span className={styles.nomeHab}></span>
                        <ProgressBar tamanho="10%"/>
                    </div>
                </div>
                <div className={styles.habPessoais}>
                    <h3>Pessoais (Soft Skills)</h3>
                    <div>
                        <span className={styles.nomeHab}></span>
                        <ProgressBar tamanho="10%"/>
                    </div>
                    <div>
                        <span className={styles.nomeHab}></span>
                        <ProgressBar tamanho="10%"/>
                    </div>
                    <div>
                        <span className={styles.nomeHab}></span>
                        <ProgressBar tamanho="10%"/>
                    </div>
                    <div>
                        <span className={styles.nomeHab}></span>
                        <ProgressBar tamanho="10%"/>
                    </div>
                    <div>
                        <span className={styles.nomeHab}></span>
                        <ProgressBar tamanho="10%"/>
                    </div>
                </div>
            </div>
        </section>
        </>
    );
}