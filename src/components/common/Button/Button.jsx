import styles from './Button.module.css';

export default function Botao(props){
    return(
        <>
        <button className={styles.BotaoPadrao}>{props.texto}</button>
        </>
    )
}

export function BotaoTransparente(props){
    return(
        <>
        <button className={styles.BotaoTransparente}>{props.texto}</button>
        </>
    )
}