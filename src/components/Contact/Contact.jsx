import React from 'react';
import './Contact.css';
import store from '../../assets/store1.png'


function Contact() {
  return (
    <div className="contact-container">
      <div className="contact-image">
        <img src={store} alt="" className='Contact Us'/>
      </div>
      <div className="contact-form">
        <h2></h2>
        <form>
          <div className="form-group">
            <label htmlFor="name">Name:</label>
            <input type="text" id="name" placeholder="Enter your name" />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input type="email" id="email" placeholder="Enter your email" />
          </div>
          <div className="form-group">
            <label htmlFor="message">Message:</label>
            <textarea id="message" placeholder="Write your message"></textarea>
          </div>
          <button type="submit" className="submit-button">Send Message</button>
        </form>
      </div>
    </div>
  );
}

export default Contact;
