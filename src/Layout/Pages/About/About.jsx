import styles from './About.module.scss';
import {Play} from "@phosphor-icons/react";
import SectionTitle from "../../Common/SectionTitle/SectionTitle.jsx";
import {Footer} from "../../Components/Footer/Footer.jsx";
import {SponsorsContainer} from "../../Common/SponsorsContainer/SponsorsContainer.jsx";
import {RandomImages} from "../../Common/RandomImages/RandomImages.jsx";
import employeesData from "/public/data/EmployeesData.json"
import TopSection from "../../Common/TopSection/TopSection";
import {TransformedHeader} from "../../Components/TransformedHeader/TransformedHeader.jsx";

export const About = () => {
    return (
        <>
            <TransformedHeader />
            <div className={styles.aboutWrapper}>
                <TopSection page="About"/>
                <section className={styles.firstSection}>
                    <div className={styles.firstSectionContent}>
                        <div className={styles.container}>
                            <div className={styles.imageWrapper}>
                                <img src="https://dreamingtheme.kiendaotac.com/html/furgan/assets/images/about-img.jpg"
                                     alt="#"/>
                                <span className={styles.playBtn}>
                                    <Play weight="fill"/>
                                    <div className={`${styles.circle1} ${styles.circle}`}></div>
                                    <div className={`${styles.circle2} ${styles.circle}`}></div>
                                    <div className={`${styles.circle3} ${styles.circle}`}></div>
                                </span>
                            </div>
                            <div className={styles.containerText}>
                                <h2><span></span>Who we are</h2>
                                <p>We believe in a world where you have total freedom to be you, without judgement. To
                                    experiment. To express yourself. To be brave and grab life as the extraordinary
                                    adventure it is. So we make sure everyone has an equal chance to discover all the
                                    amazing things they’re capable of – no matter who they are, where they’re from or
                                    what looks they like to boss.</p>
                                <p>Our audience (AKA you) is wonderfully unique. And we do everything we can to help you
                                    find your fit, offering our Ciloe Brands in more than 30 sizes – and we’re committed
                                    to providing all sizes at the same price

                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                <section className={styles.secondSection}>
                    <div className={styles.secondSectionContent}>
                        <SectionTitle heading="Meet Our Team"
                                      title="A perfect blend of creativity and technical wizardry
The best people fomula for great websites!."/>
                        <div className={styles.cardWrapper}>
                            {employeesData.map((partner) => {
                                return (
                                    <div key={partner.id} className={styles.card}>
                                        <div className={styles.cardImage}>
                                            <div className={styles.mask}>
                                            </div>
                                            <div className={styles.icons}>
                                                <div className={styles.icon}>
                                                    <img src="/public/images/facebook.png" alt="Facebook"/>
                                                </div>
                                                <div className={styles.icon}>
                                                    <img src="/public/images/twitter.png" alt="Twitter"/>
                                                </div>
                                                <div className={styles.icon}>
                                                    <img src="/public/images/instagram.png" alt="Instagram"/>
                                                </div>
                                            </div>
                                            <img
                                                src={partner.image}
                                                alt="Patner"/>
                                        </div>
                                        <div className={styles.cardDesc}>
                                            <h3><a href="#">{partner.name}</a></h3>
                                            <span></span>
                                            <p>{partner.position}</p>
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
                    </div>

                </section>

                <section className={styles.thirdSection}>
                    <SponsorsContainer/>
                    <SectionTitle heading="Follow Me On Instagram"
                                  title="@orkcel"/>
                    <RandomImages/>
                </section>
                <Footer/>
            </div>
        </>
    )
}
