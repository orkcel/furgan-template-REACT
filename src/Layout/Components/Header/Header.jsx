import {HeaderOptions} from "../../Common/HeaderOptions/HeaderOptions";
import styles from "./Header.module.scss";
import {useEffect, useState} from "react";
import {HeaderLogo} from "../../Common/HeaderLogo/HeaderLogo.jsx";
import {HeaderButtons} from "../../Common/HeaderButtons/HeaderButtons.jsx";
import {HeaderNavigation} from "../../Common/HeaderNavigation/HeaderNavigation.jsx";

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
                    <HeaderLogo />
                    </div>
                     <div className={styles.navigationContainer}>
                         <HeaderNavigation />
                     </div>
                </div>
                <div className={styles.headerControl}>
                    <HeaderButtons />
                </div>
            </div>
        </header>
    );
};
