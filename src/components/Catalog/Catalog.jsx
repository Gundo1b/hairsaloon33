import React from 'react'
import './Catalog.css'
import cat1 from '../../assets/cat1.jpg'
import cat2  from '../../assets/cat2.jpeg'
import cat3 from '../../assets/cat3.jpg'
import cat6 from '../../assets/cat6.jpg'
import cat5 from '../../assets/cat5.png'


const Catalog = () => {
  return (
    <div className="our-services-section py-5">
      <div className="container text-center">
        <div className="services">
          <div className="service">
            <img src={cat2} alt="Haircut" className="service-image" />
            <h3 className="service-title">Haircuts</h3>
            <p className="service-description">Professional cuts and trims for all hair types.</p>
          <p>R50.00</p>
          </div>
          <div className="service">
            <img src={cat3} alt="Hair Coloring" className="service-image" />
            <h3 className="service-title">Hair Coloring</h3>
            <p className="service-description">Explore vibrant colors and stylish hair transformations.</p>
            <p>R20.00</p>
          </div>
          <div className="service">
            <img src={cat6} alt="Spa Treatments" className="service-image" />
            <h3 className="service-title">Spa Treatments</h3>
            <p className="service-description">Relax with soothing treatments and pampering services.</p>
          <p>R100.00</p>
          </div>
          
        </div>
      </div>
    </div>
  )
}

export default Catalog
