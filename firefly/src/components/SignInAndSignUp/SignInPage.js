import React, { useState } from "react";
import { withFormik, Form, Field } from "formik";
import firebase from "firebase";
import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth";
import * as Yup from "yup";
import ApolloClient from "apollo-boost";
import WearingNerdGlasses from "./../../images/WearingNerdGlasses.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye } from "@fortawesome/free-solid-svg-icons";
import ChillingFly from "../../assets/animations/ChillingFly";

import "./../../styles/signIn.scss";

// Staging server at "https://projectfirefly-staging.herokuapp.com/register"
const uiConfig = {
  signInFlow: "popup",
  signInOptions: [
    firebase.auth.GoogleAuthProvider.PROVIDER_ID,
    firebase.auth.FacebookAuthProvider.PROVIDER_ID
  ],
  callbacks: {
    signInSuccess: currentUser => {
      localStorage.setItem("token", currentUser.idToken);
    }
  }
};

const SignInForm = ({ values, errors, touched }) => {
  const [eyeClicked, setEyeClicked] = useState(false);

  return (
    <div className="sign-in-container">
      <h1 className="sign-in-header"> Sign In</h1>

      <div className="forms-container">
        <div className="forms-box">
          <Form className="forms-box__formik">
            <div className="forms-field">
              <h2 className="forms-field-title">Email</h2>
              <Field type="email" name="email" className="forms-box__field" />
              {touched.email && errors.email && (
                <p className="error">{errors.email}</p>
              )}
            </div>
            <div className="forms-field">
              <h2 className="forms-field-title">Password</h2>
              <div className="eye-stacking">
                <Field
                  type={eyeClicked ? "text" : "password"}
                  name="password"
                  className="forms-box__field"
                />
                <FontAwesomeIcon
                  className="eye-icon"
                  icon={faEye}
                  onClick={() => setEyeClicked(!eyeClicked)}
                />
              </div>
              {touched.password && errors.password && (
                <p className="error">{errors.password}</p>
              )}
            </div>
            <div className="checkbox-terms">
              <label className="checkbox-container">
                <Field type="checkbox" name="persistence" />
                <span class="checkmark" />
              </label>
              <p className="checkbox-terms__terms-text">Keep me signed in</p>
            </div>
            <button type="submit" className="forms-box__formik-button">
              Sign In
            </button>
            <a href="/register" className=" link switch-account">
              Need an account? Sign up now!
            </a>
          </Form>
        </div>
        <div>
          <h2 className="sign-in-or">OR</h2>
        </div>
        <div className="forms-box FB">
          <div className="fbSize">
            <StyledFirebaseAuth
              uiConfig={uiConfig}
              firebaseAuth={firebase.auth()}
            />
          </div>
          <div className="firefly-nerd">
            <ChillingFly />
          </div>
          {/* <img
            src={WearingNerdGlasses}
            alt="firefly-nerd"
            className="firefly-nerd"
          /> */}
        </div>
      </div>
    </div>
  );
};

const SignInPage = withFormik({
  mapPropsToValues({ email, password, persistence }) {
    return {
      email: email || "",
      password: password || ""
    };
  },

  validationSchema: Yup.object().shape({
    email: Yup.string()
      .email()
      .required(),
    password: Yup.string()
      .min(8)
      .required()
  }),

  handleSubmit(values, { setSubmitting }) {
    const email = values.email;
    const password = values.password;
    // Sets auth persitence based on "Keep me signed in" checkbox;
    values.persistence
      ? firebase.auth().setPersistence(firebase.auth.Auth.Persistence.LOCAL)
      : firebase.auth().setPersistence(firebase.auth.Auth.Persistence.SESSION);
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then(res => {
        // console.log(res);
        // console.log(values.persistence);
      })
      .catch(error => {
        // console.log(error);
      });
  }
})(SignInForm);

export default SignInPage;
