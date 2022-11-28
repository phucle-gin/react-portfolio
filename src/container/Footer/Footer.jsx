import React from 'react'
import { NavigationDots, SocialMedia } from '../../components';
import { MotionWrap } from '../../wrapper';
import "./Footer.scss";

const AppWrap = (Component, idName, classNames) => function HOC() {
  return (
    <div id={idName} className={`app__footer-container ${classNames}`}>
      <SocialMedia />
      <div className="app__wrapper app__flex">
        <Component />
        <div className="copyright">
              <p className="p-text"> @2021 PHUC LE</p>
              <p className="p-text">All rights reserved</p>
          </div>
      </div>
      <NavigationDots active={idName} />
    </div>
  );
};
const Footer = () => {
  return(
    <>
        <h2 className='head-text' style={
          {
            color: 'var(--secondary-color)',
            paddingTop:'2rem',
          }}>
        Get In Touch! 
        </h2>
      <div className='app__flex app__footer-cards'>
        <p className=' p-text'>
         I'm currently looking for new opportunities, my inbox is always open. Whether you have a question or just want to say hi, I'll try my best to get back to you!
        </p>
        <div className='app__flex app__footer-button'>
          <a href="mailto:phucnh.le@gmail.com" className='p-text'>Say Hello</a>
        </div>
      </div>

    </>
  )
}

export default AppWrap(
  MotionWrap(Footer, 'app__footer'),
  'contact',
  'app__primarybg'
)
