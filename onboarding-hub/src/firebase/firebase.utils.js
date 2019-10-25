import firebase from "firebase/app"
import 'firebase/auth'

const config = {
    apiKey: "AIzaSyBNBq_R67p7Gdf5eOWsyoC6Pv53fHGd2nw",
    authDomain: "firefly-a26c9.firebaseapp.com",
    databaseURL: "https://firefly-a26c9.firebaseio.com",
    projectId: "firefly-a26c9",
    storageBucket: "firefly-a26c9.appspot.com",
    messagingSenderId: "427672439812",
    appId: "1:427672439812:web:6d5d9015ea4b54f589b951",
    measurementId: "G-H8KLD107BG"
}

firebase.initializeApp(config)

export const auth = firebase.auth()
export const provider = new firebase.auth.GoogleAuthProvider()
provider.setCustomParameters({ prompt: 'select_account' })
export const signInWithGoogle = () => auth.signInWithPopup(provider)
export const facebookProvider = new firebase.auth.FacebookAuthProvider()
export const doFacebookSignIn = () => auth.signInWithPopup(facebookProvider)
export const githubProvider = new firebase.auth.GithubAuthProvider()
export const doGithubSignIn = () => auth.signInWithPopup(githubProvider)
