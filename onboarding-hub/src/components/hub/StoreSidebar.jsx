import React from 'react';
import Firefly from '../../assets/firefly.png';

const StoreSidebar = props => {


  return (
    <aside className='sidebar'>
      <div className='game'>
        {/* Image for project firefly, clicking on it should redirect you to the game page, which is the only store item at the moment */}
        <div className='firefly'><img src={Firefly} alt='Firefly' /></div>
      </div>
    </aside>
  );
};

export default StoreSidebar;