import React from "react";
import styles from './Card.module.scss';



const CardWeb = (props) => {

    return (

            <div className="col-md-12 col-md-4 col-lg-4">
               <div className={styles.serviceCard}>
               <div class="single_service_part">
                   <span class="single_service_icon">
                       <img src="/compu.png"/>
                   </span>
                   <h4 className={styles.servicesTitle}>Web development</h4>
                   <p className={styles.servicesInfo}>Thinking about taking your project/business to the net? Our team can develop and design cross platform websites that are visually engaging, following the latest trends on UX/UI.</p>
                </div>
               </div> 
            </div>
      
    );
};

export default CardWeb;