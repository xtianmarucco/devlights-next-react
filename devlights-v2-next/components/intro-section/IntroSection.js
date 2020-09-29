import React from "react";
import styles from './IntroSection.module.scss';


const IntroSection = (props) => {

    return (

        <div className={styles.intro}>
            <div className="container" className={styles.introContainer}>
                <div className="intro-info col-lg-6 col-md-6 col-xs-12 col-sm-12">
                <h1 className={styles.introTitle}>We are a company dedicated to provide technological solutions.</h1 >
                </div>
                <div className="intro-info col-lg-6 col-md-6 col-xs-12 col-sm-12">
                <img class="img-fluid" src="https://devlights.com/img/intro-img.png" alt=""/>
                </div>

                {/* <div>
                <a className="btn-get-started scrollto intro_buttons" href="#contact">Let's work together</a>
                <a className="popup-youtube video_popup intro_buttons" href="https://www.youtube.com/watch?v=2mC4zqdTWs4" id="fl-homepage-video"> 
                <span><img className="img-fluid" src="img/icon/play.svg" alt=""></span>Intro Video</a></div>
                </div> */}
            </div>
        </div>
    );
};

export default IntroSection;