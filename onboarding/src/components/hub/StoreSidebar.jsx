import React from 'react';


const StoreSidebar = props => {


  return (
    <aside className='sidebar'>
      <div className='game'>
        {/* Image for project firefly, clicking on it should redirect you to the game page, which is the only store item at the moment */}
        <div className='firefly'>Firefly</div>
      </div>
    </aside>
  );
};

export default StoreSidebar;