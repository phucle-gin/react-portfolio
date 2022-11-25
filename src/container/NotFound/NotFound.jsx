import React, {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';
import { MotionWrap } from '../../wrapper';
import Lottie from "lottie-react";
import {images} from '../../constants';
import RingLoader from "react-spinners/RingLoader";
import { usePrefersReducedMotion } from '../../hooks';
import "./NotFound.scss";


const AppWrap = (Component, idName, classNames) => function HOC() {
  return (
    <div id={idName} className={`app__container ${classNames}`}>
      <div className="app__wrapper app__flex">
        <Component />

        <div className="app__notfound-copyright">
              <p className="p-text"> @2021 PHUC LE</p>
              <p className="p-text">All rights reserved</p>
          </div>
      </div>
    </div>
  );
};

const NotFound = () => {
  const prefersReducedMotion = usePrefersReducedMotion();
  const override: CSSProperties = {
    position: "fixed", top: "50%", left: "50%", transform: "translate(-50%, -50%)", 
  };

  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true)
    setTimeout(() => {
      setLoading(true)
    }, 2000)
  },[prefersReducedMotion])
    return (
      <>
        <div className='app__not-found app__flex'>
          <div className='app__not-found-image'>
            <Lottie animationData={images.lonely_notfound}/>
          </div>
            {!loading ?  (
              <RingLoader
              color={"#80b1e3"}
              loading={loading}
              size={100}
              cssOverride={override}
              />): (
                <Link className='app__custom-link' to='/' onClick={loading}>Go Home</Link>
              )}
       
       </div>
      </>
    )
  };

export default AppWrap( 
  MotionWrap(NotFound, 'app__not-found'), 'notFound', 'app__whitebg'
  )
