import styles from './ProgressBar.module.css'
export default function ProgressBar(props){
    return(
        <>
            <div className={styles.barraTotal}>
                <div className={styles.barra} style={{width:props.tamanho}}></div>
            </div>
        </>
    );
}