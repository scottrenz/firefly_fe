import React from "react";
import "../../styles/Button.scss";

export class PrimaryButton extends React.Component {
  render() {
    return (
      <div className="primary-button-container">
        <button>{this.props.text}</button>
      </div>
    );
  }
}
