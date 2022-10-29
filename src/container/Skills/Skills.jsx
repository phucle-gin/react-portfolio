
import "./Skills.scss";
import { motion } from 'framer-motion';
import {images} from '../../constants';
import { AppWrap, MotionWrap } from '../../wrapper';
import Data from "../../components/data";
const skills =[
  {name: 'React', icon: images.react},
  {name: 'Sass', icon: images.sass},
  {name: 'Git', icon: images.git},
  {name: 'Javascript', icon: images.javascript},
  {name: 'Figma', icon: images.figma},
];
const Skills = () => {
  return (
    <>
    <h2 className="head-text">Skills & Experiences</h2>

    <div className="app__skills-container">
      <motion.div className="app__skills-list">
        {skills.map((skill) => (
          <motion.div
            whileInView={{ opacity: [0, 1] }}
            transition={{ duration: 0.5 }}
            className="app__skills-item app__flex"
            key={skill.name}
          >
            <div
              className="app__flex"
              style={{ backgroundColor: skill.bgColor }}
            >
              <img src={(skill.icon)} alt={skill.name} />
            </div>
            <p className="p-text">{skill.name}</p>
          </motion.div>
        ))}
      </motion.div>
      <div className="app__skills-exp">
        {Data.map((data) => (
          <motion.div
            className="app__skills-exp-item"
            key={data.experiece}
          >
            <div className="app__skills-exp-year">
              <p className="bold-text">{data.experiece}</p>
            </div>
            <motion.div className="app__skills-exp-works">
              {Data.length && (
                <>        
                  <motion.div
                    whileInView={{ opacity: [0, 1] }}
                    transition={{ duration: 0.5 }}
                    className="app__skills-exp-work"
                    data-tip
                    data-for={data.name}
                    key={data.name}
                  >
                    <div>
                      <h4 className="bold-text">{data.name}</h4>
                      <p className="bold-text">{data.company}</p>
                      <p className='p-text'>{data.description}</p>
                    </div>
                    {/* <div>
                    <h5 className="p-text">{data.name1}</h5>
                      <p className="p-text">{data.company1}</p>
                    </div> */}
                  </motion.div>
                  {/* <ReactTooltip
                    id={work.name}
                    effect="solid"
                    arrowColor="#fff"
                    className="skills-tooltip"
                  >
                 
                  </ReactTooltip> */}
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

