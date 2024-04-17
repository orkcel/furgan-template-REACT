import { Link } from 'react-router-dom';
import styles from './MobileMenu.module.scss';
import {useCallback} from "react";
import {CaretRight, X} from "@phosphor-icons/react";

const MobileMenu = ({mobileMenuVisible,setMobileMenuVisible}) => {

const handleMenuClose = useCallback(
    () => {
        setMobileMenuVisible(prevState => !prevState)
    },
    [setMobileMenuVisible],
);

    return (
        <div className={`${styles.mobMenu} ${mobileMenuVisible ? styles.menuActive : ""}`}>
            <div className={styles.top}>
                <div className={styles.closeMenu} onClick={handleMenuClose}>
                    <X  />
                </div>
            </div>
            <Link to="/">Home
                <CaretRight  />
            </Link>
            <Link to="/left_side_bar">Shop
                <CaretRight  />
            </Link>
            <Link to="*">Elements
                <CaretRight  />

            </Link>
            <Link to="/about">About
                <CaretRight  />

            </Link>
            <Link to="*">Pages
                <CaretRight  />
            </Link>



        </div>
    );
};

export default MobileMenu;