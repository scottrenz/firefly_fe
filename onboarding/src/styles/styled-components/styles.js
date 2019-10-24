import styled from 'styled-components';
import Palette from "../Palette";
import FireflyExample from '../../assets/fireflyexample.png';

export const HubDiv = styled.div`
  width: 100%;
  height: 87vh;
  background: white;
  box-sizing: border-box;
  margin: 0;
  main {
    width: 100%;
    display: flex;
    height: 70vh;
    aside.sidebar {
      width: 10%;
      box-sizing: border-box;
      padding: 10px;
      border: 2px solid ${Palette.darkpurple};
      background: ${Palette.purple};
      color: white;
      opacity: 0.9;
      
      div.game {
        width: 100%;
        height: 100%;
        box-sizing: border-box;
        display: flex;
        flex-direction: column;
        align-items: center;
        border: 1px solid ${Palette.darkpurple};
        padding: 10px 0;
        
        div.firefly {
          border: 1px solid ${Palette.darkpurple};
          width: 70%;
          height: auto;
          text-align: center;
        }
      }
    }
    
    article {
      width: 90%;
      box-sizing: border-box;
      padding: 10px;
      display: flex;
      justify-content: center;
      border: 2px solid black;
      background-color: ${Palette.lightgreen};
      background-image: url(${FireflyExample});
      background-repeat: no-repeat;
      background-position: center;
      background-size: contain;
      
      div.game-info {
        width: 50%;
        max-width: 500px;
        border-radius: 10px;
        display: flex;
        flex-direction: column;
        align-items: center;
        background: ${Palette.white};
        box-shadow: 0 10px 10px ${Palette.green};
        opacity: 0.95;
        
        h1.game-name {
          margin: 20px 0;
        }
        
        img {
          max-width: 100%;
        }
        
        button.play-now {
          padding: 10px 30px;
          background: ${Palette.green};
          border-radius: 5px;
          font-size: 2rem;
          border: 0;
          box-shadow: 0 3px 0 ${Palette.darkgreen};
          margin: auto;
          transition: 1s transform background;
          
          &:hover {
            transform: scale(1.2);
            background: ${Palette.darkgreen};
          }
          
          a {
            text-decoration: none;
            color: white;
          }
        }
      }
    }
  }
`;