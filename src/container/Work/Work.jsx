import React, {useState, useEffect} from 'react'
import { AiFillEye, AiFillGithub} from 'react-icons/ai';
import {AppWrap} from '../../wrapper';
import { motion } from 'framer-motion';
import "./Work.scss";
import { images } from '../../constants';
const work = [
  {title: 'Modern UI/UX design', description: 'A Modern UI/UX Portfolio Website', imgUrl:images.about01, tags:['UI/UX', 'All']
  },
];

const Work = () => {
  const [activeFilter, setActiveFilter] = useState('All');
  const [animateCard, setAnimateCard] = useState({y : 0, opacity: 1});
  const [works, setWorks] = useState([]);
  const [filterWorks, setfilterWorks] = useState([]);
  useEffect(() => {
    const query = '*[_type == "works"]';
  }, [])
  
  const handleWorkFilter = (item) => {
    
  }
  return (
    <>
    <h2 className='head-text'>My Creative <span>Work</span></h2>
    <div className='app__work-filter'>
      {['UI/UX','Web App','Mobile App', 'React JS','All'].map((item,index) => (
        <div
        key= {index}
        onClick={() => handleWorkFilter(item)}
        className={`app__work-filter-item app__flex p-text ${activeFilter === item ? 'item-active' :''}`}
        >
          {item}
          </div>
      ))}
          <motion.div
          animate={animateCard}
          transition={{duration: 0.5, delayChildren: 0.5}}
          className='app__work-work'
          >
          {work.map((work,index) => (
            <div className='app__work-item app__flex' key={index}>
              <div className='app__work-img app__flex'>
                <img src={work.imgUrl} alt="work.name" />  
                
              <motion.div
                whileHover={{ opacity: [0, 1] }}
                transition={{ duration: 0.25, ease: 'easeInOut', staggerChildren: 0.5 }}
                className="app__work-hover app__flex"
              >
                <a href={work.projectLink} target="_blank" rel="noreferrer">

                  <motion.div
                    whileInView={{ scale: [0, 1] }}
                    whileHover={{ scale: [1, 0.90] }}
                    transition={{ duration: 0.25 }}
                    className="app__flex"
                  >
                    <AiFillEye />
                  </motion.div>
                </a>
                <a href={work.codeLink} target="_blank" rel="noreferrer">
                  <motion.div
                    whileInView={{ scale: [0, 1] }}
                    whileHover={{ scale: [1, 0.90] }}
                    transition={{ duration: 0.25 }}
                    className="app__flex"
                  >
                    <AiFillGithub />
                  </motion.div>
                </a>
              </motion.div>
              </div>  

                <div className="app__work-content app__flex">
                <h4 className="bold-text">{work.title}</h4>
                <p className="p-text" style={{ marginTop: 10 }}>{work.description}</p>

                <div className="app__work-tag app__flex">
                  <p className="p-text">{work.tags[0]}</p>
                </div>
              </div>
            </div>
          ))}

          </motion.div>
          
    </div>
    </>
  )
}
export default Work