import React, {useState, useEffect} from 'react'
import { AiFillEye, AiFillGithub} from 'react-icons/ai';
import {AppWrap} from '../../wrapper';
import { motion } from 'framer-motion';
import "./Work.scss";
import { images } from '../../constants';
const works = [
  {title: 'Modern UI/UX design', description: 'A Modern UI/UX Portfolio Website', imgUrl:images.about01, tags:['UI/UX', 'All']
  },
  {title: 'Modern UI/UX design', description: 'A Modern UI/UX Portfolio Website', imgUrl:images.about01, tags:['UI/UX', 'All']
  },
  {title: 'Modern UI/UX design', description: 'A Modern UI/UX Portfolio Website', imgUrl:images.about01, tags:['UI/UX', 'All']
  },
  {title: 'Modern UI/UX design', description: 'A Modern UI/UX Portfolio Website', imgUrl:images.about01, tags:['UI/UX', 'All']
  },
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

    fetch(query).then((data) => {
      setWorks(data);
      setfilterWorks(data);
    })
  }, [])
  
  const handleWorkFilter = (item) => {
    
  }
  return (
    <>
    <h2 className='head-text'>My Creative <span>Work</span></h2>
    <div className='app_work-filter'>
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
          {filterWorks.map((work,index) => (
            <div className='app__work-item app__flex' key={index}>
              <div className='app__work-img app__flex'>
                <img src="" alt="" />  
              </div>  
            </div>
          ))}
          </motion.div>
    </div>
    </>
  )
}
export default Work