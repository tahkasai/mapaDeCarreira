import styles from "./Roadmap.module.css";

export default function Roadmap({ itens }) {
    return (
        <div className={styles.roadmap}>
            {itens.map((item, index) => (
                <div key={index} className={styles.item}>
                    {item}
                </div>
            ))}
        </div>
    );
}