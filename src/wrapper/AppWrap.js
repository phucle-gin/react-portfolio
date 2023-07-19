import React, { memo } from 'react';

const AppWrap = (Component, idName, classNames) => {
  const MemoizedComponent = memo(Component);

  const HOC = () => (
    <div id={idName} className={`app__container ${classNames}`}>
      <div className="app__wrapper app__flex">
        <MemoizedComponent />
      </div>
    </div>
   
  );

  return HOC;
};

export default AppWrap;
