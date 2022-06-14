import React, {useState, useEffect} from 'react'
import { motion } from 'framer-motion';
import {images} from '../../constants';
import { AppWrap, MotionWrap } from '../../wrapper';
import "./Testimonial.scss";
import { HiChevronLeft, HiChevronRight  } from 'react-icons/hi';
const testimonial =[
  {name: 'Phoenix', feedback:'He is an amazing developer', icon: images.react},
  {name: 'Aryan', icon: images.sass},
  {name: 'Naveen', icon: images.git},
];

const Testimonial = () => {
    const [brands, setbrands] = useState([]);
  const [testimonials, tetTestimonials] = useState([]);
  const [currentIndex, setcurrentIndex] = useState(0);
  const handleClick = (index) => {
    setcurrentIndex(index);
  }
  const test = testimonial[currentIndex]; 
  return (
    <>
      {testimonial.length && (
        <>
        <div className='app__testimonial-item app__ flex'>
              <img src={test.icon} alt="testimonials"/>
              <div className="app__testimonial-content">
                <p className='p-text'>{test.feedback}</p>
                <div>
                  <h4 className='bold-text'>{test.name}</h4>
                </div>
              </div>
          </div>
          <div className='app__testimonial-btns app__flex'>
            <div className='app__flex' onClick={() => handleClick(currentIndex === 0 ? testimonial.length - 1 : currentIndex - 1)}>
            <HiChevronLeft />
            </div>
            <div className='app__flex' onClick={() => handleClick(currentIndex === testimonial.length - 1 ? 0 : currentIndex + 1)}>
            <HiChevronRight />
            </div>
          </div>
        </>
      )}
      <div className='app__testimonial-brands app__flex'>
        {brands.map((brand) => (
          <motion.div
          whileInView={{opacity: [0,1]}}
          transition={{duration: 0.5, type: 'tween'}}
          key={brand._id}
          >
            <img src={brand.img} alt={brand.name} />  
          </motion.div>
        ))}
      </div>
    </>
    )
}


export default AppWrap(
  MotionWrap(Testimonial, 'app__testimonial'), 'testimonial', 'app__primarybg'
);
