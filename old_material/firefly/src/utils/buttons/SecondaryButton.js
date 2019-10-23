import React from "react";
import "../../styles/Button.scss";

export class SecondaryButton extends React.Component {
  render() {
    return (
      <div className="secondary-button-container">
        <button>{this.props.text}</button>
      </div>
    );
  }
}
