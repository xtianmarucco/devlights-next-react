import React from 'react';
import styles from './Testimony.module.scss';
import {
    FaMinus
  } from "react-icons/fa";


const Testimony = ( props ) => {

    // state = {
    //     isShown :false,
    // }

    return (


            <div id="clients" className={styles.sectionBg} >

              <div className="container">
                        <div className={styles.sectionHeader}>
                        <h3 className={styles.sectionTitle}>What our clients say about us</h3>
                        </div>
                        <div className=" col-sm-12 col-lg-12 text-center">
                        <FaMinus className={styles.icon}/>
                        </div>
                    <div className="row no-gutters clients-wrap clearfix">
                        <div className="container text-center">
                        <div id="carouselExampleFade" className="carousel slide carousel-fade" data-ride="carousel">
                        <div className="carousel-inner">
                            <div className="carousel-item active">
                                <div className={styles.carouselItem }>
                                <div class={styles.rowCard}>
                                <div class="row " >
                                <div class="column-img col-md-4 align-middle">
                                    <img src="/lindsay.png" alt=""/>
                                </div>
                                <div class="column-info col-md-8 col-sm-12 text-left align-middle"> 
                                    <h4 className={styles.name}> Lindsay Insco </h4>
                                    <h5 className={styles.company}> Millenium Digital Technologies </h5>
                                        <h6 className={styles.role}> Lead Developer </h6>
                                        <p className={styles.testimonyText} >Devlights has been such a useful team, I’ve come to look at them like family. With the variety of experience everyone has, it seems there’s always a great fit for a variety of projects. I’ve loved working with the team so much, I have brought them on to long-term projects with me and I wouldn’t have it any other way</p>
                                    </div>
                                </div>
                                </div>
                                </div>

                            </div>


                            <div className="carousel-item">
                                <div className={styles.carouselItem }>
                                <div class={styles.rowCard}>
                                <div class="row " >
                                <div class="column-img col-md-4 align-middle">
                                    <img src="/darlene.png" alt=""/>
                                </div>
                                <div class="column-info col-md-8 col-sm-12 text-left align-middle"> 
                                    <h4 className={styles.name}> Darlene Liebman </h4>
                                    <h5 className={styles.company}> Creative Humans </h5>
                                        <h6 className={styles.role}> Founder </h6>
                                        <p className={styles.testimonyText} >Working with the team at Devlights has been a great experience. The Team is knowledgeable, responsive and gracious. I highly recommend them, for any project large or small.</p>
                                    </div>
                                </div>
                                </div>
                                </div>

                            </div>

                            <div className="carousel-item">
                                <div className={styles.carouselItem }>
                                <div class={styles.rowCard}>
                                <div class="row " >
                                <div class="column-img col-md-4 align-middle">
                                    <img src="/ross.png" alt=""/>
                                </div>
                                <div class="column-info col-md-8 col-sm-12 text-left align-middle"> 
                                    <h4 className={styles.name}> Ross Forsyth </h4>
                                    <h5 className={styles.company}>Human Design</h5>
                                        <h6 className={styles.role}> Director Of Technology </h6>
                                        <p className={styles.testimonyText} >DevLights is a great team to work with. Not only do they have the skills to get the job done but they communicate effectively at every level throughout the project. Their team was just what we needed!</p>
                                    </div>
                                </div>
                                </div>
                                </div>

                            </div>
                            
                           
                        </div>
                        <a className="carousel-control-prev" href="#carouselExampleFade" role="button" data-slide="prev">
                            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        </a>
                        <a className="carousel-control-next" href="#carouselExampleFade" role="button" data-slide="next">
                            <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        </a>
                        </div>
                            
                        </div>
                        
                    </div>

              
                </div>     

            </div> 
 
    );
};

export default Testimony;