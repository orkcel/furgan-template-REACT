import styles from "./SectionTitle.module.scss";

const SectionTitle = ({heading,title}) => {
    return (
        <div className={styles.sectionTitle}>
            <h2><span></span>{heading}<span></span></h2>
            <p>{title}</p>
        </div>

    );
};

export default SectionTitle;