import React, {useState, useEffect} from 'react'
import { motion } from 'framer-motion';
import {images} from '../../constants';
import { AppWrap, MotionWrap } from '../../wrapper';
import "./Testimonial.scss";
import { HiChevronLeft } from 'react-icons/hi';

const Testimonial = () => {
    const [brands, setbrands] = useState([]);
  const [testimonials, tetTestimonials] = useState([]);
  const [currentIndex, setcurrentIndex] = useState(0);
  const handleClick = (index) => {
    setcurrentIndex(index);
  }
  return (
    <>
      {testimonials.length && (
        <>
        <div className='app__testimonial-item app__ flex'>
          <img src={images.react} alt="testimonials"/>
          <div className="app__testimonial-content">
            <p className='p-text'>{}</p>
            <div>
              <h4 className='bold-text'>{}</h4>
              <h5 className='p-text'>{}</h5>   
            </div>
          </div>
        </div>
        <div className='app__testimonial-btns app__flex'>
          <div className='app__flex' onClick={() => handleClick(currentIndex === 0 ? testimonials.length - 1 : currentIndex - 1)}>
          <HiChevronLeft />
          </div>
          <div className='app__flex' onClick={() => handleClick(currentIndex === testimonials.length - 1 ? 0 : currentIndex + 1)}>
          <HiChevronRight />
          </div>
        </div>
        </>
      )}
      <div className='app__testimonials-brands app__flex'>
        {brands.map((brand) => (
          <motion.div
          whileInView={{opacity: [0,1]}}
          transition={{duration: 0.5, type: 'tween'}}
          key={brand._id}
          >
            <img src={brand.images.react} alt={brand.name} />  
          </motion.div>
        ))}
      </div>
    </>
    )
}


export default AppWrap(
  MotionWrap(Testimonial, 'app__testimonial'), 'testimonial', 'app__whitebg'
);
