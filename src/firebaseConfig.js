import * as firebase from 'firebase';

var firebaseConfig = {
  apiKey: 'AIzaSyB5GJYn3XqgMWerOst6tS_kEmbDk0OYF9I',
  authDomain: 'work-hours-0.firebaseapp.com',
  databaseURL: 'https://work-hours-0.firebaseio.com',
  projectId: 'work-hours-0',
  storageBucket: 'work-hours-0.appspot.com',
  messagingSenderId: '737201264218',
  appId: '1:737201264218:web:f84f1b7183195f4549ea63',
  measurementId: 'G-EZ0ZFL6H4R'
};

// Initialize Firebase
const data = firebase.initializeApp(firebaseConfig);
export default data;
//   firebase.analytics();
