import firebase from "firebase/app"
import 'firebase/auth'
import axios from 'axios'

const config = {
    apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
    authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
    databaseURL: process.env.REACT_APP_FIREBASE_DATABASE_URL,
    projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
    storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
    appId: process.env.REACT_APP_FIREBASE_APP_ID,
    measurementId: process.env.REACT_APP_FIREBASE_MEASUREMENT_ID
}

const backend = process.env.REACT_APP_BACKEND_URL
// const backend = 'http://localhost:5000'

firebase.initializeApp(config)

export const auth = firebase.auth()

//Google authentication
export const provider = new firebase.auth.GoogleAuthProvider()
provider.setCustomParameters({ prompt: 'select_account' })
//REGISTER with Google account
export const signUpWithGoogle = () => {
    //Use Firebase function to create a popup of specific provider's login
    auth.signInWithPopup(provider)
    .then(result => {
        //If it works, get the idToken from that login for verification use
        auth.currentUser.getIdToken(true)
        .then(idToken => {
            //If it works, send over token to the backend via header
            axios.get(`${backend}/auth/firebase/register`, {headers: {"token": idToken}})
            .then(res => {
                // console.log(res)
                // redirect here?
            })
            .catch(err => console.log(err))
        })
        .catch(err => console.log(err))
    })
    .catch(err => console.log(err))
}
//LOGIN with Google account
export const signInWithGoogle = () => {
    auth.signInWithPopup(provider)
    .then(result => {
        auth.currentUser.getIdToken(true)
        .then(idToken => {
            const user = result.user
            axios.get(`${backend}/auth/firebase/login`, {headers: {"token": idToken}})
            .then(res => {
                // console.log(res)
                // redirect here?
            })
            .catch(err => console.log(err))
        })
        .catch(err => console.log(err))
    })
    .catch(err => console.log(err))
}

//Facebook authentication
export const facebookProvider = new firebase.auth.FacebookAuthProvider()
//REGISTER with Facebook account
export const doFacebookSignUp = () => {
    auth.signInWithPopup(facebookProvider)
    .then(result => {
        auth.currentUser.getIdToken(true)
        .then(idToken => {
            const user = result.user
            axios.get(`${backend}/auth/firebase/register`, {headers: {"token": idToken}})
            .then(res => {
                // console.log(res)
                // redirect here?
            })
            .catch(err => console.log(err))
        })
        .catch(err => console.log(err))
    })
    .catch(err => console.log(err))
}
//LOGIN with Facebook account
export const doFacebookSignIn = () => {
    auth.signInWithPopup(facebookProvider)
    .then(result => {
        auth.currentUser.getIdToken(true)
        .then(idToken => {
            const user = result.user
            axios.get(`${backend}/auth/firebase/login`, {headers: {"token": idToken}})
            .then(res => {
                // console.log(res)
                // redirect here?
            })
            .catch(err => console.log(err))
        })
        .catch(err => console.log(err))
    })
    .catch(err => console.log(err))
}

//Github authentication
export const githubProvider = new firebase.auth.GithubAuthProvider()
export const doGithubSignIn = () => auth.signInWithPopup(githubProvider)
