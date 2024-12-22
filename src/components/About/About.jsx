import React from 'react'
import './About.css'
import store from '../../assets/store1.png'

const About = () => {
  return (
    <div className='about'>
        <div className="about-right">
            <h3>About Mukhethwa Hair saloon</h3>
            <h2>Beuty is all about confidence</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p> 
            <p>Et dolorem iusto aut deleniti. Minus</p>
                <p>earum saepe voluptas in quae distinctio asperiores dolorum</p>
        </div>
        <div className="about-left">
            <img src={store} alt="" className='about-img'/>
        </div>
    </div>
  )
}

export default About
