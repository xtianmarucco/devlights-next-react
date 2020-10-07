import Head from 'next/head';
import styles from '../styles/Home.module.scss';
import IntroSection from '../components/intro-section/IntroSection';
import About from '../components/about/About';
import About2 from '../components/about2/About2';
import Services from '../components/services/Services' ;
import Technologies from '../components/technologies/Technologies';
import Clients from '../components/clients/Clients';
import Testimony from '../components/testimony/Testimony';
import Careers from '../components/careers/Careers';
import Footer from '../components/footer/Footer';
import Counter from '../components/counter/Counter';


export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
        <script src="https://code.jquery.com/jquery-3.5.1.slim.min.js" integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj" crossorigin="anonymous"></script>
        <script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.1/dist/umd/popper.min.js" integrity="sha384-9/reFTGAW83EW2RDu2S0VKaIzap3H66lZH81PoYlFhbGU+6BZp6G7niu735Sk7lN" crossorigin="anonymous"></script>
        <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js" integrity="sha384-B4gt1jrGC7Jh4AgTPSdUtOBvfO8shuf57BaghqFfPlYxofvL8/KUEfYiJOMMV+rV" crossorigin="anonymous"></script>
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css" integrity="sha384-JcKb8q3iqJ61gNV9KGb8thSsNjpSL0n8PARn9HuZOnIxN0hoP+VmmDGMN5t9UJ0Z" crossorigin="anonymous"></link>
        <link href="https://fonts.googleapis.com/css2?family=Aleo:wght@400;700&display=swap" rel="stylesheet"/>
        <link href="https://fonts.googleapis.com/css2?family=Aleo:wght@400;700&family=Open+Sans:wght@400;700&display=swap" rel="stylesheet"/>
      </Head>
      <IntroSection></IntroSection>
      <About></About>
      <About2></About2>
      <Services></Services>
      <Counter></Counter>
      <Technologies></Technologies>
      <Clients></Clients>
      <Testimony></Testimony>
      <Careers></Careers>



    <Footer></Footer>
    </div>

  )
}
