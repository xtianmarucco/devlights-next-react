import React from 'react';
import styles from './About2.module.scss'


const AboutSection2 = (props) => {

    return (

        <section id="about" className={styles.bg2}>
            <div className="container">
                <div className="row about-container">
                    <div className={styles.aboutTextContainer2} className="order-2 col-md-6 col-lg-6 offset-xl-1 col-xl-6">
                        <div className="icon-box wow fadeInUp" >
                            <div className="icon"><img className="fifty" src="img/clock.png" alt=""/></div>
                            <h2 className={styles.aboutTitle2} >Time zone</h2>
                            <p className={styles.aboutText2}>We’re one hour away from East time.</p>
                        </div>
                        <div className="icon-box wow fadeInUp" >
                            <div className="icon"><img className="fifty" src="img/pig.png" alt=""/></div>
                            <h2 className={styles.aboutTitle2} >Convenient cost</h2>
                            <p className={styles.aboutText2}>Outstanding rates compare to our competitors.</p>
                        </div>
                        <div className="icon-box wow fadeInUp" >
                            <div className="icon"><img className="fifty" src="img/comp.png" alt=""/>
                            </div>
                            <h2 className={styles.aboutTitle2}>Tech talent</h2>
                            <p className={styles.aboutText2}>We provide highly skilled programmers in different <technology>platforms.</technology></p>
                            </div>
                            <div className="icon-box wow fadeInUp">
                                <div className="icon"><img className="fifty" src="img/talk.png" alt=""/>
                            </div>
                                <h2 className={styles.aboutTitle2}>English proficiency</h2>
                                <p className={styles.aboutText2}>Argentina is considered the country with the highest English level in Latam.</p>
                                </div>
                                </div>
                            <div className="col-md-5 background order-lg-2 order-1 wow fadeInUp">
                                <img src="https://devlights.com/img/about-img.png" className="img-fluid" alt=""/>
                                </div>
                                </div>
                                <div className="hero-app-7 custom-animation"><img src="img/animate_icon/icon_1.png" alt=""/>
                                </div>
                                </div>
        </section>
      
    );
};

export default AboutSection2;