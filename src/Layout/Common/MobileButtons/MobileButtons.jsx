import styles from "./MobileButtons.module.scss"
import {Basket, Heart, HouseLine, User} from "@phosphor-icons/react";

export const MobileButtons= () => {
    return (
        <section className={styles.footerMobile}>
            <div className={styles.mobileButtons}>
                <div className={styles.button}>
                    <HouseLine weight="fill"/>
                    <p>Home</p>

                </div>
                <div className={styles.button}>
                    <Heart weight="fill"/>
                    <p>Wishlist</p>
                </div>
                <div className={styles.button}>
                    <Basket weight="fill"/>
                    <p>Cart</p>
                </div>
                <div className={styles.button}>
                    <User weight="fill"/>
                    <p>Account</p>
                </div>
            </div>
        </section>
    )
}
