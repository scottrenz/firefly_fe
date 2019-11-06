// Import react and any dependencies necessary 
import React from 'react'

export const Tutorial = () => {
  return (
    <div className = 'container'>
      <h1>Step 3: How It Works</h1>
      {/* Success Bar */}
      <div className = 'cardContainer'>
        <div className = 'tutorialCard'>
          <h2 className = 'cardTitle'>Access My Account</h2>
          {/* down arrow */}
          <img src = '' alt = '' className = 'tutorialImage' />
        </div>
        <div className = 'tutorialCard'>
          <h2 className = 'cardTitle'>Manage Account</h2>
          <img src = '' alt = '' className = 'tutorialImage' />
          <ol>
            <li>Manage Profiles</li>
            <li>Update Account Information</li>
            <li>Manage Payment Information</li>
          </ol>
        </div>
        <div className = 'tutorialCard'>
          <h2 className = 'cardTitle'>Start Our Adventure</h2>
          <img src = '' alt = '' className = 'tutorialImage' />
          {/* up arrow */}
        </div>
      </div>
      <div className = 'btnContainer'>
        <button className = 'whiteGreen'>Back</button>
        <button className = 'greenWhite'>Get Started</button>
      </div>
    </div>
  )
}
