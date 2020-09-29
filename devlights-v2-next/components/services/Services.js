import React from "react";
import styles  from "./Services.module.scss";
import CardMobile from '../cardService/CardMobile';
import CardSoftware from '../cardService/CardSoftware';
import CardTesting from '../cardService/CardTesting';
import CardUx from '../cardService/CardUx';
import CardStaff from '../cardService/CardStaff';
import CardWeb from '../cardService/CardWeb';
const Services = (props) =>{

return(
  <div className={styles.services}>
      <div className="container">
          <div className="row">
              <div className="col-sm-12 col-lg-4 col-xl-3">
                  <div className={styles.serviceDescriptionContainer}>
                      <h2 className={styles.title}>Services</h2>
                      <br/>
                      <h4 className={styles.serviceDescription}>
                      In Devlights, we truly understand the idea that there are no two companies alike, and that each one has its own unique needs.
                      </h4>
                      <br/>

                        <p className={styles.serviceText}>
                        That’s the reason why our company also offers different services adapted to the client's specific requirements.
                        </p>

                        <a href="" className={styles.btn_2}>Talk with us</a>
                        

                    </div>
             </div>
          <div className="col-sm-12 col-xl-9 col-md-9">
                <div className={styles.serviceCardContainer}>
                <div className="d-flex">
                <CardStaff></CardStaff>
                <CardSoftware></CardSoftware>
                <CardWeb></CardWeb>
                </div>
               <div className="d-flex">
               <CardMobile></CardMobile>
               <CardTesting></CardTesting>
               <CardUx></CardUx>
               </div>  
          </div>

          </div>
          <div className="container">
            <div className={styles.counter}></div>
          </div>

          </div>
      </div>
 
  </div>
    
);

};

export default Services;