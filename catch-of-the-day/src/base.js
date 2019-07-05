import  Rebase from "re-base";
import firebase from "firebase";

const  firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyC3KDDzZ9xq8kQTrFpqBTs82-okAmnzqRs",
    authDomain: "catch-of-the-day-alex-7419a.firebaseapp.com",
    databaseURL: "https://catch-of-the-day-alex-7419a.firebaseio.com",
});

const base = Rebase.createClass(firebaseApp.database());

// named export
export  { firebaseApp };

// default export 
export default base;