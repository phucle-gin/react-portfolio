import React, { memo, useEffect, useState } from 'react';

const AppWrap = (Component, idName) => {
  const MemoizedComponent = memo(Component);

  const HOC = () => {
    const [hasMounted, setHasMounted] = useState(false);

    useEffect(() => {
      setHasMounted(true);

      return () => {
        setHasMounted(false);
      };
    }, []);

    return (
      <div id={idName} className="app__container">
        <div className="app__wrapper app__flex">
          {hasMounted ? <MemoizedComponent /> : null}
        </div>
      </div>
    );
  };

  return HOC;
};

export default AppWrap;
