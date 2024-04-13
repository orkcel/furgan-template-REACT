import styles from "./BlockTitle.module.scss"

const BlockTitle = ({title}) => {
    return (
        <div className={styles.blockTitle}>
            <h4>{title}</h4>
            <span></span>
        </div>

    );
};

export default BlockTitle;