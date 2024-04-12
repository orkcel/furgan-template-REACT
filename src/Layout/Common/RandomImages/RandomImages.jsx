import randomImagesData from "../../../../public/data/randomImagesData.json";
import {Chat} from "@phosphor-icons/react";
import styles from "./RandomImages.module.scss";

export const RandomImages = () => {
    return (
        <div className={styles.randomImgContainer}>
            {randomImagesData.map((image) => {
                return (
                    <div key={image.id} className={styles.randomImg}>
                        <div className={styles.imageMask}>
                            <p>0 <Chat/> <span></span> 0</p>
                        </div>
                        <img src={image.imageUrl}
                             alt="Random Image"/>
                    </div>
                )
            })}
        </div>
    )
}