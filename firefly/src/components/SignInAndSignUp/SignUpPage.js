import React, { useState } from "react";
import { withFormik, Form, Field } from "formik";
import firebase from "firebase";
import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth";
import * as Yup from "yup";
import ApolloClient from "apollo-boost";
import WearingNerdGlasses from "./../../images/WearingNerdGlasses.png";
import ChillingFly from "../../assets/animations/ChillingFly";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye } from "@fortawesome/free-solid-svg-icons";

import "./../../styles/SignUpPage.scss";

const { gql } = require("apollo-boost");

const ADD_USER = gql`
  mutation addUser($input: UserInput!) {
    addUser(input: $input) {
      id
      email
    }
  }
`;

// Staging server at "https://projectfirefly-staging.herokuapp.com"
const uiConfig = {
  signInFlow: "popup",
  signInOptions: [
    firebase.auth.GoogleAuthProvider.PROVIDER_ID,
    firebase.auth.FacebookAuthProvider.PROVIDER_ID,
    firebase.auth.EmailAuthProvider.PROVIDER_ID
  ],
  callbacks: {
    signInSuccess: currentUser => {
      localStorage.setItem("token", currentUser.idToken);
      const client = new ApolloClient({
        uri: "http://localhost:3300"
      });
      const newUser = {
        email: currentUser.email,
        username: currentUser.email
      };
      client
        .mutate({
          mutation: ADD_USER,
          variables: { input: newUser }
        })
        .then(res => {
          // console.log(res.data);
        })
        .catch(err => {
          // console.log(err);
        });
    }
  }
};

const RegisterForm = ({ values, errors, touched }) => {
  const [eyeClicked, setEyeClicked] = useState(false);

  return (
    <div className="sign-up-container">
      <h1 className="sign-up-header"> Sign Up</h1>

      <div className="sign-up-forms-container">
        <div className="sign-up-forms-box">
          <Form className="sign-up-forms-box__formik">
            <div className="sign-up-forms-field">
              <h2 className="sign-up-forms-field-title">Email</h2>
              <Field
                type="email"
                name="email"
                className="sign-up-forms-box__field"
              />
              {touched.email && errors.email && (
                <p className="sign-up-error">{errors.email}</p>
              )}
            </div>
            <div className="sign-up-forms-field">
              <h2 className="sign-up-forms-field-title">Password</h2>
              <div className="sign-up-eye-stacking">
                <Field
                  type={eyeClicked ? "text" : "password"}
                  name="password"
                  className="sign-up-forms-box__field"
                />
                <FontAwesomeIcon
                  className="sign-up-eye-icon"
                  icon={faEye}
                  onClick={() => setEyeClicked(!eyeClicked)}
                />
              </div>
              {touched.password && errors.password && (
                <p className="sign-up-error">{errors.password}</p>
              )}
            </div>
            <div className="sign-up-forms-field">
              <h2 className="sign-up-forms-field-title">Confirm Password</h2>
              <div className="sign-up-eye-stacking">
                <Field
                  type={eyeClicked ? "text" : "password"}
                  name="passwordConfirm"
                  className="sign-up-forms-box__field"
                />
                <FontAwesomeIcon
                  className="sign-up-eye-icon"
                  icon={faEye}
                  onClick={() => setEyeClicked(!eyeClicked)}
                />
              </div>
              {touched.passwordConfirm &&
                values.password !== values.passwordConfirm && (
                  <p className="sign-up-error">Passwords do not match</p>
                )}
            </div>
            <div className="sign-up-checkbox-terms">
              <div className="new-checkbox-container">
                <label class="new-checkbox-label">
                  <Field type="checkbox" name="terms" checked={values.terms} />I
                  agree to the{" "}
                  <a href="google.com" className="sign-up-link">
                    Terms and Conditions
                  </a>
                </label>
              </div>
            </div>

            <button type="submit" className="sign-up-forms-box__formik-button">
              Sign Up
            </button>
            <a href="/sign-in" className="sign-up-link switch-account">
              I already have an account
            </a>
          </Form>
        </div>
        <div>
          <h2 className="sign-up-or">OR</h2>
        </div>
        <div className="sign-up-forms-box ">
          <div className="fbSize">
            <StyledFirebaseAuth
              uiConfig={uiConfig}
              firebaseAuth={firebase.auth()}
            />
          </div>
          <div className="sign-up-firefly-nerd">
            <ChillingFly />
          </div>
          {/* <img
            src={WearingNerdGlasses}
            alt="firefly-nerd"
            className="sign-up-firefly-nerd"
          /> */}
        </div>
      </div>
    </div>
  );
};

const SignUpPage = withFormik({
  mapPropsToValues({ email, password, passwordConfirm, terms }) {
    return {
      email: email || "",
      password: password || "",
      passwordConfirm: passwordConfirm || "",
      terms: terms || false
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
    const client = new ApolloClient({
      uri: "http://localhost:3300"
    });
    const email = values.email;
    const password = values.password;
    if (!values.terms) {
      alert("Please accept the terms and conditions before continuing.");
    } else {
      firebase
        .auth()
        // Ideally, this would fail if the later add to our database fails. I'll work on that
        .createUserWithEmailAndPassword(email, password)
        .then(res => {
          const newUser = {
            email: email,
            username: email
          };
          client
            .mutate({
              mutation: ADD_USER,
              variables: { input: newUser }
            })
            .then(res => {
              // console.log(res.data);
              setSubmitting(false);
            })
            .catch(err => {
              // console.log(err);
            });
        })
        .catch(err => {
          // console.log(err);
        });
    }
  }
})(RegisterForm);

export default SignUpPage;
