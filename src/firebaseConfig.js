import firebase from 'firebase';
var config = {
  apiKey: 'AIzaSyBNOEpSeK0EsMU268qp6DH1cyOlb5wPq8I',
  authDomain: 'akram-cms.firebaseapp.com',
  databaseURL: 'https://akram-cms.firebaseio.com',
  projectId: 'akram-cms',
  storageBucket: 'akram-cms.appspot.com',
  messagingSenderId: '696932428489',
  appId: '1:696932428489:web:c8090555c7d09448193b18',
  measurementId: 'G-HRXSL5KTWG',
};
// Initialize Firebase
const Firebase = firebase.initializeApp(config);
export const FirebaseDB = Firebase.database();
export const FirebaseAuth = Firebase.auth();
firebase.analytics();

export default Firebase;
