import React, { useState } from 'react';
import { HiMenuAlt4, HiX } from 'react-icons/hi';
import { motion } from 'framer-motion';
import { images } from '../../constants';
import './Navbar.scss';

const container = {
  hidden: { opacity: 1 },
  show: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

const childProps = {
  hidden: { y: -100 },
  show: {
    y: 0,
    transition: {
      type: 'tween',
      ease: 'easeInOut',
      duration: 0.8,
    },
  },
};

const Navbar = () => {
  const [toggle, setToggle] = useState(false);

  const handleToggle = () => {
    setToggle(!toggle);
  };

  return (
    <div id="navbar" style={{position: "relative", zIndex:10}}>
    {/* desktop  */}
      <motion.nav className="app__navbar" variants={container} initial="hidden" animate="show">
        <motion.div className="app__navbar-logo">
          <a href="/" aria-label="logo">
            <img src={images.icon} alt="logo" width="35" height="35" />
          </a>
        </motion.div>

        <motion.ul className="app__navbar-link">
          {['home', 'about', 'work', 'skills', 'contact'].map((item) => (
            <motion.li className="app__flex p-text" key={`link-${item}`} variants={childProps}>
              <div />
              <a href={`#${item}`}>{item}</a>
            </motion.li>
          ))}
        </motion.ul>

        <motion.div className="app__navbar-resume" variants={childProps}>
          <motion.a target="_blank" rel="noopener noreferrer" href="/resume.pdf">
            Resume
          </motion.a>
        </motion.div>
      {/* mobile  */}
        <motion.div className="app__navbar-menu">
          <HiMenuAlt4 onClick={() => {
                handleToggle()}}/>

          {toggle && (
            <motion.div
            initial="hidden"
            animate={toggle ? 'show' : 'hidden'}
            variants={{ hidden: { x: 300 }, show: { x: 0 } , exit: {x: 300}}} 
            transition={{ duration: 0.8, ease: 'easeOut' }}
            >
              <HiX onClick={() => {
                handleToggle();
              }}/>
              <ul>
                {['home', 'about', 'work', 'skills', 'contact'].map((item) => (
                  <li key={item}>
                    <a href={`#${item}`} onClick={() => {handleToggle()}} >
                      {item}
                    </a>
                  </li>
                ))}
                <a className="app__navbar-menu-resume" target="_blank" rel="noopener noreferrer"  variant="primary" href="/resume.pdf">
                  Resume
                </a>
              </ul>
              
            </motion.div>
          )}
        </motion.div>
      </motion.nav>
    </div>
  );
};

export default React.memo(Navbar);