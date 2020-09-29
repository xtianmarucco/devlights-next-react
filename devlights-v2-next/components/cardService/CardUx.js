import React from "react";
import styles from './Card.module.scss';



const CardUx = (props) => {

    return (

            <div className="col-md-12 col-md-4 col-lg-4">
               <div className={styles.serviceCard}>
               <div class="single_service_part">
                   <span class="single_service_icon">
                       <img src="/code.png"/>
                   </span>
                   <h4 className={styles.servicesTitle}>UX/UI Design</h4>
                   <p className={styles.servicesInfo}>Want to refresh the look and functionality of your site/app? Our highly skilled team of designers and developers can give your project a smooth and engaging user experience that will increase traffic, style, and performance in order to reach more users.</p>
                </div>
               </div> 
            </div>
      
    );
};

export default CardUx;