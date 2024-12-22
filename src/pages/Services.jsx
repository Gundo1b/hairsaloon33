import React from 'react'

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
