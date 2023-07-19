import React, { memo } from 'react';
import { FaFacebookF, FaGithub, FaTwitter, FaLinkedinIn} from 'react-icons/fa';

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
    <div className='app__social'>
      <ul style={{listStyle:"none"}}>
      {socialMedia && socialMedia.map(social => {
           const { name, url, Icon } = social;
           return(
              <li key={name}>
                  <a  href={url} aria-label={name} target="_blank" rel="noopener noreferrer">
                    <Icon />
                  </a>
              </li>
           )})}
      </ul>
    </div>
  )
}

export default memo(SocialMedia);
