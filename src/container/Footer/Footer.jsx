import React, {useState} from 'react'
import "./Footer.scss";

import {images} from '../../constants';
import {AppWrap, MotionWrap} from '../../wrapper';

const Footer = () => {
  return(
    <>
      <h2 className='head-text'>
        Take a Coffe & Chat with me 
      </h2>
      <div className='app__footer-cards'>
        <div className='app__footer-card'>
          <img src={images.email} alt="email" />
          <a href="mailto:phucnh.le@gmail.com" className='p-text'>phucnh.le@gmail.com</a>
        </div>
        <div className='app__footer-card'>
          <img src={images.mobile} alt="mobile" />
          <a href="tel: 0423851354" className='p-text'>0423851354</a>
        </div>
      </div>
      
      <div className='app__footer-form app__flex'>
        <div className='app__flex'>
          <input className='p-text' type="text" placeholder='Your Name' value={name} onChange={handleChangeInput} name='name'/>
        </div>
        <div className='app__flex'>
          <input className='p-text' type="email" placeholder='Your Email' value={email} onChange={handleChangeInput} name='email'/>
        </div>
        <div>
          <textarea 
          className='p-text' 
          placeholder='Your Message'
          name="message" 
          value={message}
          onChange={handleChangeInput} 
          />
        </div>
        <button type='button' className='p-text' onClick={handleSubmit}>Send Message</button>
      </div>
    </>
  )
}

export default AppWrap(
  MotionWrap(Footer, 'app__footer'),
  'contact',
  'app__whitebg'
)
