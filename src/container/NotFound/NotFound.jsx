import React from 'react';
import {Link} from 'react-router-dom';
import {images} from '../../constants';
import {motion} from 'framer-motion';
import { SocialMedia } from '../../components';
import { MotionWrap } from '../../wrapper';
import "./NotFound.scss";

const AppWrap = (Component, idName, classNames) => function HOC() {
  return (
    <div id={idName} className={`app__container ${classNames}`}>
      <SocialMedia />
      <div className="app__wrapper app__flex">
        <Component />

        <div className="copyright">
          <p className="p-text">@2021 PHUC LE</p>
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
          <h2>Sorry</h2>
          <p>Page Not found</p>
            <div>
            <Link className='app__custom-link' to="/">Go Home</Link>
          </div>
        </div>
      </>
    )
  };

export default AppWrap( 
  MotionWrap(NotFound, 'app__not-found'), 'notFound', 'app__whitebg'
  )
