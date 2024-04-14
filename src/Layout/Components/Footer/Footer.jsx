import styles from './Footer.module.scss'
import iconsData from "/public/data/socialIcons.json";
import {MobileButtons} from "../../Common/MobileButtons/MobileButtons.jsx";



export const Footer = () => {
  return (
      <footer className={styles.footerWrapper}>
          <div className={styles.footerWrapperContent}>
              <div className={styles.footerTop}>
                  <div className={styles.footerTopText}>
                      <h5>Newsletter</h5>
                      <h3>Get Discount 30% Off</h3>
                      <p>Suspendisse netus proin eleifend fusce sollicitudin potenti vel magnis nascetur</p>
                  </div>
                  <div className={styles.footerInput}>
                      <input type="email" placeholder="Enter your email..."/>
                      <div className={styles.fillerButton}>
                          <p>SUBSCRIBE</p>
                      </div>
                  </div>
              </div>
          </div>
          <div className={styles.footerBottom}>
              <div className={styles.bottomContent}>
                  <p>© Copyright 2024 <a href="#">Furgan.</a> All Rights NOT Reserved.</p>
                  <div className={styles.socialSquares}>
                      {iconsData.map((icon) => {
                          return (
                              <div key={icon.id} className={styles.square}>
                                  <img src={icon.src} alt="Social Icon"/>
                              </div>
                          )
                      })}
                  </div>
              </div>
          </div>
      </footer>


  )
}
