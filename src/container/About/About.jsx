import React from 'react'
import { motion } from 'framer-motion';
import {images} from '../../constants';
import { AppWrap , MotionWrap} from '../../wrapper';
import Tilt from 'react-parallax-tilt';
import { TiMediaPlay } from "react-icons/ti";
import "./About.scss"

const abouts = [
  {title: 'Web Development', description: 'I am a good web developer.', imgUrl:images.about01},
  {title: 'Web Design', description: 'I am a good web developer.', imgUrl:images.about02},
  {title: 'UI/UX', description: 'I am a good web developer.', imgUrl: images.about03},
  {title: 'Front-End', description: 'I am a good web developer.', imgUrl: images.about04},
];
const About = () => {
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
          <p className='p-text'> I enjoy creating things that live on the internet. My interest in web programming began in 2015, when I was introduced to Wix to attempt modifying a button for our class demo website — turns out hacking together a custom button taught me a lot about HTML & CSS!
          </p>
          <p className='p-text'> Here are a few technologies that I've been working with recently:
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
      <div className='app__profile app__flex'>
        {abouts.map((about, index) => (
          <motion.div
          whileInView ={{opacity: 1}}
          whileHover={{scale: 1.1}}
          transition={{duration: 0.5, type:'tween'}}
          className="app__profile-item"
          key={about.title + index}
          >
            <img src={about.imgUrl} alt={about.title} />
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

