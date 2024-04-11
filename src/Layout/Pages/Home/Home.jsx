import { Header } from "../../Components/Header/Header";
import styles from "./Home.module.scss";
import {
  RocketLaunch,
  LockKey,
  ArrowsClockwise,
  Star,
  Chat,
  ArrowsLeftRight,
  ShoppingCartSimple,
  Heart, MagnifyingGlass
} from "@phosphor-icons/react";
import containersData from "/public/data/containers.json";
import { useCallback } from "react";
import cardsData from "../../../../public/data/cardsData.json";
import {Footer} from "../../Components/Footer/Footer.jsx";
import SectionTitle from "../../Common/SectionTitle/SectionTitle.jsx";
import sponsorsData from "/public/data/sponsorsData.json";
import randomImagesData from "/public/data/randomImagesData.json";


export const Home = () => {
  
  const getIconComponent = useCallback((iconName) => {
    switch (iconName) {
      case "RocketLaunch":
        return <RocketLaunch />;
      case "LockKey":
        return <LockKey />;
      case "ArrowsClockwise":
        return <ArrowsClockwise />;
      default:
        return null;
    }
  }, []);

  return (
    <>
      <Header />
      <main className={styles.homeWrapper}>
        <section className={styles.homeSection}>
          <div className={styles.homeSectionContent}>
            <div className={styles.sectionBackground}>
              <img
                src="https://dreamingtheme.kiendaotac.com/html/furgan/assets/images/slide11new.jpg"
                alt="Background"
              />
            </div>
            <div className={styles.homeSectionText}>
              <h5>BEST SELLING</h5>
              <h1>
                <span>Trend</span> White <br />
                Light
              </h1>
              <div className={styles.defaultButton}>
                <p>SHOP NOW</p>
              </div>
            </div>
            <div className={styles.controlBtnWrapper}>
              <div className={styles.controlBtnActive}></div>
              <div className={styles.controlBtn}></div>
              <div className={styles.controlBtn}></div>

            </div>
          </div>
        </section>

        <section className={styles.firstSection}>
          <div className={styles.sectionContent}>
            <div className={styles.containersWrapper}>
              {containersData.map((data) => {
                return (
                    <div key={data.id} className={styles.container}>
                      <div className={styles.containerInner}>
                        <div className={styles.containerImage}>
                          {getIconComponent(data.icon)}
                          {getIconComponent(data.icon)}
                        </div>
                        <div className={styles.containerTitle}>
                          <h2>{data.title}</h2>
                          <p>
                            {data.description}
                          </p>
                        </div>
                      </div>
                    </div>
                );
              })}
            </div>
            <div className={styles.productWrapper}>
              <div className={styles.productContent}>
                <div className={styles.contentContainer}>
                  <div className={`${styles.imageBlock}`}>
                    <div className={`${styles.decor} ${styles.leftDecor}`}>
                      Cuckoo Clock
                    </div>
                    <img
                        src="https://dreamingtheme.kiendaotac.com/html/furgan/assets/images/banner11.jpg"
                            alt="#"
                        />
                  </div>
                </div>
                <div className={styles.contentContainer}>
                  <div className={`${styles.imageBlock}`}>
                    <div className={`${styles.decor} ${styles.rightDecor}`}>
                      Elephant Chair
                    </div>
                    <img
                        src="https://dreamingtheme.kiendaotac.com/html/furgan/assets/images/banner12.jpg"
                        alt="#"
                    />
                  </div>
                  <div className={styles.imageBlock}>
                    <div className={`${styles.decor} ${styles.bottomDecor}`}>
                      Wood Chair
                    </div>
                    <img
                        src="https://dreamingtheme.kiendaotac.com/html/furgan/assets/images/banner13.jpg"
                        alt="#"
                    />
                  </div>

                </div>
              </div>
            </div>
          </div>
        </section>

        <section className={styles.secondSection}>
          <div className={styles.secondSectionContent}>
            <SectionTitle heading="Feature Title"
                          title="Made with care for your little ones, our products are perfect for every occasion. Check it out."/>
            <div className={styles.cardWrapper}>
              {cardsData.slice(0, 8).map((card) => {
                return (
                    <div key={card.id} className={styles.card}>
                      {
                        card.new ?
                            <div
                                className={`${styles.mark} ${styles.newMark} ${card.regularPrice === null ? styles.newDefault : ""}`}>
                              new
                            </div>
                            :
                            null
                      }
                      {
                        card.regularPrice !== null ?

                            <div className={`${styles.mark} ${styles.saleMark}`}>
                              {(((card.regularPrice - card.salePrice) / card.regularPrice) * 100).toFixed(2) + "%"}
                            </div>
                            :
                            null
                      }
                      <div className={styles.quickView}>
                        quick view
                      </div>
                      <div className={styles.cardOptions}>
                        <div className={styles.option}>
                          <Heart/>
                        </div>
                        <div className={styles.option}>
                          <ShoppingCartSimple/>

                        </div>
                        <div className={styles.option}>
                          <ArrowsLeftRight/>
                        </div>

                      </div>

                      <div className={styles.cardImage}>
                        <img
                            src={card.image}
                            alt="Product Image"
                        />
                      </div>
                      <div className={styles.cardDesc}>
                        <div className={`${styles.cardDescStar} ${card.goldRating ? styles.hasGoldRating : ""}`}>
                          <Star/>
                          <Star/>
                          <Star/>
                          <Star/>
                          <Star/>
                        </div>
                        <div className={styles.cardDescText}>
                          <h3><a href="#">{card.name}</a></h3>
                          <span><p>{card.regularPrice ? "$" + card.regularPrice.toFixed(2) : null} </p>${card.salePrice?.toFixed(2)}</span>
                        </div>
                      </div>
                    </div>

                )
              })}
            </div>
            <div className={styles.controlBtnWrapper}>
              <div className={styles.controlBtnActive}></div>
              <div className={styles.controlBtn}></div>
              <div className={styles.controlBtn}></div>

            </div>
            <div className={styles.bannerContainer}>
              <div className={styles.bannerContent}>
                <div className={styles.bannerText}>
                  <div className={styles.greenText}>
                    <p>MODERN CHAIR</p>
                    <h3><span></span>Best Seller</h3>

                  </div>
                  <div className={styles.regularText}>
                    <p>Lorem ipsum dolor sit amet consectetur adipiscing elit justo</p>
                    <div className={styles.defaultButton}>
                      <p>SHOP NOW</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className={styles.thirdSection}>
          <div className={styles.thirdSectionContent}>
            <SectionTitle heading="New Arrival" title="Made with care for your little ones, our products are perfect
                for every occasion. Check it out."/>
            <div className={styles.cardWrapper}>
              {cardsData.slice(8, 12).map((product) => {
                return (
                    <div key={product.id} className={styles.card}>
                      <div className={styles.cardImage}>
                        <div className={`${styles.optionBtn} ${styles.wishListBtn}`}>
                          <Heart/>
                        </div>
                        <div className={`${styles.optionBtn} ${styles.arrowsBtn}`}>
                          <ArrowsLeftRight/>
                        </div>
                        <div className={`${styles.optionBtn} ${styles.searchBtn}`}>
                          <MagnifyingGlass/>
                        </div>
                        <div className={`${styles.optionBtn} ${styles.cartBtn}`}>
                          <ShoppingCartSimple/>
                        </div>

                        {
                          product.new ?
                              <div
                                  className={`${styles.mark} ${styles.newMark} ${product.regularPrice === null ? styles.newDefault : ""}`}>
                                new
                              </div>
                              :
                              null
                        }

                        <img src={product.image}
                             alt="Product Image"/>
                      </div>
                      <div className={styles.cardDesc}>
                        <h3><a href="#">{product.name}</a></h3>
                        <div className={styles.cardDescStar}>
                          <Star/>
                          <Star/>
                          <Star/>
                          <Star/>
                          <Star/>
                        </div>
                        <span>${product.salePrice?.toFixed(2)}</span>
                      </div>

                    </div>
                )
              })}
            </div>
            <div className={styles.controlBtnWrapper}>
              <div className={styles.controlBtnActive}></div>
              <div className={styles.controlBtn}></div>
              <div className={styles.controlBtn}></div>

            </div>

            <div className={styles.bannerContainer}>

              <div className={styles.bannerText}>
                <div className={styles.greenText}>
                  <p>30 NOV - 03 DEC</p>
                  <h3>NEW CHAIRS</h3>
                  <span></span>
                </div>
                <div className={styles.regularText}>
                  <h4>50% Off / Selected items</h4>
                  <p>Mus venenatis habitasse leo malesuada lacus commodo faucibus torquent donec</p>
                  <div className={styles.defaultButton}>
                    <p>SHOP NOW</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className={styles.fourthSection}>
          <div className={styles.fourthSectionContent}>
            <SectionTitle heading="From Our Blog"
                          title="Lorem ipsum dolor sit amet consectetur adipiscing elit erat vehicula ad, mollis viverra vulputate."/>
            <div className={styles.cardWrapper}>

              <div className={styles.card}>
                <div className={styles.cardImage}>
                  <div className={styles.roundBox}>
                    <p>19</p>
                    <span></span>
                    <h5>Dec</h5>
                  </div>
                  <img src="https://dreamingtheme.kiendaotac.com/html/furgan/assets/images/blogpost1-370x330.jpg"
                       alt="#"/>
                </div>
                <div className={styles.cardDesc}>
                  <div className={styles.cardDescUpper}>
                    <p>By: <a href="#">KhanQSM</a></p>
                    <a href="#"><p><Chat/> 0</p></a>
                  </div>
                  <div className={styles.cardDescText}>
                    <h3><a href="#">Not your ordinary furniture service.</a></h3>
                    <span></span>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Malesuada sodales
                      quisque litora dapibus primis lacinia
                    </p>
                  </div>
                </div>


              </div>

              <div className={styles.card}>
                <div className={styles.cardImage}>
                  <div className={styles.roundBox}>
                    <p>19</p>
                    <span></span>
                    <h5>Dec</h5>
                  </div>
                  <img src="https://dreamingtheme.kiendaotac.com/html/furgan/assets/images/blogpost5-370x330.jpg"
                       alt="#"/>
                </div>
                <div className={styles.cardDesc}>
                  <div className={styles.cardDescUpper}>
                    <p>By: <a href="#">KhanQSM</a></p>
                    <a href="#"><p><Chat/> 0</p></a>
                  </div>
                  <div className={styles.cardDescText}>
                    <h3><a href="#">We bring you the best by working</a></h3>
                    <span></span>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Malesuada sodales
                      quisque litora dapibus primis lacinia
                    </p>
                  </div>
                </div>


              </div>

              <div className={styles.card}>
                <div className={styles.cardImage}>
                  <div className={styles.roundBox}>
                    <p>19</p>
                    <span></span>
                    <h5>Dec</h5>
                  </div>
                  <img src="https://dreamingtheme.kiendaotac.com/html/furgan/assets/images/blogpost9-370x330.jpg"
                       alt="#"/>
                </div>
                <div className={styles.cardDesc}>
                  <div className={styles.cardDescUpper}>
                    <p>By: <a href="#">KhanQSM</a></p>
                    <a href="#"><p><Chat/> 0</p></a>
                  </div>
                  <div className={styles.cardDescText}>
                    <h3><a href="#">We design functional best furniture</a></h3>
                    <span></span>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Malesuada sodales
                      quisque litora dapibus primis lacinia
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.controlBtnWrapper}>
              <div className={styles.controlBtnActive}></div>
              <div className={styles.controlBtn}></div>
              <div className={styles.controlBtn}></div>

            </div>

          </div>
        </section>

        <section className={styles.fifthSection}>
          <div className={styles.sponsorsContainer}>
            {sponsorsData.map((sponsor) => {
              return (
                  <div key={sponsor.id} className={styles.sponsor}>
                    <img src={sponsor.imageUrl}
                         alt="Sponsor"/>
                  </div>
              )
            })}
          </div>
          <div className={styles.randomImgContainer}>
            {randomImagesData.map((image)=>{
              return (
                  <div key={image.id} className={styles.randomImg}>
                    <div className={styles.imageMask}>
                      <p>0 <Chat /> <span></span> 0</p>
                    </div>
                    <img src={image.imageUrl}
                         alt="Random Image"/>
                  </div>
              )
            })}
          </div>
        </section>
      </main>
      <Footer/>
    </>
  );
};
