import firebase from 'firebase';

var firebaseConfig = {
    apiKey: "AIzaSyAW9WFYFgJmCgrI-rCdGxr3n_3YSB-ALyI",
    authDomain: "vibefm-99dd2.firebaseapp.com",
    projectId: "vibefm-99dd2",
    storageBucket: "vibefm-99dd2.appspot.com",
    messagingSenderId: "960527449907",
    appId: "1:960527449907:web:be270cfa9744716e6cc846",
    measurementId: "G-WTS8D286QJ"
  };

const fire = firebase.initializeApp(firebaseConfig);

export default fire;
