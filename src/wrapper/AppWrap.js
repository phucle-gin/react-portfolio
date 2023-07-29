import React, { memo } from 'react';

const AppWrap = (Component, idName) => {
  const MemoizedComponent = memo(Component);

  const HOC = () => (
    <div id={idName} className="app__container">
      <div className="app__wrapper app__flex">
        <MemoizedComponent />
      </div>
    </div>
  );

  return HOC;
};

export default AppWrap;
