import React from 'react';
import {Link} from 'react-router-dom';
import { MotionWrap } from '../../wrapper';
import Lottie from "lottie-react";
import lonely_notfound from '../../lonely_404.json'
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
    return (
      <>
        <div className='app__not-found app__flex'>
          <div className='app__not-found-image'>
          <Lottie animationData={lonely_notfound}/>
          </div>
          <Link className='app__custom-link' to="/">Go Home</Link>
        </div>

      </>
    )
  };

export default AppWrap( 
  MotionWrap(NotFound, 'app__not-found'), 'notFound', 'app__whitebg'
  )
