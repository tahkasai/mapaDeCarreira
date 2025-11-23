import styles from './AboutMe.module.css'
import Image from './../../../assets/image/fotoPerfil.jpg'
import Botao from './../../common/Button/Button'
import SplitText from './../../common/SplitText/SplitText';

export default function AboutMe(){
    return(
        <>
            <section className={styles.aboutMe}>
                <div className={styles.about}>
                    <div className={styles.image}>
                        <img src={Image} alt="Foto de perfil" />
                    </div>
                    <div className={styles.info}>
                        <SplitText 
                        tag="h2"
                        text="Olá, Prazer em conhecer!"
                        className="text-2xl font-semibold text-center"
                        rootMargin="-100px"
                        />
                        <div className={styles.paragrafos}>
                            <p>Meu nome é Tainá Kasai. Tenho formação técnica em Desenvolvimento de Sistemas pela ETEC de Poá e estou no 3º semestre de Análise e Desenvolvimento de Sistemas na FATEC Ferraz, enquanto aprofundo meus estudos em Programação Web em Java pelo Instituto PROA.</p>
                            <p>Busco me tornar Desenvolvedora Full Stack, unindo minha paixão por tecnologia e design para criar soluções funcionais, intuitivas e inovadoras, sempre em constante evolução.</p>
                        </div>
                        <Botao texto='Baixar o meu CV'/>
                    </div>
                </div>
            </section>
        </>
    );
}