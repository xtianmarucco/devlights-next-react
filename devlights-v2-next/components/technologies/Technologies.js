import React from 'react';
import styles from './technologies.module.scss'
import { FaMinus } from "react-icons/fa";


const Technologies = (props) => {

    return (

            <div id="about" className={styles.bg3}>
                <div className={styles.containerTech}>
                 <div className="container">

                    <div className="row about-extra">
                        <div className="col-md-5 col-lg-5 col-xl-5">
                            <div className={styles.aboutTextContainer}>
                                <h2 className={styles.techTitle}>Technologies </h2>
                                 <FaMinus className={styles.icon}/>
                                <i class="fas fa-minus"></i>
                                <p className={styles.techText1}>
                                    In Devlights, we combine the latest technologies and best practices delivering outstanding products.
                                </p>
                                <br/>
                                <p className={styles.techText2}>Our team is capable to build and design the perfect solution for each client using the latest technology stacks and following the highest standards on the software industry.</p>
                                <a className={styles.btn_2} href="#portfolio"> Our projects </a>
                            </div>
                         </div>

                         <div className="col-md-6 col-lg-6 col-xl-6">
                        <img src="/tech-img.png" className="img-fluid" alt=""/>
                         </div>
                        
                    </div>
                    </div>

                 </div>
                    
            </div>
      
    );
};

export default Technologies;