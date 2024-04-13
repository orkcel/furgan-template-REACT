import styles from "./ProductCard.module.scss";
import {ArrowsLeftRight, Heart, ShoppingCartSimple, Star} from "@phosphor-icons/react";
export const ProductCard = ({card}) => {
    return (
            <div className={styles.card}>
                {
                    card.new ?
                        <div
                            className={`${styles.mark} ${styles.newMark} ${card.regularPrice === null ? styles.newDefault : ""}`}>
                            new
                        </div>
                        :
                        null
                }
                {
                    card.regularPrice !== null ?

                        <div className={`${styles.mark} ${styles.saleMark}`}>
                            {(((card.regularPrice - card.salePrice) / card.regularPrice) * 100).toFixed(2) + "%"}
                        </div>
                        :
                        null
                }
                <div className={styles.quickView}>
                    quick view
                </div>
                <div className={styles.cardOptions}>
                    <div className={styles.option}>
                        <Heart/>
                    </div>
                    <div className={styles.option}>
                        <ShoppingCartSimple/>

                    </div>
                    <div className={styles.option}>
                        <ArrowsLeftRight/>
                    </div>

                </div>

                <div className={styles.cardImage}>
                    <img
                        src={card.image}
                        alt="Product Image"
                    />
                </div>
                <div className={styles.cardDesc}>
                    <div className={`${styles.cardDescStar} ${card.goldRating ? styles.hasGoldRating : ""}`}>
                        <Star/>
                        <Star/>
                        <Star/>
                        <Star/>
                        <Star/>
                    </div>
                    <div className={styles.cardDescText}>
                        <h3><a href="#">{card.name}</a></h3>
                        <span><p>{card.regularPrice ? "$" + card.regularPrice.toFixed(2) : null} </p>${card.salePrice?.toFixed(2)}</span>
                    </div>
                </div>
            </div>
    )
}