import {HeaderOptions} from "../../Common/HeaderOptions/HeaderOptions";
import styles from "./Header.module.scss";
import {MagnifyingGlass, User, ShoppingCartSimple} from "@phosphor-icons/react";
import {useEffect, useState} from "react";

export const Header = () => {

    const [headerPosition, setHeaderPosition] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 1500) {
                setHeaderPosition(true);
            } else {
                setHeaderPosition(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);


    return (
        <header className={`${styles.headerWrapper} ${headerPosition ? styles.headerActive : ""}`}>
            <div className={styles.headerContent}>
                <HeaderOptions headerPosition={headerPosition}/>
                <div className={styles.headerMidSide}>
                    <div className={styles.logo}>
                        <img
                            src="https://dreamingtheme.kiendaotac.com/html/furgan/assets/images/logo.png"
                            alt="#"
                        />
                    </div>
                    <nav>
                        <div className={styles.navItem}>
                            <a href="#">HOME</a>
                            <div className={`${styles.dropDown} ${styles.homeDropDown}`}>
                                <div className={styles.dropdownRow}>
                                    <div className={styles.dropdownItem}>

                                        <a href="#"><img
                                            src="https://dreamingtheme.kiendaotac.com/html/furgan/assets/images/demo001.jpg"
                                            alt="#"/></a>
                                        <h5>Home 01</h5>
                                    </div>
                                    <div className={styles.dropdownItem}>

                                        <a href="#"><img
                                            src="https://dreamingtheme.kiendaotac.com/html/furgan/assets/images/demo002.jpg"
                                            alt="#"/></a>
                                        <h5>Home 02</h5>
                                    </div>
                                    <div className={styles.dropdownItem}>

                                        <a href="#"><img
                                            src="https://dreamingtheme.kiendaotac.com/html/furgan/assets/images/demo003.jpg"
                                            alt="#"/></a>
                                        <h5>Home 03</h5>
                                    </div>
                                </div>
                                <div className={styles.dropdownRow}>
                                    <div className={styles.dropdownItem}>

                                        <a href="#"><img
                                            src="https://dreamingtheme.kiendaotac.com/html/furgan/assets/images/demo004.jpg"
                                            alt="#"/></a>
                                        <h5>Home 04</h5>
                                    </div>
                                    <div className={styles.dropdownItem}>

                                        <a href="#"><img
                                            src="https://dreamingtheme.kiendaotac.com/html/furgan/assets/images/demo005.jpg"
                                            alt="#"/></a>
                                        <h5>Home 05</h5>
                                    </div>

                                    <div className={styles.dropdownItem}>
                                        <a href="#"><img
                                            src="https://dreamingtheme.kiendaotac.com/html/furgan/assets/images/demo006.jpg"
                                            alt="#"/></a>
                                        <h5>Home 06</h5>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className={styles.navItem}>
                            <a href="/">SHOP</a>
                            <div className={styles.dropDown}>
                                <h3>SHOP LAYOUTS</h3>
                                <a href="#">Shop Grid</a>
                                <a href="#">Shop List</a>
                                <a href="#">No Sidebar</a>
                                <a href="#">Left Sidebar</a>
                                <a href="#">Right Sidebar</a>

                                <h3>PRODUCT LAYOUTS</h3>
                                <a href="#">Vertical Thumbnails</a>
                                <a href="#">Extra Sidebar</a>
                                <a href="#">No Sidebar</a>
                                <a href="#">Right Sidebar</a>
                                <a href="#">Left Sidebar</a>

                            </div>
                        </div>
                        <div className={styles.navItem}>
                            <a href="#">ELEMENTS</a>
                        </div>
                        <div className={styles.navItem}>
                            <a href="#">BLOG</a>
                        </div>
                        <div className={styles.navItem}>
                            <a href="#">PAGES</a>
                            <div className={styles.dropDown}>
                                <a href="#">About</a>
                                <a href="#">Contact</a>
                                <a href="#">Error 404</a>
                            </div>
                        </div>
                    </nav>
                </div>
                <div className={styles.headerRightSide}>
                    <div className={styles.search}>
                        <a href="#">
                            <MagnifyingGlass/>
                        </a>
                    </div>
                    <div className={styles.user}>
                        <a href="#"><User/></a>
                        <div className={styles.userDropDown}>
                            <a href="#">About</a>
                            <a href="#">Contact</a>
                            <a href="#">Error 404</a>
                            <a href="#">Contact 404</a>
                            <a href="#">Contact 404</a>
                            <a href="#">Contact 404</a>

                        </div>
                    </div>
                    <div className={styles.cart}>
                        <a href="#"><ShoppingCartSimple/></a>
                    </div>
                </div>
            </div>
        </header>
    );
};
