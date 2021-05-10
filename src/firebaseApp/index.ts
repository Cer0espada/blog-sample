import firebase from 'firebase/app'
import 'firebase/firestore';
import 'firebase/analytics';
import 'firebase/storage';
import 'firebase/functions';
// require('firebase/firestore')
// require('firebase/auth')


var firebaseConfig = {
    apiKey: process.env.REACT_APP_FB_APIKEY,
    authDomain: process.env.REACT_APP_FB_AUTHDOMAIN,
    projectId: process.env.REACT_APP_FB_PROJECTID,
    storageBucket: process.env.REACT_APP_FB_STORAGEBUCKET,
    messagingSenderId: process.env.REACT_APP_FB_MESSANGINGSENDERID,
    appId: process.env.REACT_APP_FB_APPID,
    mesasurementId: process.env.REACT_APP_FB_MEASUREMENTID
};
console.log(process.env.REACT_APP_FB_PROJECTID)

firebase.initializeApp(firebaseConfig)
export const analytics = firebase.analytics();
export const db = firebase.firestore();
// export const auth = firebase.auth();
export const storage = firebase.storage();
export const functions = firebase.app().functions('us-central1');
export default firebase;
