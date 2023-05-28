import React, { useState } from 'react';
import { HiMenuAlt4, HiX } from 'react-icons/hi';
import { motion  } from 'framer-motion';
import {images} from '../../constants';
import './Navbar.scss';
const container = {
  hidden: { opacity: 1 },
  show: {
    transition: {
      staggerChildren:0.1,
      delayChildren: 0.2,
    }
  }
}
const childprops = {
  hidden: { y: -100},
  show: { 
    y: 0, 
    transition: {
      type: "tween",
      ease :"easeInOut",
      duration: 0.8,
    } 
  }
}
const Navbar = () => {
  const [toggle, setToggle] = useState(false);

  // const openPDF = () => {
  //   const pdfWindow = window.open("Resume");
  //   const Title     = "Resume";
  //   const URI       = "/resume.pdf";
  //   const html      = `
  //     <html>
  //       <head>
  //         <title>${Title}</title>
  //       </head>
  //       <body style="margin:0">
  //         <embed width="100%" height="100%" src=${process.env.PUBLIC_URL + '/Resume.pdf'} type="application/pdf">
  //       </body>
  //     </html>
  //   `;
  //   pdfWindow.document.write(html);
  //   pdfWindow.document.close();
  //   pdfWindow.history.pushState(null, null, URI);
  // };

  return (
    <motion.nav className="app__navbar" variants={container} initial="hidden" animate="show">
      <motion.div className="app__navbar-logo" variants={childprops}>
        <a href={`/`} aria-label="logo">
          <img src={images.icon} alt="logo" width="35" height="35" />
        </a> 
      </motion.div>
      <motion.ul className="app__navbar-link">
        {['home', 'about', 'work', 'skills', 'contact'].map((item) => (
          <motion.li className="app__flex p-text" key={`link-${item}`} variants={childprops}>
            <div />
            <a href={`#${item}`}>{item}</a>
          </motion.li>
        ))}
      </motion.ul>
      <motion.div className="app__navbar-resume" variants={childprops}>
        <motion.a target="_blank" rel="noopener noreferrer" href={process.env.PUBLIC_URL + '/resume.pdf'}>
          Resume
          </motion.a>
      </motion.div>
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
                <a className="app__navbar-menu-resume"  target="_blank" rel="noopener noreferrer" href={process.env.PUBLIC_URL + '/resume.pdf'} variant="primary" onClick={() => {setToggle(false)}}>
                  Resume
                </a>
            </>
            </ul>

          </motion.div>
        )}
      </div>
    </motion.nav>
  );
};

export default Navbar;