// Loading.jsx
import React from 'react';
import { SyncLoader } from 'react-spinners';

const override = {
  position: 'fixed',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  zIndex: '1',
};

const Loading = () => {
  return (
    <div className="loader-wrapper">
      <SyncLoader color={'var(--secondary-color)'} size={25} margin={10} css={override} />
    </div>
  );
};

export default Loading;
