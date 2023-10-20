// Loading.jsx
import React from 'react';
import { ProgressBar } from 'react-loader-spinner';

const Loading = () => {
  return (
    <div className="loader-wrapper">
      <ProgressBar
        height="100"
        width="100"
        ariaLabel="progress-bar-loading"
        wrapperStyle={{}}
        wrapperClass="progress-bar-wrapper"
        borderColor = '#8e8de6'
        barColor = '#8180E3'
      />
        <p className='bold-text'>Just a sec, the hamsters are powering up the server. 🐹🐹</p>
    </div>

  );
};

export default Loading;
