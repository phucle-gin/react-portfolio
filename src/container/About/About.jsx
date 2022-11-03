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
      <div className='app__about-owner app__flex'>
        <Tilt 
        className="app__tilter"
        >
          <figure className='app__tilter-about'>
                <img className='app__about-image' src={images.about04} alt="owner_image" width="300" height="415" sizes="(min-width: 300px) 300px, 100vw"/> 

          </figure>
        </Tilt>
          <div className=' app__about-content'>
            <h2 className='head-text' >
            About Me</h2>
            <p className=' p-text'> Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eum pariatur molestiae quas soluta accusamus aspeim dolorum expedita ipsum similique magni.
            </p>            
            <p className='p-text'> Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eum pariatur molestiae quas soluta accusamus asperiores expedita. Commodi doloremque quos accusamus quaerat, debitis, autem architecto quibusdam dolorum expedita ipsum similique magni. 
            </p>
            <p className='p-text'> Here are a few technologies that I've been working with recently:
            </p>
            <ul className="app__list-skills">
            {['JavaScript', 'React', 'Node.js', 'WordPress', 'TypeScript', 'Ruby'].map((item) => (
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

