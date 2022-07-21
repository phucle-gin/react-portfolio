import React, { useState } from 'react';
import { HiMenuAlt4, HiX } from 'react-icons/hi';
import { motion } from 'framer-motion';
import {images} from '../../constants';

import './Navbar.scss';

const Navbar = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <nav className="app__navbar">
      <div className="app__navbar-logo">
        <a href={`/#`}>
          <img src={images.icon1} alt="logo"/>
        </a> 
      </div>
      <ul className="app__navbar-link">
        {['home', 'about', 'work', 'skills', 'contact'].map((item) => (
          <li className="app__flex p-text" key={`link-${item}`}>
            <div />
            <a href={`#${item}`}>{item}</a>
          </li>
        ))}


      </ul>
      <div className="app__navbar-resume">
          <a href={images.pdf} rel="noopener noreferrer" target="_blank">Resume</a>
      </div>
      <div className="app__navbar-menu">
        <HiMenuAlt4 onClick={() => setToggle(true)} />

        {toggle && (
          <motion.div
            whileInView={{ x: [300, 0] }}
            transition={{ duration: 0.85, ease: 'easeOut' }}
          >
            <HiX onClick={() => setToggle(false)} />
            <ul>
              {['home', 'about', 'work', 'skills', 'contact'].map((item) => (
                <li key={item}>
                  <a href={`#${item}`} onClick={() => setToggle(false)}>
                    {item}
                  </a>
                </li>
              ))}
            <>
                <a className="app__navbar-menu-resume" href={images.pdf} rel="noopener noreferrer" target="_blank" onClick={() => setToggle(false)}>Resume</a>
            </>
            </ul>

          </motion.div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;