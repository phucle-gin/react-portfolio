import React, {useEffect} from 'react'
import { motion } from 'framer-motion';
import {images} from '../../constants';
import { AppWrap , MotionWrap} from '../../wrapper';
import Tilt from 'react-parallax-tilt';
import { usePrefersReducedMotion } from '../../hooks';
import { TiMediaPlay } from "react-icons/ti";
import Lottie from "lottie-react";
import "./About.scss"

const abouts = [
  {title: 'Web Development', description: 'HTML/CSS, JavaScript Animation, WordPress, Responsive Website.', imgUrl:images.aboutIcon1, 
  color:'linear-gradient(to left top, #f3f9ff, #f3f9fe, #E6EFF9 79.74%, #E6EFF9 64.16%, #C2DAF2 98.23%)'},
  {title: 'UI/UX', description: 'User Flow, Wireframing, Prototyping, App Design.', imgUrl:images.aboutIcon2, 
  color: "linear-gradient(to left top, #f3f9ff, #f3f9fe,  #E6E6F9 79.74%, #E6E6F9 64.16%, #C2C2F2 98.23%)"},
  {title: 'Methodologies', description: 'Agile, Waterfall, Lean IT, Scrum.', imgUrl: images.aboutIcon3, 
  color: "linear-gradient(to left top, #f3f9ff, #f3f9fe, #F9F0E6 79.74%, #F9F0E6 64.16%, #F2DAC2 98.23%)"},
  {title: 'Tools', description: 'Version control, Api Testing, Browser Developer tools.', imgUrl: images.aboutIcon4, 
  color: "linear-gradient(to left top, #f3f9ff, #f3f9ff, #F8EAFC 79.74%, #F8EAFC 64.16%, #EFCDF7 98.23%)"},
];
const About = () => {
  const prefersReducedMotion = usePrefersReducedMotion();

  useEffect(() => {
    if (prefersReducedMotion) {
      return;
    }
  });
  return (
    <>
      <h2 className='head-text'><span>About Me</span></h2>
      <div className='app__about-description app__flex'>
        <Tilt className="app__tilter">
          <div className='app__tilter-about'>
                <img className='app__about-image' src={images.about04} alt="phuc_image" width="300" height="415" sizes="(min-width: 300px) 300px, 100vw"/> 
          </div>
        </Tilt>
        <div className='app__about-content'>
          <p className='p-text'>Hello! My name is Phuc and I'm a software engineer focusing on building exceptional digital experiences.
          </p>            
          <p className='p-text'> I enjoy creating things that live on the internet. My interest in web programming began in 2015, when I was introduced to Wix to attempt modifying a button for lab exercises — turns out hacking together a custom button taught me a lot about HTML & CSS!
          </p>
          <p className='p-text'>I'm currently working on different side projects that could aid me develop my skill sets. Here are a few technologies that I've been working with recently:
          </p>
          <ul className="app__list-skills">
          {['JavaScript', 'React', 'Node.js', 'WordPress', 'TypeScript', 'MongoDB'].map((item) => (
            <li className="p-text" key={`link-${item}`}>
                  <TiMediaPlay/> {item}
            </li>
          ))}
          </ul>
        </div>
      </div>
      <h2 className='head-text'>I Know That <span>Good Developement</span>
      <br />
      means <span>Good Business</span>
      </h2>
      <div className='app__profile'>
        {abouts.map((about, index) => (
          <motion.div
          whileInView ={{opacity: 1}}
          whileHover={{scale: 1.1}}
          transition={{duration: 0.5, type:'tween'}}
          className="app__profile-item"
          key={about.title + index}
          >
            {/* <img src={about.imgUrl} alt={about.title} /> */}
            <div className='app__profile-icon'   style={{
                backgroundImage: `${about.color}`,
              }}>
                <Lottie animationData={about.imgUrl} />
            </div>
            <h2 className='bold-text' style={{marginTop: 20}}>{about.title}</h2>
            <p className='p-text' style={{marginTop: 10}}>{about.description}</p>
            </motion.div>
        ))}
      </div>
    </>
  )
}

export default AppWrap(
  MotionWrap(About, 'app__about'), 'about', 'app__whitebg'
)

