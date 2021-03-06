import React, { useState , useEffect} from 'react';
import { AiFillEye, AiFillGithub } from 'react-icons/ai';
import { motion } from 'framer-motion';
import { images } from '../../constants';
import { AppWrap } from '../../wrapper';
import './Work.scss';
const work = [
  {
    title: 'Modern UX/UI Design', 
    description: 'About the scope of the project ,In terms of the marketing aspect of this project, we are aiming to create an ideal client profile for Queen of my Own Universe', 
    imgUrl:images.about01, 
    tags:['UI/UX', 'All']
  },
  {
    title: 'Web Development', 
    description: 'I am a good web developer. About the scope of the project ,In terms of the marketing aspect of this project, we are aiming to create an ideal client profile for Queen of my Own Universe', 
    imgUrl:images.about01, 
    tags:['Web App', 'All']
  },
  {
    title: 'Mobile Development', 
    description: 'I am a good web developer.', 
    imgUrl:images.about01, 
    tags:['Mobile App', 'All'],
  },
  {
    title: 'Advanced React JS Website', 
    description: 'I am a good web developer.', 
    imgUrl:images.about01, 
    tags:['React JS', 'All'],
    source:'#'
  },
];

const Work = () => {
  const [filterWork, setFilterWork] = useState([]);
  const [activeFilter, setActiveFilter] = useState('All');
  const [animateCard, setAnimateCard] = useState({ y: 0, opacity: 1 });
  useEffect(() => {
    setFilterWork(work);
}, []); 
  const handleWorkFilter = (item) => {
    setActiveFilter(item);
    setAnimateCard([{ y: 100, opacity: 0 }]);

    setTimeout(() => {
      setAnimateCard([{ y: 0, opacity: 1 }]);
      
        if (item === 'All') {
          setFilterWork(work);
        } else {
          setFilterWork(work.filter((work) => work.tags.includes(item)));
        }
      
    }, 500);
  };
  return (
    <>
      <h2 className="head-text">My Creative <span>Portfolio</span> Section</h2>

      <div className="app__work-filter">
        {['UI/UX', 'Web App', 'Mobile App', 'React JS', 'All'].map((item, index) => (
          <div
            key={index}
            onClick={() => handleWorkFilter(item)}
            className={`app__work-filter-item app__flex p-text ${activeFilter === item ? 'item-active' : ''}`}
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
        {filterWork.map((work, index) => (
          <div className="app__work-item app__flex" key={index}>
            <div
              className="app__work-img app__flex"
            >
              <img src={(work.imgUrl)} alt={work.name} />

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
                {work.source !== "#" ?
                  <a href={work.souce} target="_blank" rel="noreferrer">
                    <motion.div
                      whileInView={{ scale: [0, 1] }}
                      whileHover={{ scale: [1, 0.90] }}
                      transition={{ duration: 0.25 }}
                      className="app__flex"
                    >
                      <AiFillGithub />
                    </motion.div>
                  </a>
                : null}
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
    </>
  );
};

export default AppWrap(Work, 'work')