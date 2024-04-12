import sponsorsData from "../../../../public/data/sponsorsData.json";
import styles from "./SponsorsContainer.module.scss";


export const SponsorsContainer = () => {
    return (
        <div className={styles.sponsorsContainer}>
            <div className={styles.sponsorsContent}>
                {sponsorsData.map((sponsor) => {
                    return (
                        <div key={sponsor.id} className={styles.sponsor}>
                            <img src={sponsor.imageUrl}
                                 alt="Sponsor"/>
                        </div>
                    )
                })}
            </div>
        </div>

    );
}

