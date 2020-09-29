import Head from 'next/head';
import styles from '../styles/Home.module.scss';
import IntroSection from '../components/intro-section/IntroSection';
import About from '../components/about/About';
import About2 from '../components/about2/About2';
import Services from '../components/services/Services' ;
import Footer from '../components/footer/Footer';
import Technologies from '../components/technologies/Technologies';


export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css" integrity="sha384-JcKb8q3iqJ61gNV9KGb8thSsNjpSL0n8PARn9HuZOnIxN0hoP+VmmDGMN5t9UJ0Z" crossorigin="anonymous"></link>
        <link href="https://fonts.googleapis.com/css2?family=Aleo:wght@400;700&display=swap" rel="stylesheet"/>
        <link href="https://fonts.googleapis.com/css2?family=Aleo:wght@400;700&family=Open+Sans:wght@400;700&display=swap" rel="stylesheet"/>
      </Head>
      <IntroSection></IntroSection>
      <About></About>
      <About2></About2>
      <Services></Services>
  <Technologies></Technologies>



    <Footer></Footer>
    </div>

  )
}
