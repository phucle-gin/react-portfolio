import React from 'react'
import { motion } from 'framer-motion';
import { FaFacebookF, FaGithub, FaTwitter, FaLinkedinIn} from 'react-icons/fa';
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
  key:"icon",
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
const socialMedia = [
  {
    name: 'GitHub',
    url: 'https://github.com/phucle-gin',
    Icon: FaGithub,
  },
  {
    name: 'Linkedin',
    url: 'https://github.com/phucle-gin',
    Icon: FaLinkedinIn,
  },
  {
    name: 'Facebook',
    url: 'https://github.com/phucle-gin',
    Icon: FaFacebookF,
  },
  {
    name: 'Twitter',
    url: 'https://github.com/phucle-gin',
    Icon: FaTwitter,
  },
]
const SocialMedia = () => {
  return (
    <motion.div className='app__social'  variants={container} initial="hidden" animate="show" >
        {socialMedia && socialMedia.map(social => {
           const { name, url, Icon } = social;
           return(
                <motion.a href={url} aria-label={name} target="_blank" rel="noreferrer" variants={childprops}>
                  <Icon />
                </motion.a>
           )})}
    </motion.div>
  )
}

export default SocialMedia