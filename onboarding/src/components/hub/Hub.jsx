import React, { useState } from 'react';
import { Link } from 'react-router';
import Nav from '../nav';
import StoreSideBar from './StoreSidebar';
import Footer from '../Footer';

const ProfileRoute = '/dashboard';

const Hub = props => {
  // when we get more than one game, add the logic for switching between game store pages.
  const playNow = () => {
    // redirect to the game front end
  };

  return (
    <div className='hub-container'>
      <Nav />
      <main>
        <StoreSideBar/>
        <article>
          <div className='game-info'>
            <h1 className='game-name'>Firefly</h1>
            <>{/* Maybe a carousel here, or just a static image */}</>
            <button className='play-now'>Play Firefly</button>
          </div>
        </article>
      </main>
      <Footer/>
    </div>
  );
};

export default Hub;
