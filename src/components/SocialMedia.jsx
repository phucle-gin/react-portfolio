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
const items = {
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
    url: 'https://linkedin.com/in/phucnguyenhoangle',
    Icon: FaLinkedinIn,
  },
  {
    name: 'Facebook',
    url: 'https://www.facebook.com/Ginttd/',
    Icon: FaFacebookF,
  },
  {
    name: 'Twitter',
    url: 'https://twitter.com/lnhphuc28',
    Icon: FaTwitter,
  },
]

const SocialMedia = () => {
  return (
    <motion.div className='app__social'  variants={container} initial="hidden" animate="show" >
      <ul style={{listStyle:"none"}}>
      {socialMedia && socialMedia.map(social => {
           const { name, url, Icon } = social;
           return(
              <li key={name}>
                  <motion.a  href={url} aria-label={name} target="_blank" rel="noopener noreferrer" variants={items}>
                    <Icon />
                  </motion.a>
              </li>
           )})}
      </ul>
    
    </motion.div>
  )
}

export default SocialMedia