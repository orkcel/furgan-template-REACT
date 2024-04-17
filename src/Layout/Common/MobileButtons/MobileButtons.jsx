import styles from "./MobileButtons.module.scss"
import {Basket, Heart, HouseLine, User} from "@phosphor-icons/react";

export const MobileButtons= () => {
    return (
        <section className={styles.footerMobile}>
            <div className={styles.mobileButtons}>
                <div className={styles.button}>
                    <a href="/"> <HouseLine weight="fill"/>
                    <p>Home</p></a>

                </div>
                <div className={styles.button}>
                    <a href="*"><Heart weight="fill"/>
                        <p>Wishlist</p></a>
                </div>
                <div className={styles.button}>
                    <a href="/left_side_bar"><Basket weight="fill"/>
                        <p>Cart</p></a>
                </div>
                <div className={styles.button}>
                    <a href="*"><User weight="fill"/>
                        <p>Account</p></a>
                </div>
            </div>
        </section>
    )
}
