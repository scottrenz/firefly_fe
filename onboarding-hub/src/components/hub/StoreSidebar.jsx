import React from 'react';
import Firefly from '../../assets/firefly.png';

const StoreSidebar = props => {


  return (
    <aside className='sidebar'>
      <div className='game'>
        {/* Image for project firefly, clicking on it should redirect you to the game page, which is the only store item at the moment */}
        <h2 className='characters-header'>Characters</h2>
        <div className='character'>
          {/* Firefly image */}
          <h3 className='character-name'>Timmy</h3>
        </div>
        <div className='character'>
          {/* Firefly image */}
          <h3 className='character-name'>John</h3>
        </div>
        <div className='character'>
          {/* Firefly image */}
          <h3 className='character-name'>Linda</h3>
        </div>
      </div>
    </aside>
  );
};

export default StoreSidebar;