import React from "react";
import ReactDOM from "react-dom";
import RegistrationAddChild from "../components/Registration/RegistrationAddChild";
import App from "../App";

const profiles = {
    length: 1
}

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});