import styles from "./HeaderButtons.module.scss";
import {MagnifyingGlass, ShoppingCartSimple, User, XCircle} from "@phosphor-icons/react";
import cardsData from "/public/data/cardsData.json";
import {useState,useCallback} from "react";

export const HeaderButtons = () => {
    const [cartState,setCartState] = useState(false);
    const handleCartOpen = useCallback(
        () => {
            setCartState(true);
        },
        [setCartState],
    );
    const handleCartClose = useCallback(
        () => {
            setCartState(false);
        },
        [setCartState],
    );

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
                    <a href="/">Dashboard</a>
                    <a href="/left_side_bar">Orders</a>
                    <a href="/">Downloads</a>
                    <a href="/">Address</a>
                    <a href="/">Account Details</a>
                    <a href="/">Logout</a>

                </div>
            </div>
            <div className={styles.btn} onMouseEnter={handleCartOpen}>
                <a href="#"><ShoppingCartSimple/></a>
            </div>
            <div className={`${styles.basketDropdown} ${cartState ? styles.basketOpen : ""}`} onMouseLeave={handleCartClose}>
                <div className={styles.basketProducts}>
                    {cardsData.slice(0,3).map((product) => {
                        return (
                            <div key={product.id} className={styles.productCard}>
                                <div className={styles.productImg}>
                                    <img src={product.image} alt="Product"/>
                                </div>
                                <div className={styles.productTitle}>
                                    <a href="#">{product.name}</a>
                                    <span> 1 × ${product.salePrice?.toFixed(2)}</span>
                                </div>
                                <div className={styles.closeBtn}>
                                    <XCircle/>
                                </div>
                            </div>

                        )
                    })}
                </div>
                <div className={styles.basketButtons}>
                    <div className={styles.totalPrice}>
                        <p>SUBTOTAL:</p>
                        <span>$207.00</span>
                    </div>
                    <div className={styles.button}>VIEWCART</div>
                    <div className={styles.button}>CHECKOUT</div>
                </div>

            </div>
        </div>

    )
}