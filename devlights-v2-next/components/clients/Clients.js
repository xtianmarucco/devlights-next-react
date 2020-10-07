import React, { setState } from 'react';
import styles from './Clients.module.scss';
import useVisibilityToggler from '../hooks/useVisibilityToggler';

import {
    FaMinus
  } from "react-icons/fa";

const Clients = ( props ) => {

    const [ ClientCard, togglerCardVisibility ] = useVisibilityToggler(  
        <div className="row">
                    
                        <div className="col-lg-3 col-md-4 col-6">
                            <div className={styles.clientsLogo}>
                                <img src="/client-13.png " className="img-fluid" alt=""/>
                            </div>
                        </div>

                        <div className="col-lg-3 col-md-4 col-6">
                            <div className={styles.clientsLogo}>
                                <img src="/client-16.png " className="img-fluid" alt=""/>
                            </div>
                        </div>


                        <div className="col-lg-3 col-md-4 col-6">
                            <div className={styles.clientsLogo}>
                                <img src="/client-17.png " className="img-fluid" alt=""/>
                            </div>
                        </div>

                        <div className="col-lg-3 col-md-4 col-6">
                            <div className={styles.clientsLogo}>
                                <img src="/client-14.png " className="img-fluid" alt=""/>
                            </div>
                        </div>

                        <div className="col-lg-3 col-md-4 col-6">
                            <div className={styles.clientsLogo}>
                                <img src="/client-20.png " className="img-fluid" alt=""/>
                            </div>
                        </div>

                        <div className="col-lg-3 col-md-4 col-6">
                            <div className={styles.clientsLogo}>
                                <img src="/client-11.png " className="img-fluid" alt=""/>
                            </div>
                        </div>

                        <div className="col-lg-3 col-md-4 col-6">
                            <div className={styles.clientsLogo}>
                                <img src="/client-5.png " className="img-fluid" alt=""/>
                            </div>
                        </div>

                        <div className="col-lg-3 col-md-4 col-6">
                            <div className={styles.clientsLogo}>
                                <img src="/client-12.png " className="img-fluid" alt=""/>
                            </div>
                        </div>

                        <div className="col-lg-3 col-md-4 col-6">
                            <div className={styles.clientsLogo}>
                                <img src="/client-8.png " className="img-fluid" alt=""/>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-4 col-6">
                            <div className={styles.clientsLogo}>
                                <img src="/client-18.png " className="img-fluid" alt=""/>
                            </div>
                        </div>
                        <div id="hiddenCard" className="col-lg-3 col-md-4 col-6">
                            <div className={styles.clientsLogo}>
                                <img src="/client-15.png " className="img-fluid" alt=""/>
                            </div>
                        </div>
                </div>  , true 
         );
    return (


            <div id="clients" className={styles.sectionBg} >

              <div className="container">
                        <div className={styles.sectionHeader}>
                        <h3 className={styles.sectionTitle}>Clients</h3>
                        </div>
                        <div className=" col-sm-12 col-lg-12 text-center">
                        <FaMinus className={styles.icon}/>
                        </div>
                    <div className="row no-gutters clients-wrap clearfix wow fadeInUp">
                        <div className="col-lg-3 col-md-4 col-6">
                            <div className={styles.clientsLogo}>
                                <img src="/client-1.png " className="img-fluid" alt=""/>
                            </div>
                        </div>   

                        <div className="col-lg-3 col-md-4 col-6">
                            <div className={styles.clientsLogo}>
                                <img src="/client-3.png " className="img-fluid" alt=""/>
                            </div>
                        </div>   


                        <div className="col-lg-3 col-md-4 col-6">
                            <div className={styles.clientsLogo}>
                                <img src="/client-2.png " className="img-fluid" alt=""/>
                            </div>
                        </div>   

                        <div className="col-lg-3 col-md-4 col-6">
                            <div className={styles.clientsLogo}>
                                <img src="/client-10.png " className="img-fluid" alt=""/>
                            </div>
                        </div>   

                        <div className="col-lg-3 col-md-4 col-6">
                            <div className={styles.clientsLogo}>
                                <img src="/client-21.png " className="img-fluid" alt=""/>
                            </div>
                        </div>   

                        <div className="col-lg-3 col-md-4 col-6">
                            <div className={styles.clientsLogo}>
                                <img src="/client-24.png " className="img-fluid" alt=""/>
                            </div>
                        </div>   

                        
                        <div className="col-lg-3 col-md-4 col-6">
                            <div className={styles.clientsLogo}>
                                <img src="/client-25.png " className="img-fluid" alt=""/>
                            </div>
                        </div>   

                        <div className="col-lg-3 col-md-4 col-6">
                            <div className={styles.clientsLogo}>
                                <img src="/client-26.png " className="img-fluid" alt=""/>
                            </div>
                        </div>   
                        
                        <div className="col-lg-3 col-md-4 col-6">
                            <div className={styles.clientsLogo}>
                                <img src="/client-9.png " className="img-fluid" alt=""/>
                            </div>
                        </div>

                        <div className="col-lg-3 col-md-4 col-6">
                            <div className={styles.clientsLogo}>
                                <img src="/client-6.png " className="img-fluid" alt=""/>
                            </div>
                        </div>

                        <div className="col-lg-3 col-md-4 col-6">
                            <div className={styles.clientsLogo}>
                                <img src="/client-13.png " className="img-fluid" alt=""/>
                            </div>
                        </div>

                        <div className="col-lg-3 col-md-4 col-6">
                            <div className={styles.clientsLogo}>
                                <img src="/client-7.png " className="img-fluid" alt=""/>
                            </div>
                        </div>

                        <div className="col-lg-3 col-md-4 col-6">
                            <div className={styles.clientsLogo}>
                                <img src="/client-4.png " className="img-fluid" alt=""/>
                            </div>
                        </div>

                        <div className="col-lg-3 col-md-4 col-6">
                            <div className={styles.clientsLogo}>
                                <img src="/client-19.png " className="img-fluid" alt=""/>
                            </div>
                        </div>

                        <div className="col-lg-3 col-md-4 col-6">
                            <div className={styles.clientsLogo}>
                                <img src="/client-22.png " className="img-fluid" alt=""/>
                            </div>
                        </div>

                        <div className="col-lg-3 col-md-4 col-6">
                            <div className={styles.clientsLogo}>
                                <img src="/client-23.png " className="img-fluid" alt=""/>
                            </div>
                        </div>
               

                        {ClientCard}
                    
                <div className="container text-center">
                    <button onClick={togglerCardVisibility} id="show-more-clients" className={styles.btn_2}>
                                       {ClientCard ? 'show less' : 'Show more'} 
                    </button>
                </div>
                </div>     
            </div> 
 
            </div>
    );
};

export default Clients;