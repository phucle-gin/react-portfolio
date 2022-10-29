import React from 'react'
import { BsTwitter, BsLinkedin} from 'react-icons/bs';
import { FaFacebookF, FaGithub} from 'react-icons/fa';
const SocialMedia = () => {
  return (
    <div className='app__social'>
      <div>
        <FaGithub />
      </div>
      <div>
        <BsLinkedin />
      </div>
      <div>
        <FaFacebookF />
      </div>
      <div>
        <BsTwitter />
      </div>
    </div>
  )
}

export default SocialMedia