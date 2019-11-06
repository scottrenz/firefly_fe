// Import react and any dependencies necessary 
import React from 'react'
import Tutorial1 from '../../assets/Step3Tutorial-1.png'
import Tutorial2 from '../../assets/Step3Tutorial-2.png'

// Styles
import '../../styles/index.scss'
// import './tutorial.scss'

export const Tutorial = () => {
  return (
    <div className = 'container'>
      <h1>Step 3: How It Works</h1>
      {/* Success Bar */}
      <div className = 'tutorialContainer'>
        <div className = 'cardContainer'>
          <div className = 'tutorialCard'>
            <h2 className = 'cardTitle'>Access My Account</h2>
            {/* down arrow */}
            <img src = {Tutorial1} alt = '' className = 'tutorialImage' />
          </div>
          <div className = 'tutorialCard'>
            <h2 className = 'cardTitle'>Manage Account</h2>
            <img src = {Tutorial2} alt = '' className = 'tutorialImage' />
            <ul>
              <li>Manage Profiles</li>
              <li>Update Account Information</li>
              <li>Manage Payment Information</li>
            </ul>
          </div>
          <div className = 'tutorialCard'>
            <h2 className = 'cardTitle'>Start Our Adventure</h2>
            <img src = {Tutorial2} alt = '' className = 'tutorialImage' />
            {/* up arrow */}
          </div>
        </div>
        <div className = 'btnContainer'>
          <button className = 'whiteGreen'>Back</button>
          <button className = 'greenWhite'>Get Started</button>
        </div>
      </div>
    </div>
  )
}

export default Tutorial;