import React, { useState } from 'react';
import { HiMenuAlt4, HiX } from 'react-icons/hi';
import { motion } from 'framer-motion';
import { dropDown, staggerContainer } from '../../utils/motion'
import { images } from '../../constants';
import './Navbar.scss';

const Navbar = () => {
  const [toggle, setToggle] = useState(false);

  const handleToggle = () => {
    setToggle(!toggle);
  };

  return (
    <div id="navbar" style={{position: "relative", zIndex:10}}>
    {/* desktop  */}
      <motion.nav className="app__navbar" initial="hidden" animate="show" variants={staggerContainer(0.1, 0.2)}>
        <motion.div className="app__navbar-logo"  variants={dropDown}>
          <a href="/" aria-label="logo">
            <img src={images.icon} alt="logo" width="35" height="35" />
          </a>
        </motion.div>
        <motion.ul className="app__navbar-link" initial="hidden" animate="show" variants={staggerContainer(0.1, 0.2)}>
          {['home', 'about', 'work', 'skills', 'contact'].map((item) => (
            <motion.li className="app__flex p-text" key={`link-${item}`} variants={dropDown}>
              <a href={`#${item}`}>{item}</a>
            </motion.li>
          ))}
        </motion.ul>

        <motion.div className="app__navbar-resume" variants={dropDown}>
          <motion.a target="_blank" rel="noopener noreferrer" href={images.resume}>
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
                <a className="app__navbar-menu-resume" target="_blank" rel="noopener noreferrer"  variant="primary" href={images.resume}>
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