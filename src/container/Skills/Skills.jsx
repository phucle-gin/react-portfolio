import React, {useState, useEffect} from 'react'
import "./Skills.scss";
import { motion } from 'framer-motion';
import {images} from '../../constants';
import { AppWrap } from '../../wrapper';
const skills =[
  {name: 'React', icon: images.react},
  {name: 'Sass', icon: images.sass},
  {name: 'Git', icon: images.git},
  {name: 'Javascript', icon: images.javascript},
  {name: 'Figma', icon: images.figma},
];
const Skills = () => {
  const [experience, setexperience] = useState([]);
  const [skill, setskill] = useState([]);
  return (
    <>
      <div className='head-text'>Skills & Experience</div>
      <div className='app__skills-container'>
        <motion.div
        className='app__skills-list'>
          {skills.map((skill) => (
            <motion.div
              whileInView={{opacity: [0,1]}}
              transition={{duration: 0.5}}
              className='app__skills-item app_flex'
              key={skill.name}
            >
              <div className='app__flex' style={{backgroundColor: skill.bgColor}}>
                <img src={skill.icon} alt={skill.name}/>
                <p className='p-text'>{skill.name}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </>
  )
}

export default AppWrap(Skills, 'skills');