import React from 'react'
import { motion } from 'framer-motion';
import { BsTwitter, BsLinkedin} from 'react-icons/bs';
import { FaFacebookF, FaGithub} from 'react-icons/fa';
const container = {
  hidden: { opacity: 1 },
  show: {
    transition: {
      staggerChildren:0.1,
      delayChildren: 0.2,
    }
  }
}
const childprops = {
  hidden: { x: -100},
  show: { 
    x: 0, 
    transition: {
      type: "tween",
      ease :"easeInOut",
      duration: 0.8,
    } 
  }
}
const SocialMedia = () => {
  return (
    <motion.div className='app__social'  variants={container} initial="hidden" animate="show" >
      <motion.div variants={childprops}>
        <FaGithub />
      </motion.div>
      <motion.div variants={childprops}>
        <BsLinkedin />
      </motion.div>
      <motion.div variants={childprops}>
        <FaFacebookF />
      </motion.div>
      <motion.div variants={childprops}>
        <BsTwitter />
      </motion.div>
    </motion.div>
  )
}

export default SocialMedia