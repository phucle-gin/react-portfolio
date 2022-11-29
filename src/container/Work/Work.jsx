import React, { useState , useEffect} from 'react';
import { AiFillEye, AiFillGithub } from 'react-icons/ai';
import { motion } from 'framer-motion';
import { images } from '../../constants';
import { AppWrap } from '../../wrapper';
import { usePrefersReducedMotion } from '../../hooks';
import './Work.scss';
const work = [
  {
    title: 'Expense Tracker', 
    description: 'My first react web app made for fun - a single page web app for helping me to manage my expense. I was interesting in learning React, so I found a simple tutorial and it spun into a weekend project.', 
    imgUrl:images.expenseT, 
    tags:['Web App', 'All'],
    tech: ['React', 'Particles js' ],
    projectLink:'https://phucle-gin.github.io/react-expense-tracker/',
    source:'https://github.com/phucle-gin/react-expense-tracker',
  },
  {
    title: 'Queen of My Own Universe', 
    description: 'A life coaching website built with a custom WordPress theme and several plugins allowing Queen of My Own Universe to connect out to its community and live up to its full potential.', 
    imgUrl:images.queenSite, 
    tags:['WordPress', 'All'],
    tech:['Wordpress' , 'WP Plugins','Seo'],
    projectLink:"https://queenofmyownuniverse.com",
    source:"#",
  },
  {
    title: 'Smart Brain', 
    description: 'A smart web app that makes use of an image recognition API and is built with React, Node/Express as a server, and SQL to keep track of data.', 
    imgUrl:images.about01, 
    tags:['Web App', 'All'],
    tech:['React', 'Express Js','SQL', 'Netlify'],
    upcoming:'upcoming'
  },
  {
    title: 'React Portfolio', 
    description: 'My first portfolio website I designed and built in 2021. Developed with a conscious efford to avoid using any superfluous frameworks like Bootstrap.', 
    imgUrl:images.reactSite, 
    tags:['React', 'All'],
    tech: ['React', 'SCSS', 'Netlify','Cloudflare'],
    projectLink:'https://phucle.org',
    source:'https://github.com/phucle-gin/react-portfolio',
  },
];

const Work = () => {
  const [filterWork, setFilterWork] = useState([]);
  const [activeFilter, setActiveFilter] = useState('All');
  const [animateCard, setAnimateCard] = useState({ y: 0, opacity: 1 });
  const prefersReducedMotion = usePrefersReducedMotion();
  // const [expanded, setExpanded] = useState(false);
  // const noOfElements = expanded ? work.length : 3;
  useEffect(() => {
    setFilterWork(work);
}, [prefersReducedMotion]); 
  // card filter based on tags
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
    <motion.div
    whileInView={{ y: [100,50,0], opacity: [0,0,1]}}
    transition={{duration: 0.5}}
    >
      <h2 className="head-text">My Creative <span>Portfolio</span> Section</h2>

      <div className="app__work-filter">
        {['UI/UX', 'WordPress', 'Web App', 'React', 'All'].map((item, index) => (
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
        {/* filterWork.slice(0, noOfElements).map((work, index)  */}
        {filterWork.map((work, index) => (
          <div className="app__work-item app__flex" key={index}>
            <div className="app__work-img app__flex">
              <img src={(work.imgUrl)} alt={work.title} width="340" height="180" loading="lazy"/>
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
          </div>
        ))}
      </motion.div>
    </motion.div>
  );
};

export default AppWrap(Work, 'work',  'app__primarybg')