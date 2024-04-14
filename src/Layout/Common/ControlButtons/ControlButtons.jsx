import styles from "./ControlButtons.module.scss"


export const ControlButtons= () => {
    return (
        <div className={styles.controlBtnWrapper}>
            <div className={styles.controlBtnActive}></div>
            <div className={styles.controlBtn}></div>
            <div className={styles.controlBtn}></div>
        </div>
    )
}
