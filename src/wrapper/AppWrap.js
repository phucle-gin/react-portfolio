import React, { memo } from 'react';
import { NavigationDots, SocialMedia } from '../components';

const AppWrap = (Component, idName, classNames) => {
  const MemoizedComponent = memo(Component);

  const HOC = () => (
    <div id={idName} className={`app__container ${classNames}`}>
      <SocialMedia />
      <div className="app__wrapper app__flex">
        <MemoizedComponent />
        <div className="copyright">
          <p className="p-text">@2021 PHUC LE</p>
          <p className="p-text">All rights reserved</p>
        </div>
      </div>
      <NavigationDots active={idName} />
    </div>
  );

  return HOC;
};

export default AppWrap;
