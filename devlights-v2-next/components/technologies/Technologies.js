import React from 'react';
import styles from './technologies.module.scss'


const Technologies = (props) => {

    return (

            <div id="about" className={styles.bg3}>
                <div className="container">
                    <div className="row about-extra">
                        <div className="col-md-5 col-lg-5 col-xl-5">
                            <div className="about_text"  className={styles.aboutTextContainer}>
                                <h2 className={styles.aboutTitle}>Where? </h2>
                                <p className={styles.aboutText}>Our headquarters are located in Corrientes, a beautiful city in northeast Argentina.</p>
                                <h2 className={styles.aboutTitle}>Who?</h2>
                                <p className={styles.aboutText}>We are a company that provides technological solutions to our customers to enhance their potencial and achieve their goals. </p>
                                <h2 className={styles.aboutTitle}>How?</h2>
                                <p className={styles.aboutText}>Offering top quality technological solutions for our clients using proven methodologies and best practices. Our staff is formed by some of the most talented developers and designers. </p>
                            </div>
                         </div>

                         <div className="col-md-6 col-lg-6 col-xl-6">
                        <img src="/tech-img.png" className="img-fluid" alt=""/>
                    </div>
                        
                    </div>
                 </div>
                    
            </div>
      
    );
};

export default Technologies;