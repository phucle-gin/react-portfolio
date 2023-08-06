import React from 'react';
import { motion } from 'framer-motion';
import { images } from '../../constants';
import { AppWrap } from '../../wrapper';
import './Header.scss';

const scaleVariants = {
  whileInView: {
    scale: [0, 1],
    x: [100, 0],
    opacity: [0, 1],
    transition: {
      duration: 1,
      ease: 'easeInOut',
    },
  },
};

const Header = () => {
  return (
    <>
      <div className="hero-gradient"/>
      <div className="app__header app__flex">
        <motion.div
          initial={{opacity: 0}}
          whileInView={{ x: [-100, 0], opacity: [0, 1] }}
          transition={{ duration: 1 }}
          className="app__header-info"
        >
          <div className="app__header-badge">
            <div className="badge-cmp app__flex" style={{ width: 345 }}>
              <span>👋</span>
              <div className="magic" style={{ marginLeft: 20 }}>
                <p className="p-text">Hello, my name is</p>
                <h1 className="magic-text head-text">Phuc Le</h1>
              </div>
            </div>
            <div className="tag-cmp app__flex" style={{ width: 'auto' }}>
              <p className="p-text">Front-End Developer</p>
              <p className="p-text">Freelancer</p>
            </div>
          </div>
        </motion.div>
        <motion.div
          initial={{opacity: 0}}
          whileInView={{ opacity: [0, 1] }}
          transition={{ duration: 1, delayChildren: 2 }}
          className="app__header-img"
        >
          <motion.img
            whileInView={{ scale: [0, 1] }}
            transition={{ duration: 1, ease: 'easeInOut' }}
            src={images.profile}
            width="100"
            height="100"
            alt="profile_bg"
          />
          <motion.img
            initial="hidden"
            whileInView={{ scale: [0, 1] }}
            transition={{ duration: 1, ease: 'easeInOut' }}
            src={images.circle}
            width="100"
            height="100"
            alt="profile_circle"
            className="overlay_circle"
          />
        </motion.div>

        <motion.div
          initial={{opacity: 0}}
          variants={scaleVariants}
          whileInView={scaleVariants.whileInView}
          className="app__header-circles"
        >
          {[images.react, images.javascript, images.sass].map((circle, index) => (
            <div className="circle-cmp app__flex" key={`circle-${index}`}>
              <img src={circle} alt="circle" width="100" height="100"/>
            </div>
          ))}
        </motion.div>
      </div>
      <div id="scroller" className="app__scroller-container">
        <a href="#about" aria-label="Get to know more about Phuc Le">
          <div className="app__scroller">
            <div className="app__scroller-ball"/>
          </div>
        </a>
    </div>
    </>
  );
};

export default AppWrap(Header, 'home');