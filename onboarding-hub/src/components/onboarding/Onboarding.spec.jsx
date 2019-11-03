// Import react and testing library
import React, { useState } from 'react'
import { render } from '@testing-library/react'
// Import renderer for snapshot
import renderer from 'react-test-renderer'

import Onboarding from './Onboarding'
// Import all files associated with the rendering of the Onboarding component
import Stripe from './StripeParent'
import Personal from './Personal'
import CustomStepper from "../Steppers/CustomStepper";

// Test data for the switch statement use case
const [User, SetUser] = useState({
  first_name: "Dan",
  last_name: "TheMan",
  address: "Muscle Town",
  city: "Muscleville",
  state: "Merica",
  zipCode: "09001"
})

const Controller = [0,1]

// Test to check that the app will display when called.
describe('<Onboarding />', () => {
  it('should display', () => {
    render(<Onboarding />);
  })
  // Create a snapshot
  it('matches snapshot', () => {
    const tree = renderer.create(<Onboarding />); // Generates a DOM tree

    // Snapshots are a JSON representation of the DOM tree
    expect(tree.toJSON()).toMatchSnapshot();
  });
  // Check the default return from the switch statement
  it('should return the default', () => {
    // Create a get by text call
    const { getByTest } = render(<Onboarding />);
    // Call and expect the result to be the default message
    const text = getByTest(/You found yourself somewhere you shouldn't be/i);
    expect(text).toBeUndefined();
  })
  // Check the first use case of 0
  it('should return the personal page', () => {
    // Create a get by text call with the correct passed values
    const { getByTest } = render(<Onboarding controller={ Controller[0] } user = { User } setUser = { SetUser } />);
    // Call and expect the result to be the default message
    const text = getByTest(/You found yourself somewhere you shouldn't be/i);
    expect(text).toBeUndefined();
  })
  // Check the first use case of 1
  it('should return the stripe page', () => {
    // Create a get by text call with the correct passed values
    const { getByTest } = render(<Onboarding controller={ Controller[1] } user = { User } setUser = { SetUser } />);
    // Call and expect the result to be the default message
    const text = getByTest(/You found yourself somewhere you shouldn't be/i);
    expect(text).toBeUndefined();
  })
})