import React from 'react';
import styles from './Counter.module.scss';
import CountUp from 'react-countup';

const Counter = ( props ) => { 

    return (

        <div className={styles.counterSection}>
              <div className="container">
                <div className={styles.counterContainer}>
                    <div className="col-md-12">

                        <div className={styles.counterBody}>
                                
                            <div className={styles.dataCounter}>
                                <p className={styles.numberData} >+ <CountUp end={150} /></p>
                                <p className={styles.textData}> PROJECTS</p>
                            </div>

                            <div className={styles.dataCounter}>
                                <p className={styles.numberData} ><CountUp end={97} />% </p>
                                <p className={styles.textData}> CLIENT SATISFACTION</p>
                            </div>

                            <div className={styles.dataCounter}>
                                <p className={styles.numberData} >+<CountUp end={5} /></p>
                                <p  className={styles.textData}> YEARS IN BUSINESS</p>
                            </div>


                        </div>

                    </div>
                </div>

            </div>
          

        </div>
    );
};

export default Counter;