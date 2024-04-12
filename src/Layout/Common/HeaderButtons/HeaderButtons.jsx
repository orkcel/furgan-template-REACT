import styles from "./HeaderButtons.module.scss";
import {MagnifyingGlass, ShoppingCartSimple, User} from "@phosphor-icons/react";

export const HeaderButtons = () => {
    return (
        <div className={styles.headerButtons}>
            <div className={styles.btn}>
                <a href="#">
                    <MagnifyingGlass/>
                </a>
            </div>
            <div className={styles.btn}>
                <a href="#"><User/></a>
                <div className={styles.userDropDown}>
                    <a href="#">Dashboard</a>
                    <a href="#">Orders</a>
                    <a href="#">Downloads</a>
                    <a href="#">Address</a>
                    <a href="#">Account Details</a>
                    <a href="#">Logout</a>

                </div>
            </div>
            <div className={styles.btn}>
                <a href="#"><ShoppingCartSimple/></a>
            </div>
        </div>

    )
}