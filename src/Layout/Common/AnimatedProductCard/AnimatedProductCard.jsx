import styles from "./AnimatedProductCard.module.scss";
import {ArrowsLeftRight, Check, Heart, MagnifyingGlass, ShoppingCartSimple, Star} from "@phosphor-icons/react";

export const AnimatedProductCard = ({product}) => {
    return (
        <div className={styles.card}>
            <div className={styles.cardImage}>
                <div className={`${styles.optionBtn} ${styles.wishListBtn}`}>
                    <Heart/>
                </div>
                <div className={`${styles.optionBtn} ${styles.arrowsBtn}`}>
                    <ArrowsLeftRight/>
                </div>
                <div className={`${styles.optionBtn} ${styles.searchBtn}`}>
                    <MagnifyingGlass/>
                </div>
                <div className={`${styles.optionBtn} ${styles.cartBtn}`}>
                    <ShoppingCartSimple/>
                </div>
                {
                    product.new && product.quantity > 0 ?
                        <div
                            className={`${styles.mark} ${styles.newMark}
                             ${product.regularPrice === null ? styles.newDefault : ""}`}>
                            new
                        </div>
                        :
                        null
                }
                {
                    product.regularPrice !== null && product.quantity > 0 ?

                        <div className={`${styles.mark} ${styles.saleMark}`}>
                            {((((product.regularPrice - product.salePrice) / product.regularPrice) * 100).toFixed(2)) + "%"}
                        </div>
                        :
                        null
                }
                {
                    product.quantity < 1 ?
                        <div className={`${styles.mark} ${styles.soldOut}`}>SOLD OUT</div>
                        :
                        null
                }

                <div className={styles.colorSelection}>
                    {product.colorOptions?.map((color,i) => {
                        return (
                            <div key={i} className={styles.coloredCircle}
                                 style={{
                                     background: color.color
                                 }}>
                                <Check weight="bold"/>
                            </div>
                        )
                    })}

                </div>
                <img src={product.image}
                     alt="Product Image"/>
            </div>
            <div className={styles.cardDesc}>
                <h3><a href="#">{product.name}</a></h3>
                <div className={styles.cardDescStar} style={{
                    color: product.goldRating ? "#eebe19" : ""
                }}>
                    <Star/>
                    <Star/>
                    <Star/>
                    <Star/>
                    <Star/>
                </div>
                <span>
                   {product.regularPrice ? (
                       <p>${product.regularPrice.toFixed(2)}</p>
                   ) : null}
                     ${product.salePrice?.toFixed(2)}
                 </span>
            </div>

        </div>

    )
}