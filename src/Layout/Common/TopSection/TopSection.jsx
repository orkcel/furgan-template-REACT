import styles from "./TopSection.module.scss"
import {CaretRight} from "@phosphor-icons/react";
import {Link} from "react-router-dom";

const TopSection = ({page}) => {
    return (
        <section className={styles.topSection}>
            <div className={styles.topSectionContent}>
                <div className={styles.imageWrapper}>
                    <img
                        src="https://dreamingtheme.kiendaotac.com/html/furgan/assets/images/banner-for-all2.jpg"
                        alt="#"/>
                </div>
                <div className={styles.topSectionTitle}>
                    <h1>
                        {page}
                    </h1>
                    <span></span>
                    <p><Link to="/">Home</Link> <CaretRight/>{page}</p>
                </div>
            </div>
        </section>
    )
}

export default TopSection;