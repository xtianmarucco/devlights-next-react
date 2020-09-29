import React from "react";
import styles from './Card.module.scss';



const CardTesting = (props) => {

    return (

            <div className="col-md-12 col-md-4 col-lg-4">
               <div className={styles.serviceCard}>
               <div class="single_service_part">
                   <span class="single_service_icon">
                       <img src="/testing.png"/>
                   </span>
                   <h4 className={styles.servicesTitle}>Testing</h4>
                   <p className={styles.servicesInfo}>We all make mistakes. Some of those mistakes are unimportant , but some are dangerous or expensive. Our software products are built under the most rigorous conditions and tested under the most meticoulous control.</p>
                </div>
               </div> 
            </div>
      
    );
};

export default CardTesting;