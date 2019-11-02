import React, {Component} from 'react';
import { CardElement, injectStripe, ReactStripeElements } from 'react-stripe-elements';
import styled from 'styled-components'; 

import Pricing from '../../../src/assets/welcomeback.png'

// styling and image imports
import '../../styles/scss/CheckoutForm.scss'

class CheckoutForm extends Component {
  constructor(props) {
	super(props);
	this.state = {
		name: this.props.name,
		email: '',
		amount: ''
	}
    this.submit = this.submit.bind(this);
  }

  changeHandler = (e) => {
	  this.setState({ [e.target.name]: e.target.value })
  }
  async submit(ev) {
	let {token} = await this.props.stripe.createToken({ name: this.state.name }); 
	console.log(token); 
    let response = await fetch("https://infinite-meadow-87721.herokuapp.com/stripe/api/stripe", {
      method: "POST",
      headers: {"Content-Type": "text/plain"},
      body: token.id
	});
	
	console.log(response); 
  
    if (response.ok) console.log("Purchase Complete!")
  }
  
  componentDidMount() {
	  console.log(this.state); 
  }
  // styled components for stripe component
  StripeStyle = styled(CardElement)`
  	  margin: 0 auto; 
	  border: 1px solid red;
	  width: 400px; 
  `

  render() {
    return (
      <div className="checkout">
		<h2>Inspiring kids, learning better!</h2>
		<h3>Teaching kids to code with fun!</h3>
		<div className="body-container">
			<div className="form-container">
				<label className="email-label">Email
					<input type="text" className="email-input" name="email" value={this.state.email} onChange={this.changeHandler} />
				</label>
				<p className="select-plan"><span><b>Select a membership</b></span><br />Don't worry, you can always change this later.</p>
				<div className="radio-container">
					<div className="monthly-container">
						<input type="radio" id="monthly-id" className="monthly" name="amount" value={this.state.amount} onChange={this.changeHandler} />
						<label htmlFor="monthly-id" className="sub-label"> Monthly - $4.99 per month</label>
					</div>
					<div className="yearly-container">
						<input type="radio" id="yearly-id" className="yearly" name="amount" value={this.state.amount} onChange={this.changeHandler} />
						<label htmlFor="yearly-id" className="sub-label">Yearly - $49.99 per year</label>
					</div>
				</div>
			</div>
			<img src={Pricing} alt="pricing models" className="pricing" />
		</div>

		<div className="card-info-container">
			<img src='' alt="" className="accepted-cards" />
			<this.StripeStyle style={this.cardElementStyles} />	
		</div>
		<div className="select-membership">
			<p className="selected-membership">Selected Membership</p>
			<p className="price">$49.99</p>
			<hr/>
			<p className="total">Total: $49.99</p>
		</div>
		<div className="checkout-btn-container">
			<p className="legal">By signing up, you agree to the Project Firefly <u>Terms of Service</u> and <u>Privacy Policy</u>.</p>
			<button onClick={this.submit} className="checkout-btn">Checkout</button>
		</div>
      </div>
    );
  }
}

export default injectStripe(CheckoutForm);