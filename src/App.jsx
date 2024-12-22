import React from 'react'
import Navbar from './components/Navbar/Navbar'
import Hero from './components/HERO/Hero'
import Services from './components/Services/Services'
import Title from './components/Title/Title'
import About from './components/About/About'
import Catalog from './components/Catalog/Catalog'
import Booking from './components/Booking/Booking'
import Contact from './components/Contact/Contact.JSX'
import Testimonials from './components/Testimonials/Testimonials'
import Footer from './components/Footer/Footer'

const App = () => {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <div className="container">
        <Title subTitle='Our Services' title=' What we offer'/>
      <Services/>
      <Title subTitle='' title=' About Us'/>
      <About/>
      <Title subTitle='Catalog' title=' What we offer'/>
      <Catalog/>
      <Title subTitle='' title=' '/>
      <Booking/>
     
      <Title subTitle='Testimonials' title=' what clients says'/>
      <Testimonials/>
      <Title subTitle='' title=' Contact Us'/>
      <Contact/>
      <Footer/>
      
    
      </div>
      
    </div>
  )
}

export default App


