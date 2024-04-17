import styles from "./HeaderOptions.module.scss";
import {CaretDown, List, MagnifyingGlass} from "@phosphor-icons/react";
import MobileMenu from "../MobileMenu/MobileMenu.jsx";
import {useState,useCallback} from "react";

export const HeaderOptions = ({headerPosition}) => {

    const [mobileMenuVisible,setMobileMenuVisible] = useState(false);

    const handleMenuOpen = useCallback(
        () => {
            setMobileMenuVisible(prevState => !prevState);
        },
        [setMobileMenuVisible],
    );


  return (
      <div className={`${styles.headerOptions} ${headerPosition ? styles.dropShadow : ""}`}>
        <div className={styles.menu} onClick={handleMenuOpen}>
          <List/>
        </div>
          <MobileMenu mobileMenuVisible={mobileMenuVisible} setMobileMenuVisible={setMobileMenuVisible}/>
          <div className={styles.menu}>
              <MagnifyingGlass/>
          </div>
          <div className={styles.drop}>
              <a href="#">
                  <img
                      src="https://dreamingtheme.kiendaotac.com/html/furgan/assets/images/en.png"
                alt="#"
            />
            English
            <CaretDown/>
          </a>
          <div className={styles.dropDown}>
            <a href="#">
              <img
                  src="https://dreamingtheme.kiendaotac.com/html/furgan/assets/images/it.png"
                  alt="#"
              />
              Italiano
            </a>
          </div>
        </div>
        <div className={styles.drop}>
          <a href="#">
            USD
            <CaretDown/>
          </a>
          <div className={styles.dropDown}>
            <a href="#">EUR</a>
          </div>
        </div>
      </div>

  )
}
