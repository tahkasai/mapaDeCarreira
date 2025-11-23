import styles from "./Career.module.css";
import Roadmap from "./../Roadmap/Roadmap"

export default function Career(props) {
    return (
        <li className={styles.box}>

            <label className={styles.iconeBox}></label>

            <div className={styles.conteudoCarreira}>
                <h3>{props.titulo}</h3>
                <p><b>Objetivo:</b> {props.descricao}</p>

                <span className={styles.tituloSecao}>Soft Skills exigidas:</span>
                <ul className={styles.listaTopicos}>
                    {props.topicos.map((item, index) => (
                        <li key={index}>{item}</li>
                    ))}
                </ul>

                <span className={styles.tituloSecao}>Roadmap de Aprendizado:</span>
                <Roadmap itens={props.roadmap} />
            </div>
        </li>
    );
}
