import React from "react";
import styles from './Card.module.scss';



const CardMobile = (props) => {

    return (

            <div className="col-md-12 col-md-4 col-lg-4">
               <div className={styles.serviceCard}>
               <div class="single_service_part">
                   <span class="single_service_icon">
                       <img src="/phone.png"/>
                   </span>
                   <h4  className={styles.servicesTitle}>Mobile development</h4>
                   <p className={styles.servicesInfo}>Want a Mobile App? We can develop and design cross platform Apps that are visually appealing, following the latest trends on UX/UI.</p>
                </div>
               </div> 
            </div>
      
    );
};

export default CardMobile;