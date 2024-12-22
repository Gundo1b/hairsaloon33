import React from 'react'
import './Hero.css'
import dark_arrow from "../../assets/dark-arrow.png"

const Hero = () => {
  return (
    <div className='hero container'>
      <div className="hero-text">
        <h1>Transforming Looks, Elavating Confidence</h1>
        <p>Professional looks for everyone</p>
        <button className='btn'>Contact Us <img src={dark_arrow} alt="" /></button>
      </div>
    </div>
  )
}

export default Hero
