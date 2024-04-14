import styles from './LeftSidebar.module.scss';

import TopSection from "../../Common/TopSection/TopSection";
import {Footer} from "../../Components/Footer/Footer.jsx";
import {TransformedHeader} from "../../Components/TransformedHeader/TransformedHeader.jsx";
import {MagnifyingGlass, Check, DotsNine, ListChecks, CaretRight} from "@phosphor-icons/react";
import BlockTitle from "../../Common/BlockTitle/BlockTitle";
import filterOptionsData from "/public/data/filterOptionsData.json";
import {useState, useCallback} from "react";
import RangeSlider from "react-range-slider-input";
import "react-range-slider-input/dist/style.css";
import cardsData from "/public/data/cardsData.json";
import {AnimatedProductCard} from "../../Common/AnimatedProductCard/AnimatedProductCard.jsx";
import {MobileButtons} from "../../Common/MobileButtons/MobileButtons.jsx";


export const LeftSidebar = () => {

    const defaultPriceRange = [0, 100];
    const [priceRange, setPriceRange] = useState(defaultPriceRange);
    const handlePriceRangeChange = useCallback(
        (newValue) => {
            setPriceRange(newValue);
        },
        [setPriceRange],
    );

    return (
        <>
            <TransformedHeader/>
            <main className={styles.leftSidebarWrapper}>
                <TopSection page="Shop"/>
                <section className={styles.shopSection}>
                    <div className={styles.shopSectionContent}>
                        <div className={styles.leftSideWrapper}>
                            <div className={styles.searchBlock}>
                                <div className={styles.searchInput}>
                                    <input type="text" placeholder="Search products..."/>
                                </div>
                                <div className={styles.fillerButton}>
                                    <MagnifyingGlass/>
                                </div>
                            </div>
                            <div className={styles.filterBlock}>
                                <BlockTitle title="filer by price"/>
                                <RangeSlider value={priceRange} onInput={handlePriceRangeChange}/>
                                <div className={styles.priceButtons}>
                                    <div className={styles.priceValue}>
                                        <div className={styles.blackButton}>
                                            <p>${priceRange[0]*10}</p>
                                        </div>
                                        <div className={styles.blackButton}>
                                            <p>${priceRange[1] * 10}</p>
                                        </div>
                                    </div>

                                    <div className={styles.greenButton}>
                                        <p>FILTER</p>
                                    </div>

                                </div>
                            </div>
                            <div className={styles.filterBlock}>
                                <BlockTitle title="filer by color"/>
                                <div className={styles.list}>
                                    {filterOptionsData[0].color.map((data) => {
                                        return (
                                            <div key={data.id} className={styles.type}>
                                        <span>
                                                <div className={styles.circle} style={{
                                                    background: data.color
                                                }}>
                                                <Check weight="bold"/>
                                        </div>
                                            {data.color}
                                        </span>
                                                <p>({data.count})</p>
                                            </div>
                                        )
                                    })}
                                </div>
                            </div>
                            <div className={styles.filterBlock}>
                                <BlockTitle title="filer by color"/>
                                <div className={styles.list}>
                                    {filterOptionsData[1].size.map((data) => {
                                        return (
                                            <div key={data.id} className={styles.type}>
                                        <span>
                                                <div
                                                    className={`${styles.circle} ${styles.greenHoverCircle}`}
                                                    style={{
                                                        background: "transparent"
                                                    }}
                                                >
                                                <Check weight="bold"/>
                                        </div>
                                            {data.size}
                                        </span>
                                                <p>({data.count})</p>
                                            </div>
                                        )
                                    })}
                                </div>
                            </div>
                            <div className={styles.filterBlock}>
                                <BlockTitle title="product categories"/>
                                <div className={styles.list}>
                                    {filterOptionsData[2].categories.map((data) => {
                                        return (
                                            <div key={data.id} className={styles.type}>
                                        <span>
                                                <div
                                                    className={`${styles.circle} ${styles.greenHoverCircle}`}
                                                    style={{
                                                        background: "transparent"
                                                    }}
                                                >
                                                <Check weight="bold"/>
                                        </div>
                                            {data.category}
                                        </span>
                                                <p>({data.count})</p>
                                            </div>
                                        )
                                    })}
                                </div>
                            </div>
                            <div className={styles.imageContainer}>
                                <img
                                    src="https://dreamingtheme.kiendaotac.com/html/furgan/assets/images/widget-banner.jpg"
                                    alt="Ads"/>
                            </div>

                        </div>
                        <div className={styles.rightSideWrapper}>
                            <div className={styles.topWrapper}>
                                <div className={styles.leftButtons}>
                                    <div className={styles.fillerButton}>
                                        <DotsNine />
                                    </div>
                                    <div className={styles.fillerButton}>
                                        <ListChecks />
                                    </div>
                                </div>
                                <div className={styles.rightContainer}>
                                    <select title="product_cat" name="orderby" className="orderby">
                                        <option value="menu_order" selected="selected">Default sorting</option>
                                        <option value="popularity">Sort by popularity</option>
                                        <option value="rating">Sort by average rating</option>
                                        <option value="date">Sort by latest</option>
                                        <option value="price">Sort by price: low to high</option>
                                        <option value="price-desc">Sort by price: high to low</option>

                                    </select>

                                    <select className="option-perpage">
                                        <option value="12" selected="">
                                            Show 12
                                        </option>
                                        <option value="5">
                                            Show 05
                                        </option>
                                        <option value="10">
                                            Show 10
                                        </option>
                                        <option value="12">
                                            Show 12
                                        </option>
                                        <option value="15">
                                            Show 15
                                        </option>
                                        <option value="20">
                                            Show All
                                        </option>
                                    </select>
                                </div>
                            </div>
                            <div className={styles.productsContainer}>
                                {cardsData.map((product) => {
                                    return (
                                        <AnimatedProductCard  key={product.id} product={product}/>
                                    )
                                })}
                            </div>
                            <div className={styles.bottomWrapper}>
                                <div className={styles.leftButtons}>
                                    <div className={styles.fillerButton}>
                                        <p>1</p>
                                    </div>
                                    <div className={styles.fillerButton}>
                                        <p>2</p>
                                    </div>
                                    <div className={styles.fillerButton}>
                                        <CaretRight />
                                    </div>
                                </div>
                                <div className={styles.rightContainer}>
                                    <p>Showing 1–15 of 20 results</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
            <Footer/>
            <MobileButtons/>

        </>
    )
}
