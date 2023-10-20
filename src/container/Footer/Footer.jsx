import React from 'react';
import { AppWrap } from '../../wrapper';
import { MotionWrap } from '../../wrapper';
import { SocialMedia } from '../../components';
import { motion, AnimatePresence } from 'framer-motion';
import { footerVariants } from '../../utils/motion';
import './Footer.scss';

const Footer = () => {
  return (
    <AnimatePresence>
      <motion.div
        initial="hidden"
        animate="show"
        variants={footerVariants}
        className="app__footer"
      >
        <div className="footer-gradient" />
        <h2 className="head-text" style={{ color: 'var(--secondary-color)', paddingTop: '2rem' }}>
          Get In Touch!
        </h2>
        <div className="app__flex app__footer-cards">
          <p className="p-text custom-p-spacing">
            I'm currently looking for new opportunities, my inbox is always open. Whether you have a question or just want to say hi, I'll try my best to get back to you!
          </p>
          <div className="app__flex app__footer-button">
            <a href="mailto:henryle.nh@gmail.com" className="p-text">
              Say Hello
            </a>
          </div>
          <div className="app__flex app__footer-social">
            <SocialMedia />
            <div className="copyright">
              <p className="p-text">© 2021 HENRY LE.</p>
              <p className="p-text">All rights reserved.</p>
            </div>
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

export default AppWrap(MotionWrap(Footer, 'app__footer'), 'contact', 'app__bg-gradient');
