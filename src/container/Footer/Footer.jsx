import React from 'react'
import {AppWrap} from '../../wrapper' 
import { MotionWrap } from '../../wrapper';
import { SocialMedia } from '../../components';
import { motion } from 'framer-motion';
import "./Footer.scss";

const Footer = () => {
  return(
    <motion.div>
        <div className="footer-gradient" />
        <h2 className='head-text' style={{ color: 'var(--secondary-color)', paddingTop:'2rem'}}>
        Get In Touch! 
        </h2>
        <div className='app__flex app__footer-cards'>
          <p className=' p-text'>
          I'm currently looking for new opportunities, my inbox is always open. Whether you have a question or just want to say hi, I'll try my best to get back to you!
          </p>
          <div className='app__flex app__footer-button'>
            <a href="mailto:phucnh.le@gmail.com" className='p-text'>Say Hello</a>
          </div>
          <div className='app__flex app__footer-social'>
            <SocialMedia />
            <div className="copyright">
              <p className="p-text">© 2021 PHUC LE.</p>
              <p className="p-text">All rights reserved.</p>
            </div>
          </div>
        </div>
    </motion.div>
  )
}

export default AppWrap(
  MotionWrap(Footer, 'app__footer'),
  'contact',
  'app__bg-gradient'
)
