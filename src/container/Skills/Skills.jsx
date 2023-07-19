import React, {useCallback} from 'react';
import { motion } from 'framer-motion';
import { AppWrap, MotionWrap } from '../../wrapper';
import data from '../../constants/data';
import './Skills.scss';

const Skills = () => {
  const renderSkillItem = useCallback(
    (skill) => (
      <motion.div
        className="app__skills-item app__flex"
        key={skill.name}
      >
          <div className="app__flex">
            <img src={skill.icon} alt={skill.name} width="45" height="45" loading="lazy" />
          </div>
          <p className="p-text-sm">{skill.name}</p>
      </motion.div>
    ),
    []
  );

  const renderExperienceItem = useCallback(
    (job) => (
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
                      className="app__skills-exp-work"
                      data-for={job.name}
                      key={job.name}
                    >
                      <div>
                        <h3 className="bold-text">{job.name}</h3>
                        <h4 className="bold-text">{job.company}</h4>
                        <p className="p-text">{job.description}</p>
                      </div>
                    </motion.div>
                  </>
                )}
              </motion.div>
            </motion.div>
    ),[]);
  return (
    <> 
      <div className="gradient-03" />
      <h2 className="head-text"><span>Skills & Experiences</span></h2>
      <div className="app__skills-container">
        <motion.div className="app__skills-list">
          {data.skills.map((renderSkillItem))}
        </motion.div>
        <div className="app__skills-exp">
        {data.jobs.map(renderExperienceItem)}
        </div>
      </div>
    </>
  );
};

export default AppWrap(MotionWrap(Skills, 'app__skills'), 'skills', 'app__bg-gradient');