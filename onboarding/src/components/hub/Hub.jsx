import React, { useState } from 'react';
import { Link } from 'react-router';
import NavBar from '../nav';
import StoreSideBar from './StoreSidebar';
import Footer from '../Footer';
import StyledDiv from "./styles";
const gameLink = 'https...';


const Hub = props => {
  // when we get more than one game, add the logic for switching between game store pages.

  return (
    <StyledDiv className='hub-container'>
      <NavBar />
      <main>
        <StoreSideBar/>
        <article>
          <div className='game-info'>
            <h1 className='game-name'>Firefly</h1>
            <>{/* Maybe a carousel here, or just a static image */}</>
            <button className='play-now'><a href={`${gameLink}`}>Play Firefly</a></button>
          </div>
        </article>
      </main>
      <Footer/>
    </StyledDiv>
  );
};

export default Hub;
