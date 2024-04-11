import styles from "./HeaderOptions.module.scss";
import { CaretDown } from "@phosphor-icons/react";

export const HeaderOptions = ({headerPosition}) => {
  return (
    <div className={`${styles.headerOptions} ${headerPosition ? styles.dropShadow : ""}`}>
    <div className={styles.drop}>
      <a href="#">
        <img
          src="https://dreamingtheme.kiendaotac.com/html/furgan/assets/images/en.png"
          alt="#"
        />
        English
        <CaretDown />
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
        <CaretDown />
      </a>
      <div className={styles.dropDown}>
        <a href="#">EUR</a>
      </div>
    </div>
  </div>

  )
}
