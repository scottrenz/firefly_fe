import React, { Component } from "react";

// library imports
import { CardElement, injectStripe } from "react-stripe-elements";
import styled from "styled-components";

// context store import
import { UserContext } from "../../../contexts/UserContext";

// image imports
import Amex from "../../../assets/CC-icons/Dark Color/amex.png";
import Discover from "../../../assets/CC-icons/Dark Color/discover.png";
import Mastercard from "../../../assets/CC-icons/Dark Color/mastercard.png";
import Visa from "../../../assets/CC-icons/Dark Color/visa.png";

class CheckoutForm extends Component {
  state = {
    name: "",
    email: "",
    amount: "$0.00"
  };

  changeHandler = e => {
    this.setState({
      ...this.state,
      [e.target.name]: e.target.value
    });
  };

  async submit(ev) {
    let { token } = await this.props.stripe.createToken({
      name: this.state.name
    });
    console.log(token);
    let response = await fetch(
      "https://infinite-meadow-87721.herokuapp.com/stripe/api/stripe",
      {
        method: "POST",
        headers: { "Content-Type": "text/plain" },
        body: token.id
      }
    );

    console.log(response);

    if (response.ok) console.log("Purchase Complete!");
  }

  // styled components for stripe built in component
  StripeStyle = styled(CardElement)`
    width: 95%;
    border: none;
    margin: 1rem, 0.2rem;
    padding: 1rem 1rem;
    font-size: 3rem;
    background: #e2f5d6;
    font-family: "Nunito", sans-serif;
    font-weight: 900;
    border-radius: 10px;
  `;

  render() {
    return (
      <UserContext.Consumer>
        {props => {
          const { loggedInUser } = props;

          this.props = { ...this.props, loggedInUser };
          return (
            <>
              <h1 className="payment-heading">PAYMENT</h1>
              <div className="checkout">
                <label className="input-headings">
                  Email
                  <br />
                  <input
                    type="text"
                    className="user-inputs"
                    name="email"
                    id="email-input"
                    value={this.state.email}
                    onChange={this.changeHandler}
                  />
                </label>
                <h2 className="select-plan">Select a membership</h2>
                <p className="assurance">
                  Don't worry, you can always change this later.
                </p>
                <div className="radio-container">
                  <div className="sub-container">
                    <input
                      type="radio"
                      id="monthly-id"
                      className="sub-radio"
                      name="amount"
                      value="$4.99"
                      onChange={this.changeHandler}
                    />
                    <label htmlFor="monthly-id" className="sub-label">
                      {" "}
                      Monthly - $4.99 per month
                    </label>
                  </div>
                  <div className="sub-container">
                    <input
                      type="radio"
                      id="yearly-id"
                      className="sub-radio"
                      name="amount"
                      value="$49.99"
                      onChange={this.changeHandler}
                    />
                    <label htmlFor="yearly-id" className="sub-label">
                      Yearly - $49.99 per year
                    </label>
                  </div>
                </div>
                <div className="card-info-container">
                  <div className="cc-container">
                    <img
                      src={Amex}
                      alt="american express icon"
                      className="cc"
                    />
                    <img src={Discover} alt="discover icon" className="cc" />
                    <img
                      src={Mastercard}
                      alt="mastercard icon"
                      className="cc"
                    />
                    <img src={Visa} alt="visa icon" className="cc" />
                  </div>
                  <label className="input-headings">
                    Card Number
                    <this.StripeStyle style={this.cardElementStyles} />
                  </label>
                </div>
                <div className="select-membership">
                  <div className="top-membership">
                    <p className="selected-membership">Selected Membership</p>
                    <p className="price">{this.state.amount}</p>
                  </div>
                  <p className="total">Total: {this.state.amount}</p>
                </div>
                <div className="checkout-btn-container">
                  <p className="legal">
                    By signing up, you agree to the Project Firefly{" "}
                    <u>Terms of Service</u> and <u>Privacy Policy</u>.
                  </p>
                  <button onClick={this.submit} className="checkout-btn">
                    Checkout
                  </button>
                </div>
              </div>
            </>
          );
        }}
      </UserContext.Consumer>
    );
  }
}

export default injectStripe(CheckoutForm);
