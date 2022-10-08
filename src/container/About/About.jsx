import React from 'react'
import { motion } from 'framer-motion';
import {images} from '../../constants';
import { AppWrap , MotionWrap} from '../../wrapper';
import Tilt from 'react-parallax-tilt';
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
      <div className='app__about-owner app__flex'>
        <Tilt 
        className="app__tilter"
        >
          <figure className='app__tilter-about'>
                <img className='app__about-image' src={images.about04} alt="owner_image" width="300" height="415" sizes="(min-width: 300px) 300px, 100vw"/> 
                  {/* <figcaption className="app__tilter-caption">
                    <h3 className='app__tilter-title'>Phuc Le</h3>
                    <p className='app__tilter-description'>Viet Nam</p>
                  </figcaption>
                  <svg className='app__tilter-deco app__deco-lines' viewBox="0 0 300 415">
                    <path d="M20.5,20.5h260v375h-260V20.5z" />
                  </svg> */}
  

          </figure>
        </Tilt>
          <div className='app__about-content'>
            <h2 className='head-text' >
            About Me</h2>
            <p className='p-text'> Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eum pariatur molestiae quas soluta accusamus asperiores expedita. Commodi doloremque quos accusamus quaerat, debitis, autem architecto quibusdam dolorum expedita ipsum similique magni.
            
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eum pariatur molestiae quas soluta accusamus asperiores expedita. Commodi doloremque quos accusamus quaerat, debitis, autem architecto quibusdam dolorum expedita ipsum similique magni. 
            <br/>
            Here are a few technologies that I've been working with recently:
            </p>
            <li className='p-text'>
              Javasript
              React 
              Node.js
              WordPress
              SCSS
              Express.js
            </li>
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

