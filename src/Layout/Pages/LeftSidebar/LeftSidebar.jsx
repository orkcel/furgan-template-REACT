import styles from './LeftSidebar.module.scss';

import TopSection from "../../Common/TopSection/TopSection";
import {Footer} from "../../Components/Footer/Footer.jsx";
import {TransformedHeader} from "../../Components/TransformedHeader/TransformedHeader.jsx";

export const LeftSidebar = () => {
    return (
        <>
            <TransformedHeader/>
            <main className={styles.leftSidebarWrapper}>
                <TopSection page="Shop"/>
            </main>
            <Footer/>

        </>
    )
}
