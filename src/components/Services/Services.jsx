import React from 'react'
import './Services.css'
import service1 from '../../assets/service1.jpg'
import service2 from '../../assets/cat3.jpg'
import service3 from '../../assets/cat6.jpg'

const Services = () => {
  return (
    <div className='services'>
        <div className='service'>
            <img src={service1} alt="" />
            <div className="caption">
                
                <p>Man Saloon</p>
            </div>
        </div>
        <div className='service'>
            <img src={service2} alt="" />
            <div className="caption">
            <p>Hair Wash</p>
            </div>
            

        </div>
        <div className='service'>
            <img src={service3} alt="" />
            <div className="caption">
            <p>Hair & Nails Cleaning</p>
            </div>
            
            
        </div>
    </div>
  )
}

export default Services
