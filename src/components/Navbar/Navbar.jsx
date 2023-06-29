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
        <motion.a target="_blank" rel="noopener noreferrer" href={process.env.PUBLIC_URL + '/resume.pdf'}>
          Resume
        </motion.a>
      </motion.div>

      <div className="app__navbar-menu">
        <HiMenuAlt4 onClick={handleToggle} />

        {toggle && (
          <motion.div whileInView={{ x: [300, 0] }} transition={{ duration: 0.85, ease: 'easeOut' }}>
            <HiX onClick={handleToggle} />
            <ul>
              {['home', 'about', 'work', 'skills', 'contact'].map((item) => (
                <li key={item}>
                  <a href={`#${item}`} onClick={handleToggle}>
                    {item}
                  </a>
                </li>
              ))}
              <a className="app__navbar-menu-resume" target="_blank" rel="noopener noreferrer" href={process.env.PUBLIC_URL + '/resume.pdf'} variant="primary" onClick={handleToggle}>
                Resume
              </a>
            </ul>
          </motion.div>
        )}
      </div>
    </motion.nav>
  );
};

export default React.memo(Navbar);