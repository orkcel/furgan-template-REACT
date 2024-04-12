import {Link} from "react-router-dom";
import styles from "./HeaderLogo.module.scss";

export const HeaderLogo = () => {
    return (
        <div className={styles.logo}>
            <Link to="/">
                <img
                    src="https://dreamingtheme.kiendaotac.com/html/furgan/assets/images/logo.png"
                    alt="#"
                />
            </Link>
        </div>

    )
}