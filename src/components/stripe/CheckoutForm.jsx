import React, {Component} from 'react';
import { CardElement, injectStripe } from 'react-stripe-elements';
import styled from 'styled-components'; 

import Pricing from '../../assets/welcomeback.png'
import Logo from '../../assets/firefly.png'

// styling and image imports

class CheckoutForm extends Component {

	state = {
		name: this.props.name, 
		email: '',
		amount: '$0.00'
	}

  changeHandler = e => {
	this.setState({
		...this.state,
		[e.target.name]: e.target.value
		})
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
  
  // styled components for stripe component
  StripeStyle = styled(CardElement)`
	  width: 400px; 
	  text-align: left; 
	  margin-top: .8rem; 
	  padding: 15px; 
	  background: #EEEEEE; 
  `

  render() {
	console.log(this.state); 
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
						<input type="radio" id="monthly-id" className="monthly" name="amount" value="$4.99" onChange={this.changeHandler} />
						<label htmlFor="monthly-id" className="sub-label"> Monthly - $4.99 per month</label>
					</div>
					<div className="yearly-container">
						<input type="radio" id="yearly-id" className="yearly" name="amount" value="$49.99" onChange={this.changeHandler} />
						<label htmlFor="yearly-id" className="sub-label">Yearly - $49.99 per year</label>
					</div>
				</div>
			</div>
			<img src={Logo} alt="pricing models" className="pricing" />
		</div>

		<div className="card-info-container">
			<img src='' alt="" className="accepted-cards" />
			<label>Card Number
				<this.StripeStyle style={this.cardElementStyles} />	
			</label>
		</div>
		<div className="select-membership">
			<div className="top-membership">
				<p className="selected-membership">Selected Membership</p>
				<p className="price">{this.state.amount}</p>
			</div>
			<hr/>
			<p className="total">Total: {this.state.amount}</p>
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