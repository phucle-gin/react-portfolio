import React, { useEffect} from 'react';
import "./Skills.scss";
import { motion } from 'framer-motion';
import { AppWrap, MotionWrap } from '../../wrapper';
import data from "../../constants/data";
import { usePrefersReducedMotion } from '../../hooks';
const Skills = () => {
  const prefersReducedMotion = usePrefersReducedMotion();

  useEffect(() => {
    if (prefersReducedMotion) {
      return;
    }
  });
  return (
    <>
    <h2 className="head-text">Skills & Experiences</h2>

    <div className="app__skills-container">
      <motion.div className="app__skills-list">
        {data.skills.map((skill) => (
          <motion.div
            whileInView={{ opacity: [0, 1] }}
            transition={{ duration: 0.5 }}
            className="app__skills-item app__flex"
            key={skill.name}
          >
            <div
              className="app__flex"
            >
              <img src={(skill.icon)} alt={skill.name} width="45" height="45" loading="lazy"/>
            </div>
            <p className="p-text-sm">{skill.name}</p>
          </motion.div>
        ))}
      </motion.div>
      <div className="app__skills-exp">
        {data.jobs.map((job) => (
          <motion.div
            className="app__skills-exp-item"
            key={job.experience}
          >
            <div className="app__skills-exp-year">
              <p className="bold-text">{job.experience}</p>
            </div>
            <motion.div className="app__skills-exp-works">
              {job && (
                <>        
                  <motion.div
                    whileInView={{ opacity: [0, 1] }}
                    transition={{ duration: 0.5 }}
                    className="app__skills-exp-work"
                    data-for={job.name}
                    key={job.name}
                  >
                    <div>
                      <h3 className="bold-text">{job.name}</h3>
                      <h4 className="bold-text">{job.company}</h4>
                      <p className='p-text'>{job.description}</p>
                    </div>
               
                  </motion.div>
 
                </>
              )}
            </motion.div>
          </motion.div>
        ))}
      </div>
    </div>
  </>
  )
}

export default AppWrap(
  MotionWrap(Skills, 'app__skills'), 'skills', 'app__whitebg'
)

