import styles from './Button.module.css';

export default function Botao(props){
    return(
        <>
        <a href={props.link} className={styles.BotaoPadrao} target={props.target}>{props.texto}</a>
        </>
    )
}

export function BotaoTransparente(props){
    return(
        <>
        <a href={props.link} className={styles.BotaoTransparente}>{props.texto}</a>
        </>
    )
}
export function BotaoForms(props){
    return(
        <>
        <button type="submit" className={styles.BotaoForms}>{props.texto}</button>
        </>
    )
}