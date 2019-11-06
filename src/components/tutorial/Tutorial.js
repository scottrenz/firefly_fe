// Import react and any dependencies necessary 
import React from 'react'


class Tutorial extends Component {
  state = {

  }
  render() {
    return (
      <div className = 'container'>
        <h1>Step 3: How It Works</h1>
        {/* Image */}
        <div className = 'cardContainer'>
          <div className = 'tutorialCard'>
            <h2 className = 'cardTitle'>Access My Account</h2>
            {/* down arrow */}
            {/* Image */}
          </div>
          <div className = 'tutorialCard'>
            <h2 className = 'cardTitle'>Manage Account</h2>
            {/* Image */}
            <ol>
              <li>Manage Profiles</li>
              <li>Update Account Information</li>
              <li>Manage Payment Information</li>
            </ol>
          </div>
          <div className = 'tutorialCard'>
            <h2 className = 'cardTitle'>Start Our Adventure</h2>
            {/* Image */}
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
}