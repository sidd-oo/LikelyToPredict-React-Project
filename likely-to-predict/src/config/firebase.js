import firebase from 'firebase';
var firebaseConfig = {
  apiKey: "AIzaSyBkB8H0suRM-aTlAAUn0hx_2aV4cv-AkyY",
  authDomain: "likely-to-predict.firebaseapp.com",
  projectId: "likely-to-predict",
  storageBucket: "likely-to-predict.appspot.com",
  messagingSenderId: "1062774081976",
  appId: "1:1062774081976:web:d771cd2cdd7fd9cfefe74d",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase;
