import React from "react";
import styles from './Card.module.scss';



const CardMobile = (props) => {

    return (

            <div className="col-md-12 col-md-4 col-lg-4">
               <div className={styles.serviceCard}>
               <div class="single_service_part">
                   <span class="single_service_icon">
                       <img src="/team.png"/>
                   </span>
                   <h4  className={styles.servicesTitle}>Staff augmentation</h4>
                   <p className={styles.servicesInfo}>Recruiting specialized members for your team is an exhausting and time-consuming process? Our outsourcing team can help you with that providing specialized human resources to satisfy your requirements. We count with a wide variety of qualified professional profiles in our records.</p>
                </div>
               </div> 
            </div>
      
    );
};

export default CardMobile;