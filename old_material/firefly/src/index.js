import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import * as serviceWorker from "./serviceWorker";

import ChildProfileStore from "./context/ChildProfiles/ChildProfileStore";

import "./styles/reset.scss";

//This import is important, the const is to keep it from getting accidentally cleaned up.
import firebaseConfig from "./firebase";
const firebase = firebaseConfig;

ReactDOM.render(<App />, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
