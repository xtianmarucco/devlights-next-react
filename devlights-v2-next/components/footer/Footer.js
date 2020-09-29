import React, {useEffect} from "react";

import styles from './Footer.module.scss';
// import FooterForm from "../FooterForm/FooterForm";
// import clutchImg from "./clutch-1.svg";
// import clutch from "./clutch.png";

// import Aos from 'aos';
// import 'aos/dist/aos.css'

import {
  FaMapMarkerAlt,
  FaEnvelope,
  FaPhoneAlt,
  FaFacebook,
  FaLinkedin,
  FaTwitter,
} from "react-icons/fa";

const FooterComponent = (props) => {
//   useEffect(() => {
//     Aos.init({duration:"1000"});
//   }, []);

return (
  <section className={styles.footer} id={styles.footer} >
    
    <div className={styles.footer } className="text-center" data-aos="fade-in">
      <h2>Contact us</h2>
    </div>
    <div className="container" data-aos="fade-in">
      <br />
      <br />
      <div className="row">
        <div className="col-xs-8  col-sm-6 col-md-4 col-lg-4 col-xl-4">
          <div className={styles.datos}>
             <img
              className={styles.footerLogoDevlights}
              src="https://devlights.com/img/portfolio-section/logo-white.png"
              alt="Devlights"
            /> 
            <ul className={styles.FooterListUl} >
              <li>
                <FaMapMarkerAlt className={styles.iconsFooter} />
                <p className={styles.footerFirstColP}>
                  Boulder, Colorado United States 1355 Bear Mountain Drive.
                </p>
                <FaEnvelope className={styles.iconsFooter}  />{" "}
                <p className="footer-first-col-p">
                  robert.hughes@devlights.com
                </p>
                <FaPhoneAlt className={styles.iconsFooter}  />
                <p className="footer-first-col-p"> +1 (303) 325-30853</p>
                <FaEnvelope className={styles.iconsFooter} />
                <p className="footer-first-col-p"> contact@devlights.com</p>
              </li>
            </ul>

            <ul className={styles.FooterListUl}>
              <li>
                <FaMapMarkerAlt className={styles.iconsFooter}/>
                <p className="footer-first-col-p">
                  {" "}
                  Corrientes, Argentina. 1250 Junin 2do Piso, Oficina 1.
                </p>

                <FaPhoneAlt className={styles.iconsFooter} />
                <p className="footer-first-col-p"> +54 (0379) 4230003</p>
                <FaEnvelope className={styles.iconsFooter}/>
                <p className="footer-first-col-p"> contacto@devlights.com</p>
              </li>
            </ul>
            {/* <div style={{paddingLeft:"5px"}}>
               <a href="https://clutch.co/profile/devlights?utm_source=widget&amp;utm_medium=widget_2&amp;utm_campaign=widget&amp;utm_content=logo">
              <img src={clutchImg} className="clutch-link"   />

              </a>
              </div> */}
          </div>
        </div>
        <div className="col-xs-12 col-sm-6 col-md-3 col-lg-3 col-xl-3 wow fadeInUp footer_link_last">
          <div className="FooterMenuLinksTitle">
            <h4>LINKS</h4>
            <div className="footer-menu-links-items">
              <ul className={styles.FooterListUlLinks}>
                <li className="links-menu-li-menu">
                  <a href="https://devlights.com/#about">About us</a>
                </li>
                <li className="links-menu-li-menu">
                  <a href="https://devlights.com/nearshore-software-development/">
                    Nearshore software development
                  </a>
                </li>
                <li className="links-menu-li-menu">
                  <a href="https://devlights.com/referral/">
                    Referral Program
                  </a>
                </li>
                <li className="links-menu-li-menu">
                  <a href="https://devlights.com/#careers">Join the team</a>
                </li>
                <li className="links-menu-li-menu">
                  <a href="https://devlights.com/#services">Services</a>
                </li>
                <li className="links-menu-li-menu">
                  <a href="https://devlights.com/#clients">Clients</a>
                </li>
                <li className="links-menu-li-menu">
                  <a href="https://devlights.com/#intro">Home</a>
                </li>
                <li className="links-menu-li-menu">
                  <a href="https://devlights.com/#portfolio">Portfolio</a>
                </li>
                <br />
                <div className="social_icons">
                  <a href="https://www.facebook.com/devlightsok/">
                    <FaFacebook  className={styles.iconsFooterLinks} />
                  </a>
                  <a href="https://twitter.com/devlightsok">
                    <FaLinkedin  className={styles.iconsFooterLinks} />
                  </a>
                  <a href="https://www.linkedin.com/company/devlights/">
                    <FaTwitter className={styles.iconsFooterLinks} />
                  </a>

                  {/* <div className="mt-5 ">
                  <img src={clutch}  />
                  </div> */}
                </div>
              </ul>
            </div>
          </div>
        </div>
        <div className="col-xl-5 col-lg-5 col-md-5 col-sm-12 col-xs-12 form_email">
          <h4 style={{ color:"#fff"}}>Connect with us</h4>

          {/* <FooterForm /> */}
        </div>
      </div>
    </div>
 
  </section>
   



);


};

export default FooterComponent;
