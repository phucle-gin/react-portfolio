import React, { useState , useEffect} from 'react';
import { AiFillEye, AiFillGithub } from 'react-icons/ai';
import { motion } from 'framer-motion';
import { AppWrap } from '../../wrapper';
import data from "../../constants/data";
import { usePrefersReducedMotion } from '../../utils';

import './Work.scss';
const Work = () => {
  const [filterWork, setFilterWork] = useState([]);
  const [activeFilter, setActiveFilter] = useState('All');
  const [animateCard, setAnimateCard] = useState({ y: 0, opacity: 1 });
  const prefersReducedMotion = usePrefersReducedMotion();
  // const [showLinks,setShowLinks] = useState(false);

  useEffect(() => {
    setFilterWork(data.work);
  }, [prefersReducedMotion]); 
  // card filter based on tags
  const handleWorkFilter = (item) => {
    setActiveFilter(item);
    setAnimateCard([{ y: 100, opacity: 0 }]);

    setTimeout(() => {
      setAnimateCard([{ y: 0, opacity: 1 }]);
      
        if (item === 'All') {
          setFilterWork(data.work);
        } else {
          setFilterWork(data.work.filter((work) => work.tags.includes(item)));
        }
      
    }, 500);
  };

  return (
    <motion.div
    initial={{opacity:0}}
    whileInView={{ y: [100,50,0], opacity: [0,0,1]}}
    transition={{duration: 0.5}}
    >
      <h2 className="head-text">My Creative <span>Portfolio</span> Section</h2>

      <div className="app__work-filter ">
        {['UI/UX', 'WordPress', 'Web App', 'React Web', 'All'].map((item, itemFilter) => (
          <div
            key={itemFilter}
            onClick={() => handleWorkFilter(item)}
            className={`app__work-filter-item app__flex p-text  ${activeFilter === item ? 'item-active' : ''}`}
          >
            {item}
          </div>
        ))}
      </div>

      <motion.div
        animate={animateCard}
        transition={{ duration: 0.5, delayChildren: 0.5 }}
        className="app__work-work"
      >
        {filterWork.map((work, filterIndex) => (
          <motion.div
          whileInView={{ opacity: 1 }}
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.5, type: 'tween' }}
          className="app__work-item  app__flex" key={filterIndex}
          >
            <div className="app__work-img app__flex">
              <img src={(work.imgUrl)} alt={work.title} width="340" height="170" loading="lazy"/>
            {work.upcoming !== "upcoming" ?
              <motion.div
                whileHover={{ opacity: [0, 1] }}
                transition={{ duration: 0.25, ease: 'easeInOut', staggerChildren: 0.5 }}
                className="app__work-hover app__flex"
              >
                <a href={work.projectLink} target="_blank" rel="noreferrer" aria-label={work.title}>
                  <motion.div
                    whileInView={{ scale: [0, 1] }}
                    whileHover={{ scale: [1, 0.90] }}
                    transition={{ duration: 0.25 }}
                    className="app__flex"
                  >
                    <AiFillEye />
                  </motion.div>
                </a>
                {work.source !== "#" ?
                  <a href={work.source} target="_blank" rel="noreferrer" aria-label={work.title}>
                    <motion.div
                      whileInView={{ scale: [0, 1] }}
                      whileHover={{ scale: [1, 0.90] }}
                      transition={{ duration: 0.25 }}
                      className="app__flex"
                    >
                      <AiFillGithub />
                    </motion.div>
                  </a>
                : ''}
              </motion.div>
            : <motion.div
                whileHover={{ opacity: [0, 1] }}
                transition={{ duration: 0.25, ease: 'easeInOut', staggerChildren: 0.5 }}
                className='app__work-hover app__flex'>
                <p className='p-text'>Coming Soon...</p>
              </motion.div>}
            </div>
            <div className="app__work-content app__flex">
              <h3 className="bold-text">{work.title}</h3>
              <p className="p-text" style={{padding: 10 }}>{work.description}</p>
              <div className="app__work-tag app__flex">
                <p className="p-text">{work.tags[0]}</p>
              </div>
              <ul className='app__flex app__work-tech-list'>
                  {work.tech.map((techItem, idx) => {
                      return <li className='p-text-sm' key={idx}>{techItem}
                      </li> 
                  })}
              </ul>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
};

export default AppWrap(Work, 'work')