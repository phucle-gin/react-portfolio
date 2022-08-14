import React, {useState} from 'react'
import "./Footer.scss";

import {images} from '../../constants';
import {AppWrap, MotionWrap} from '../../wrapper';

const Footer = () => {
  const [formData, setformData] = useState({name: '', email:'', message:''});
  const [isFormSubmitted, setisFormSubmitted] = useState(false);
  const [loading, setloading] = useState(false);

  const {name, email, message} = formData;
  const handleChangeInput = (e) => {
    const {name, value} = e.target;
    setformData({...formData, [name]: value});
  }

  const handleSubmit = () =>{
    setloading(true);

    const contact = {
      name: name,
      email: name,
      message: message,
    }
    contact(() => {
      setloading(false);
      setisFormSubmitted(true);
    })
  }
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

      {!isFormSubmitted ?
      <div className='app__footer-form app__flex'>
        <div className='app__flex'>
          <input className='p-text' type="text" placeholder='Your Name' value={name} onChange={handleChangeInput} name='name'required />
        </div>
        <div className='app__flex'>
          <input className='p-text' type="email" placeholder='Your Email' value={email} onChange={handleChangeInput} name='email'required />
        </div>
        <div>
          <textarea 
          className='p-text' 
          placeholder='Your Message' required 
          name="message" 
          value={message}
          onChange={handleChangeInput}
          style={{resize: 'none'}}
          />
        </div>
        <button type='button' className='p-text' onClick={handleSubmit}>{loading ? 'Sending' : 'Send Message'}</button>
      </div>
      : <div>
        <h3 className='header-text'>Thank you for getting in touch!</h3>
      </div>}
    </>
  )
}

export default AppWrap(
  MotionWrap(Footer, 'app__footer'),
  'contact',
  'app__primarybg'
)
