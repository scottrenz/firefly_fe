import React, { useState } from 'react';

const Onboarding = (props) => {

    // A controller set up to switch between a Switch statement during registration
    const [controller, setController] = useState({ steps: 0 })
    // Stores the Users information as they are created.
    const [user, setUser] = useState({})

    // Switch statement used to do conditional rendering of the seperate parts of the onboarding
    switch (controller.steps) {
        case 1:
            // Console log check for current steps
            console.log('Case One', controller.steps)
            // rendering Stripe payments page
            return (
                <Stripe setController={setController} user={user} setUser={setUser} />
            );
        case 2:
            // Console log check for current steps
            console.log('Case Two', controller.steps)
            // rendering account-info page
            return (
                <Personal setController={setController} user={user} setUser={setUser} />
            );
        default:
            console.log('Defualt Render, you should not have gotten here.')
            return (
                <div>You found yourself somewhere you shouldn't be.</div>
            );
    }
}

export default Onboarding;