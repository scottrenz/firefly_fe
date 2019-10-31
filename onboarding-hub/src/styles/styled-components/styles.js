import styled from 'styled-components';
import Palette from "../Palette";
import IBG from '../../assets/IconsBackground.png';

export const HubDiv = styled.div`
  height: 87vh;
  background: ${Palette.purple};
  box-sizing: border-box;
  margin: 0 auto;
  width: 100%;
  display: flex;
  justify-content: center;
  
  main {
    width: 99%;
    display: flex;
    flex-direction: column;
    height: 80vh;
    
    @media (max-width: 500px) {
      flex-direction: column;
    }
    
    aside.sidebar {
      width: 100%;
      box-sizing: border-box;
      background: ${Palette.purple};
      color: white;
      
      @media (max-width: 800px) {
        //width: 20%;
      }
      
      @media (max-width: 500px) {
      }
      
      div.game {
        width: 100%;
        height: 100%;
        box-sizing: border-box;
        display: flex;
        flex-direction: column;
        align-items: center;
        
        @media (max-width: 500px) {
          flex-direction: row;
          justify-content: space-between;
        }
        
        div.firefly-hub {
          width: 70%;
          //height: auto;
          text-align: center;
          padding-bottom: 3px;
          
          @media (max-width: 500px) {
            width: 20%;
            overflow: hidden;
          }
          
          img {
            max-width: 100%;
            border-radius: 50%;
            box-shadow: 0 3px 0 ${Palette.darkpurple};
            height: auto;
            
            @media (max-width: 500px) {
              max-height: 50px;
            }
          }
          
          img {
            max-width: 100%;
            border-radius: 50%;
            box-shadow: 0 3px 0 ${Palette.darkpurple};
            height: auto;
            max-height: 100px;
            
            @media (max-width: 500px) {
              max-height: 50px;
            }
          }
        }
      }
    }
    
    article {
      width: 100%;
      height: 60vh;
      box-sizing: border-box;
      padding: 10px;
      display: flex;
      justify-content: center;
      align-items: center;
      border-radius: 5px 5px 0 0;
      background-color: ${Palette.lightgreen};
      background-image: url(${IBG});
      
      @media (max-width: 800px) {
        //width: 80%;
      }
      
      @media (max-width: 500px) {
        //width: 100vw;
        //height: 100%;
      }
      
      div.game-info {
        width: 50%;
        min-height: 80%;
        max-width: 500px;
        border-radius: 10px;
        display: flex;
        flex-direction: column;
        align-items: center;
        //background: ${Palette.white};
        //box-shadow: 0 10px 10px ${Palette.green};
        padding-bottom: 5px;
        
        @media (max-width: 800px) {
          height: 70%;
        }
        
        @media (max-width: 500px) {
          height: 50%;
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
          transition: transform 1s,  background 1s;
          
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
    
    aside.sidebar {
      width: 100%;
      box-sizing: border-box;
      background: ${Palette.purple};
      color: white;
      display: flex;
      justify-content: center;
      
      @media (max-width: 800px) {
        //width: 20%;
      }
      
      @media (max-width: 500px) {
      }
      
      div.game {
        width: 30%;
        height: 100%;
        box-sizing: border-box;
        display: flex;
        align-items: center;
        flex-wrap: wrap;
        
        @media (max-width: 500px) {
          flex-direction: row;
          justify-content: space-between;
        }
        
        
        h2.characters-header {
          width: 100%;
          font-size: 2rem;
          text-align: center;
        }
        
        div.character {
          //width: 30%;
          display: flex;
          flex-direction: column;
          align-items: center;
          
          img {
            max-width: 100%;
            max-height: 150px;
          }
          
          span.character-name {
            font-size: 1.5rem;
          }
        }
        
        div.firefly-hub {
          width: 70%;
          //height: auto;
          text-align: center;
          padding-bottom: 3px;
          
          @media (max-width: 500px) {
            width: 20%;
            overflow: hidden;

          }
          
          img {
            max-width: 100%;
            border-radius: 50%;
            box-shadow: 0 3px 0 ${Palette.darkpurple};
            height: auto;
            
            @media (max-width: 500px) {
              max-height: 50px;
            }
          }
          
          img {
            max-width: 100%;
            border-radius: 50%;
            box-shadow: 0 3px 0 ${Palette.darkpurple};
            height: auto;
            max-height: 100px;
            
            @media (max-width: 500px) {
              max-height: 50px;
            }
          }
        }
      }
    }
  }
`;

export const CarouselDiv = styled.div`
  width: 100%;
  overflow-x: hidden;
  overflow-y: hidden;
  display: flex;
  align-items: stretch;
  justify-content: center;
  
  .reel {
    display: flex;
    align-items: center;
    height: 100%;
    
    img {  
      max-width: 100%;
      width: 100%;
      object-fit: cover;
      
      
      &:not(.selected) {
        display: none;
      }
    }
  }
  
  .left-arrow, .right-arrow {
    //background-color: ${Palette.purple};
    color: ${Palette.white};
    font-size: 3rem;
    font-weight: bold;
    width: 10%;
    box-sizing: border-box;
    padding: 0 10px;
    display: flex;
    align-items: center;
    transition: background-color 1s, color 1s;
    -webkit-text-stroke: 3px ${Palette.darkpurple};
    
    @media (max-width: 500px) {
      font-size: 1rem;
      padding: 0 5px;
    }
    
    &:hover {
      background-color: ${Palette.darkpurple};
      color: #eee;
      -webkit-text-stroke: 3px ${Palette.white};
      cursor: pointer;
    }
  }
`;