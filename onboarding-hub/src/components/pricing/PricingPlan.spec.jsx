// Import react and testing library
import React from 'react'
import { render } from '@testing-library/react'
// Import renderer for snapshot
import renderer from 'react-test-renderer'

import PricingPlan from './PricingPlan'

// Test to check that the app will display when called.
describe('<PricingPlan />', () => {
  it('should display', () => {
    // render(<PricingPlan/>);
  })
  // Create a snapshot
  it('matches snapshot', () => {
    // const tree = renderer.create(<PricingPlan />); // Generates a DOM tree

    // // Snapshots are a JSON representation of the DOM tree
    // expect(tree.toJSON()).toMatchSnapshot();
  });
})