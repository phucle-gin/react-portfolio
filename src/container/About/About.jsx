import React from 'react';
import { motion } from 'framer-motion';
import { images } from '../../constants';
import { AppWrap, MotionWrap } from '../../wrapper';
import { TiMediaPlay } from 'react-icons/ti';
import data from '../../constants/data';
import Tilt from 'react-parallax-tilt';
import Lottie from 'lottie-react';
import './About.scss';

const About = () => {
  return (
    <div style={{position: "relative", zIndex:2}}>
      <div className="gradient-02"/>
      <h2 className="head-text">
        <span>About Me</span>
      </h2>
      <div className="app__about-description app__flex">
          <div className="app__about-image-wrapper">
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
        </div>
        <div className="app__about-content">
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
        </div>
      </div>
      <h2 className="head-text">
        I Know That <span>Good Development</span> 
        <br />
        means <span>Good Business</span>
      </h2>
      <div className="app__profile">
        {data.abouts.map((about, item) => (
          <motion.div
            whileInView={{ opacity: 1 }}
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.5, type: 'tween' }}
            className="app__profile-item"
            key={about.title + item}
          >
            <div
              className="app__profile-icon"
            >
              <Lottie animationData={about.imgUrl} />
            </div>
            <h2 className="bold-text" style={{ marginTop: 20 }}>
              {about.title}
            </h2>
            <p className="p-text" style={{ marginTop: 10 }}>
              {about.description}
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default AppWrap(MotionWrap(About, 'app__about'), 'about');
