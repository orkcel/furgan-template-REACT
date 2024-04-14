import styles from "./TransformedHeader.module.scss";
import {HeaderLogo} from "../../Common/HeaderLogo/HeaderLogo.jsx";
import {HeaderNavigation} from "../../Common/HeaderNavigation/HeaderNavigation.jsx";
import {HeaderOptions} from "../../Common/HeaderOptions/HeaderOptions.jsx";
import {HeaderButtons} from "../../Common/HeaderButtons/HeaderButtons.jsx";
import {useEffect, useState} from "react";

export const TransformedHeader = () => {
    const [dropDownPosition, setDropDownPosition] = useState(false);

    useEffect(() => {
        setDropDownPosition(true);
    },[])

    return (
        <header className={styles.headerWrapper}>
            <div className={styles.navigationBlock}>
                <HeaderLogo/>
                <div className={styles.navigation}>
                <HeaderNavigation dropDownPosition={dropDownPosition}/>
                </div>
            </div>
            <div className={styles.actionsBlock}>
                <HeaderOptions />
                <HeaderButtons />
            </div>

        </header>
    )
}