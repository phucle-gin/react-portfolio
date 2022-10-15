import React, { useState } from 'react';
import { HiMenuAlt4, HiX } from 'react-icons/hi';
import { motion } from 'framer-motion';
import {images} from '../../constants';
import './Navbar.scss';

const Navbar = () => {
  const [toggle, setToggle] = useState(false);

  const openPDF = () => {
    const pdfWindow = window.open("resume");
    const title     = "Resume";
    const URI       = "/resume";
    const html      = `
      <html>
        <head>
          <title>${title}</title>
        </head>
        <body style="margin:0">
          <embed width="100%" height="100%" src=${process.env.PUBLIC_URL + '/resume.pdf'} type="application/pdf">
        </body>
      </html>
    `;

    pdfWindow.document.write(html);
    pdfWindow.document.close();
    pdfWindow.history.pushState(null, null, URI);
  };
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
          <a target="_blank" rel="noopener noreferrer" href={process.env.PUBLIC_URL + '/resume.pdf'} variant="primary" onClick={openPDF}>
          Resume
          </a>
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
                <a className="app__navbar-menu-resume"  target="_blank" rel="noopener noreferrer" href={process.env.PUBLIC_URL + '/resume.pdf'} variant="primary" onClick={() => {openPDF();setToggle(false)}}>
                  Resume
                </a>
            </>
            </ul>

          </motion.div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;