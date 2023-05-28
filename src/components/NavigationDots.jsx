import React, { memo } from 'react';
const NavigationDots = ({active}) => {
  return (
    <div className='app__navigation'>
        {['home', 'about', 'work', 'skills','contact'].map((item, nav) => (
                  <a 
                  href={`#${item}`} 
                  key={item + nav}
                  className='app__navigation-dot'
                  style={active === item ? {backgroundColor: '#9A99E9'} :{backgroundColor: '#99C1E9'}}
                  > </a>
              ))}
    </div>
  )
}

export default memo(NavigationDots);
