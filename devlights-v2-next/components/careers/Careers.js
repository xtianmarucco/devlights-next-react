import React from 'react';
import styles from "./Careers.module.scss";
import { FaMinus } from "react-icons/fa";


const Careers = (props) => {

    return (

            <div id="careers" className={styles.bg3}>
                <div className={styles.containerTech}>
                 <div className="container">

                    <div className="row about-extra">
                      

                        <div className="col-md-6 col-lg-6 col-xl-6">
                        </div>

                        <div className="col-md-5 col-lg-5 col-xl-5">
                            <div className={styles.aboutTextContainer}>
                                <h2 className={styles.techTitle}>Careers</h2>
                                 <FaMinus className={styles.icon}/>
                                <i class="fas fa-minus"></i>
                                <p className={styles.techText1}>
                                In Devlights we are always looking for fresh talent, do you have what it takes?.


                                </p>
                                <br/>
                                <p className={styles.techText2}>In this section you can apply for our latest job openings and check the requirements, for further information just click on the button below</p>
                                <a className={styles.btn_2} href="#portfolio"> Check all positions </a>
                            </div>
                         </div>
                        
                    </div>
                    </div>

                 </div>
                    
            </div>
      
    );
};

export default Careers;