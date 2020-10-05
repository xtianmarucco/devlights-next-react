import React from "react";
import styles from './IntroSection.module.scss';


const IntroSection = (props) => {

    return (

        <div className={styles.intro}>
            <div className="container" className={styles.introContainer}>
                <div className="intro-info col-lg-6 col-md-6 col-xs-12 col-sm-12">
                <h1 className={styles.introTitle}>We are a company dedicated to provide technological solutions.</h1 >
                <a className={styles.btnWork} href="#contact">Let's work together</a>

            </div>
                

              
                {/* <a className={styles.popupYoutube} href="https://www.youtube.com/watch?v=2mC4zqdTWs4" id="fl-homepage-video">  */}
                <div className="intro-info col-lg-6 col-md-6 col-xs-12 col-sm-12">
                <img class="img-fluid" src="/intro-img.png" alt=""/>
                </div>
                </div>
        </div>

    );
};

export default IntroSection;