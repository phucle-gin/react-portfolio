import React from 'react';
import { motion } from 'framer-motion';
import { images } from '../../constants';
import { AppWrap } from '../../wrapper';
import {Scroller} from "../../components"
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
            loading="lazy"
          />
          <motion.img
            whileInView={{ scale: [0, 1] }}
            transition={{ duration: 1, ease: 'easeInOut' }}
            src={images.circle}
            width="100"
            height="100"
            alt="profile_circle"
            loading="lazy"
            className="overlay_circle"
          />
        </motion.div>

        <motion.div
          variants={scaleVariants}
          whileInView={scaleVariants.whileInView}
          className="app__header-circles"
        >
          {[images.react, images.javascript, images.sass].map((circle, index) => (
            <div className="circle-cmp app__flex" key={`circle-${index}`}>
              <img src={circle} alt="circle" width="100" height="100" loading="lazy" />
            </div>
          ))}
        </motion.div>
      </div>
      <Scroller />
    </>
  );
};

export default AppWrap(Header, 'home');