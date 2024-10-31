import React from 'react';
import Navbar from './sections/navbar/Navbar';
import Header from './sections/header/Header';
import About from './sections/about/About';
import Portfolio from './sections/portfolio/Portfolio';
import Experience from './sections/experience/Experience';
import Contact from './sections/contact/Contact';
import Footer from './sections/footer/Footer';
import FloatingNav from './sections/floating-nav/FloatingNav';



const App = () => {
  return (
    <main>
        <Navbar/>
        <Header/>
        <About/>
        <Experience/>
        <Portfolio/>
        <Contact/>
        <Footer/>
        <FloatingNav/>
    </main>
  )
}

export default App;

