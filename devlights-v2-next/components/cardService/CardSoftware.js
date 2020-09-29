import React from "react";
import styles from './Card.module.scss';



const CardSoftware = (props) => {

    return (

            <div className="col-md-12 col-md-4 col-lg-4">
               <div className={styles.serviceCard}>
               <div class="single_service_part">
                   <span class="single_service_icon">
                       <img src="/code.png"/>
                   </span>
                   <h4 className={styles.servicesTitle}>Software development</h4>
                   <p className={styles.servicesInfo}>We develop software aimed to different business segments and sectors based on technological platforms. Furthermore, we offer a wide range of software tools to provide speed in the obtaining of added value.</p>
                </div>
               </div> 
            </div>
      
    );
};

export default CardSoftware;