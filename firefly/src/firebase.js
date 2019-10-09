import firebase from "firebase";

// Your web app's Firebase configuration

const projectId = process.env.REACT_APP_FIREBASE_PROJECT_ID;

const firebaseConfig = {
    //Don't worry about the "apiKey" being public, it gives you no power
    apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
    authDomain: `${projectId}.firebaseapp.com`,
    databaseURL: `https://${projectId}.firebaseio.com`,
    projectId: `${projectId}`,
    storageBucket: `${projectId}.appspot.com`,
    messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
    appId: process.env.REACT_APP_FIREBASE_APP_ID,
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebaseConfig;