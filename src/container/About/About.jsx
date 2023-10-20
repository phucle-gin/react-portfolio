import React  from 'react';
import { images } from '../../constants';
import { AppWrap, MotionWrap } from '../../wrapper';
import { AnimatePresence, motion } from 'framer-motion';
import { textVariants, fadeIn, staggerContainer, goUp } from '../../utils/motion'
import { TiMediaPlay } from 'react-icons/ti';
import data from '../../constants/data';
import Tilt from 'react-parallax-tilt';
import './About.scss';

const About = () => {
  
  return (
    <AnimatePresence>
    <div style={{position: "relative", zIndex:2}}>
      <div className="gradient-02"/>
      <motion.h2 
        className="head-text"
        variants={textVariants}
        initial="hidden"
        animate="show"
      >
        <span>About Me</span>
      </motion.h2>
        <motion.div 
          className="app__about-description app__flex" 
          variants={staggerContainer(0.1,0.2)}
          initial="hidden"
          animate="show" 
        >
            <motion.div className="app__about-image-wrapper" variants={fadeIn('right', 'tween', 0.2, 1.5)}>
              <div className="app__about-image">
                <Tilt>
                  <img
                    src={images.headshot}
                    width="300"
                    height="400"
                    alt="app__headshot"
                    loading="lazy"
                  />
                </Tilt>
              </div>
          </motion.div>
          <motion.div className="app__about-content" variants={fadeIn('left', 'tween', 0.2, 1.5)}>
            {data.aboutContent.map((content) => (
              <p key={content.id} className="p-text">
                {content.text}
              </p>
            ))}
            <div className="app__list-skills">
              <ul>
                {['JavaScript', 'React', 'Node.js', 'Next.js', 'SQL', 'Redux', 'Webpack', 'Netlify', 'REST'].map((item) => (
                  <li className="p-text" key={`link-${item}`}>
                    <TiMediaPlay /> {item}
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        </motion.div>
      <motion.h3 
          className="head-text-custom"
          >
        I Know That <span>Good Development</span> 
        <br />
        means <span>Good Business</span>
      </motion.h3>
      <motion.div 
          className="app__profile"   
          initial="hidden"
          animate="show"
          variants={staggerContainer(0.1, 0.2)}     
        >
        {data.abouts.map((about, item) => (
          <motion.div
            className="app__profile-item"
            key={about.title + item}
            variants={staggerContainer(0.1,0.2)}
          >
            <motion.div 
              className='app__profile-item-container'
              variants={goUp}
            >
              <div className="app__profile-icon">
                <img
                    src={about.imgUrl}
                    width="50"
                    height="50"
                    alt={about.title}
                    loading="lazy"
                  />
              </div>
              <h2 className="bold-text" style={{ marginTop: 20 }}>
                {about.title}
              </h2>
              <p className="p-text" style={{ marginTop: 10 }}>
                {about.description}
              </p>
            </motion.div>
          </motion.div>
        ))}
      </motion.div>
    </div>
    </AnimatePresence>

  );
};

export default AppWrap(MotionWrap(About, 'app__about'), 'about');
