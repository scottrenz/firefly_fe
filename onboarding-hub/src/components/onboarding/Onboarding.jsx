import React, { useState } from 'react';

import Stripe from './StripeParent'
import Personal from './Personal'
import CustomStepper from "../Steppers/CustomStepper";


const Onboarding = (props) => {

    // A controller set up to switch between a Switch statement during registration
    const [controller, setController] = useState(0)
    // Stores the Users information as they are created.
    const [user, setUser] = useState({
        first_name: "",
        last_name: "",
        address: "",
        city: "",
        state: "",
        zipCode: ""
    })

    // Switch statement used to do conditional rendering of the seperate parts of the onboarding
    switch (controller) {
        case 0:
            // Console log check for current steps
            console.log('Case One', controller)
            // rendering Stripe payments page
            return (
                <div>
                    <CustomStepper activeStep={controller} />
                    <Personal setController={setController} user={user} setUser={setUser} />
                </div>
            );
        case 1:
            // Console log check for current steps
            console.log('Case Two', controller)
            // rendering account-info page
            return (
                <div>
                    <CustomStepper activeStep={controller} />
                    <Stripe setController={setController} user={user} setUser={setUser} />
                </div>
            );
        default:
            console.log('Defualt Render, you should not have gotten here.')
            return (
                <div>You found yourself somewhere you shouldn't be.</div>
            );
    }
}

export default Onboarding;