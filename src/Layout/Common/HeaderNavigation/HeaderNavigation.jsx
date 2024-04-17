import styles from "./HeaderNavigation.module.scss";
import {Link} from "react-router-dom";

export const HeaderNavigation = ({dropDownPosition}) => {
    return (
        <nav className={dropDownPosition ? styles.newDropDownPosition : ""}>
            <div className={styles.navItem}>
                <Link to="/">HOME</Link>
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
                <Link to="/left_side_bar">SHOP</Link>
                <div className={`${styles.dropDown} ${styles.shopDropDown}`}>
                    <div className={styles.shopDropdownColumn}>
                        <h3><span></span>SHOP LAYOUTS</h3>
                        <a href="*">Shop Grid</a>
                        <a href="*" className={`${styles.mark} ${styles.new}`}>Shop List</a>
                        <a href="*">No Sidebar</a>
                        <Link to="/left_side_bar">Left Sidebar</Link>
                        <a href="*">Right Sidebar</a>
                        <h3 className={styles.bottomHeading}><span></span>PRODUCT LAYOUTS</h3>
                        <a href="*">Vertical Thumbnails</a>
                        <a href="*" className={`${styles.mark} ${styles.new}`}>Extra Sidebar</a>
                        <a href="*">Right Sidebar</a>
                        <a href="/left_side_bar">Left Sidebar</a>
                    </div>

                    <div className={styles.shopDropdownColumn}>
                        <h3><span></span>PRODUCT EXTENDS</h3>
                        <a href="*" className={`${styles.mark} ${styles.new}`}>Product Bundle</a>
                        <a href="*" className={`${styles.mark} ${styles.hot}`}>Product 360 Deg</a>
                        <a href="*">Video</a>
                        <div className={styles.dropdownItem}></div>
                        <h3 className={styles.bottomHeading}><span></span>OTHER PAGES</h3>
                        <a href="*">Cart</a>
                        <a href="*">Wishlist</a>
                        <a href="*">Checkout</a>
                        <a href="*">Order Tracking</a>
                        <a href="*">My Account</a>
                    </div>

                    <div className={styles.shopDropdownColumn}>
                        <h3><span></span>PRODUCT TYPES</h3>
                        <a href="*">Single</a>
                        <a href="*" className={`${styles.mark} ${styles.hot}`}>Variable</a>
                        <a href="*">External / Affiliate</a>
                        <a href="*">Grouped</a>
                        <a href="*">Out Of Stack</a>
                        <a href="*">Om Sale</a>
                    </div>
                </div>
            </div>
            <div className={styles.navItem}>
                <a href="*">ELEMENTS</a>
                <div className={`${styles.dropDown} ${styles.elementsDropDown}`}>
                    <div className={styles.elementsDropdownColumn}>
                        <h3><span></span>ELEMENT 1</h3>
                        <a href="*">Banner</a>
                        <a href="*">Blog Element</a>
                        <a href="*">Categories Element</a>
                        <a href="*">Product Element</a>
                    </div>

                    <div className={styles.elementsDropdownColumn}>
                        <h3><span></span>ELEMENT 2</h3>
                        <a href="*">Client</a>
                        <a href="*">Product Layout</a>
                        <a href="*">Google Maps</a>
                        <a href="*">Icon Box</a>
                        <a href="*">Team</a>
                    </div>

                    <div className={styles.elementsDropdownColumn}>
                        <h3><span></span>ELEMENT 3</h3>
                        <a href="*">Instagram Feed</a>
                        <a href="*">Newsletter</a>
                        <a href="*">Testimonials</a>
                    </div>
                </div>

            </div>
            <div className={styles.navItem}>
                <a href="*">BLOG</a>
                <div className={`${styles.dropDown} ${styles.blogDropDown}`}>
                    <div className={styles.blogDropdownColumn}>
                        <h3><span></span>BLOG LAYOUT</h3>
                        <a href="*">No Sidebar</a>
                        <Link to="left_side_bar">Left Sidebar</Link>
                        <a href="*">Right Sidebar</a>
                        <a href="*">Blog Standart</a>
                        <a href="*">Blog Grid</a>
                    </div>

                    <div className={styles.blogDropdownColumn}>
                        <h3><span></span>POST LAYOUT</h3>
                        <a href="*">No Sidebar</a>
                        <a href="/left_side_bar">Left Sidebar</a>
                        <a href="*">Right Sidebar</a>
                        <a href="*">Instagram In Post</a>
                        <a href="*">Product In Post</a>
                        <h3 className={styles.bottomHeading}><span></span>POST FORMAT</h3>
                        <a href="*">Standard</a>
                        <a href="*">Gallery</a>
                        <a href="*">Video</a>
                    </div>
                        <div className={styles.imageWrapper}>
                            <img src="/images/blogLamps.png" alt="#"/>
                        </div>
                </div>
            </div>
            <div className={styles.navItem}>
                <a href="/about">PAGES</a>
                <div className={styles.dropDown}>
                    <Link to="/about">About</Link>
                    <a href="*">Contact</a>
                    <a href="*">Error 404</a>
                </div>
            </div>
        </nav>
    )
}