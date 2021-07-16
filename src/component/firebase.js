import firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyC_ixPMjxCx6mAo7pDaW0ksyqCw30U7kHE",
  authDomain: "netflixclone-b6ad3.firebaseapp.com",
  projectId: "netflixclone-b6ad3",
  storageBucket: "netflixclone-b6ad3.appspot.com",
  messagingSenderId: "222053544310",
  appId: "1:222053544310:web:7bd582f5dd427a9eb88a57",
  measurementId: "G-7SVCQCWGX9"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
export { auth };
export default db;