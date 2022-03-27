import React, {useState, useEffect} from 'react'
import { motion } from 'framer-motion';
import {images} from '../../constants';
import { AppWrap, MotionWrap } from '../../wrapper';
import "./Testimonial.scss";
const [brands, setbrands] = useState([]);
const [testimonials, tetTestimonials] = useState([]);
const [currentIndex, setcurrentIndex] = useState([]);
const Testimonial = () => {
  return (
    <div>Testimonial</div>
  )
}


export default AppWrap(
  MotionWrap(Testimonial, 'app__testimonial'), 'testimonial', 'app__whitebg'
)
