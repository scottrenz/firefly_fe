import styled from 'styled-components';

export const HubDiv = styled.div`
  width: 100%;
  height: 100vh;
  background: lightgreen;
  box-sizing: border-box;
  margin: 0;
  main {
    width: 100%;
    background: green;
    aside.sidebar {
      width: 10%;
      box-sizing: border-box;
      padding: 10px;
      div.game {
        
      }
    }
    
    article {
      width: 90%;
      box-sizing: border-box;
      padding: 10px;
      
      div.game-info {
        width: 50%;
        max-width: 500px;
        
        
        h1.game-name {
          width: 100%;
        }
        
        button.play-now {
          
        }
      }
    }
  }
`;