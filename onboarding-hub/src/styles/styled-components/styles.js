import styled from 'styled-components';
import Palette from "../Palette";
import FireflyExample from '../../assets/IconsBackground.png';

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
    
    @media (max-width: 500px) {
      flex-direction: column;
    }
    
    aside.sidebar {
      width: 10%;
      box-sizing: border-box;
      padding: 10px;
      border: 2px solid ${Palette.darkpurple};
      background: ${Palette.purple};
      color: white;
      
      @media (max-width: 800px) {
        width: 20%;
      }
      
      @media (max-width: 500px) {
        width: 100vw;
        height: 10%;
      }
      
      div.game {
        width: 100%;
        height: 100%;
        box-sizing: border-box;
        display: flex;
        flex-direction: column;
        align-items: center;
        padding: 10px 0;
        
        @media (max-width: 500px) {
          flex-direction: row;
          justify-content: space-between;
        }
        
        div.firefly {
          width: 70%;
          height: auto;
          text-align: center;
          padding-bottom: 3px;
          
          @media (max-width: 500px) {
            width: 20%;
          }
          
          img {
            max-width: 100%;
            border-radius: 50%;
            box-shadow: 0 3px 0 ${Palette.darkpurple};
          }
        }
      }
    }
    
    article {
      width: 90%;
      box-sizing: border-box;
      padding: 10px;
      display: flex;
      justify-content: center;
      align-items: center;
      border-left: 2px solid black;
      border-bottom: 2px solid ${Palette.green};
      background-color: ${Palette.lightgreen};
      background-image: url(${FireflyExample});
      background-repeat: no-repeat;
      background-position: center;
      background-size: cover;
      
      @media (max-width: 800px) {
        width: 80%;
      }
      
      @media (max-width: 500px) {
        width: 100vw;
        height: 100%;
      }
      
      div.game-info {
        width: 50%;
        min-height: 80%;
        max-width: 500px;
        border-radius: 10px;
        display: flex;
        flex-direction: column;
        align-items: center;
        background: ${Palette.white};
        box-shadow: 0 10px 10px ${Palette.green};
        padding-bottom: 5px;
        
        @media (max-width: 800px) {
          height: 70%;
        }
        
        @media (max-width: 500px) {
          height: 50%;
        }
        
        h1.game-name {
          margin: 20px 0;
          color: ${Palette.darkgreen};
          
          @media (max-width: 500px) {
            font-size: 1.5rem;
          }
          
        }
        div {
          
        }
        
        img {
          max-width: 100%;
          margin-bottom: 5px;
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
          
          @media (max-width: 800px) {
            font-size: 1.5rem;
            padding: 5px 15px;
          }
          
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