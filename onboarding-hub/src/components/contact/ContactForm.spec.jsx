// Import react and testing library
import React from 'react'
import { render, fireEvent } from '@testing-library/react'
// Import renderer for snapshot
import renderer from 'react-test-renderer'

import ContactForm from './ContactForm'

// Test to check that the app will display when called.
describe('<ContactForm />', () => {
  it('should display', () => {
    render(<ContactForm/>);
  })
  // Create a snapshot
  it('matches snapshot', () => {
    const tree = renderer.create(<ContactForm />); // Generates a DOM tree

    // Snapshots are a JSON representation of the DOM tree
    expect(tree.toJSON()).toMatchSnapshot();
  });
  // Should give an error message for the input fields being empty
  it('display an error for missing information', () => {
    // Create a spy with jest
    const spy = jest.fn();
    // Render the component
    const {getByDisplayValue, getByText, findByText}= render(<ContactForm />);
    // Grab the button 
    const button = getByText(/send message/i);
    // Fire the click event for the button
    fireEvent.click(button);
    // Check if the spy was called when toggleClosed was pressed
    expect(spy).toBeCalled();
    // Check the message that was rendered after the button was clicked
    findByText(/error/i);
  })
  // Input field should be able to contain text
  it('input fields can be filled in', () => {
    // Create a variable for the contact information for the field to use
    const contactInfo = { name: 'betaBot', email: 'test@me.now', message: 'this might work' };
    // Setup the render
    render(<ContactForm />)
    expect(ContactForm.findByPlaceholderText('#input-auth-username').length).toBe(1);

    const nameInput = ContactForm.find('#input-auth-username');
    nameInput.value = credentials.ame;
    expect(nameInput.value).toBe('leongaban');

    const emailInput = ContactForm.find('#input-auth-password');
    emailInput.value = credentials.email;
    expect(emailInput.value).toBe('testpass');

    const messageInput = ContactForm.find('#input-auth-password');
    messageInput.value = credentials.email;
    expect(messageInput.value).toBe('testpass');
  });
  // Fill out and send contact information should work
  it('form can be submitted successfully', () => {
  
  })
})