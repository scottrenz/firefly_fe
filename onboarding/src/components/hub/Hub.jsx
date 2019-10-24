import React, { useState } from 'react';
import { Link } from 'react-router';
import NavBar from '../../auth0/NavBar';
import StoreSideBar from './StoreSidebar';
import Footer from '../Footer';
import { HubDiv} from "../../styles/styled-components/styles";
import FireflyExample from '../../assets/fireflyexample.png';
const gameLink = 'https...';


const Hub = props => {
  // when we get more than one game, add the logic for switching between game store pages.

  return (
    <HubDiv className='hub-container'>
      <main>
        <StoreSideBar/>
        <article>
          <div className='game-info'>
            <h1 className='game-name'>Firefly</h1>
            <img src={FireflyExample} alt='firefly example' />
            <button className='play-now'><a href={`${gameLink}`}>Play Firefly</a></button>
          </div>
        </article>
      </main>
      <Footer/>
    </HubDiv>
  );
};

export default Hub;