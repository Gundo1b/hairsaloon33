import React, { useRef } from 'react'
import './Testimonials.css'
import next_icon from '../../assets/next-icon.png'
import back_icon from '../../assets/back-icon.png'

import user1 from '../../assets/user1.jpeg'
import user2 from '../../assets/user2.jpeg'
import user3 from '../../assets/user3.jpg'
import user4 from '../../assets/service2.jpg'


const Testimonials = () => {

  const slider = useRef();
  let tx = 0;

const slideForward = () => {
if (tx > -50){
  tx -= 25;
}
slider.current.style.transform = 'translateX(${tx}%)'
}
const slideBackward = () => {
  const slider = useRef();
  let tx = 0;

const slideForward = () => {
if (tx > -50){
  tx -= 25;
}
slider.current.style.transform = 'translateX(${tx}%)'
} 
}





  return (
    <div className='testimonials'>
        <img src={next_icon} alt="" className='next-btn' onClick={slideForward}/>
        <img src={back_icon} alt="" className='back-btn' onClick={slideBackward}/>
        <div className="slider">
          <ul ref={slider}>
            <li>
              <div className='slide'>
                <div className='user-info'>
                  <img src={user1} alt="" />
                  <div>
                    <h3>Ndou G</h3>
                    <span>Thohoyandou</span>
                  </div>
                </div>
                <p>best saloon ever</p>
              </div>
            </li>
            <li>
              <div className='slide'>
                <div className='user-info'>
                  <img src={user2} alt="" />
                  <div>
                    <h3>Emmanuel</h3>
                    <span>Thohoyandou</span>
                  </div>
                </div>
                <p>I am coming back again</p>
              </div>
            </li>
            <li>
              <div className='slide'>
                <div className='user-info'>
                  <img src={user3} alt="" />
                  <div>
                    <h3>simon j</h3>
                    <span>Thohoyandou</span>
                  </div>
                </div>
                <p>best haircut ever</p>
              </div>
            </li>
            <li>
              <div className='slide'>
                <div className='user-info'>
                  <img src={user4} alt="" />
                  <div>
                    <h3>simon j</h3>
                    <span>Thohoyandou</span>
                  </div>
                </div>
                <p className='p'>best haircut ever</p>
              </div>
            </li>
          </ul>
        </div>
    </div>
  )
}

export default Testimonials
