import app from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

const config = {
  apiKey: "AIzaSyCORP8H81w0j589Xl6sgKCrxOP5EYLK4r0",
  authDomain: "pay-by-barcode-42595.firebaseapp.com",
  databaseURL: "https://pay-by-barcode-42595.firebaseio.com",
  projectId: "pay-by-barcode-42595",
  storageBucket: "pay-by-barcode-42595.appspot.com",
  messagingSenderId: "370842837077",
  appId: "1:370842837077:web:52e5ce639eadc68713b4dc",
  measurementId: "G-3Y472N19YY"
};


class Firebase {
  constructor() {
    if(app.apps.length === 0) {
      app.initializeApp(config);
    }

    this.auth = app.auth();
    this.store = app.firestore();
    const firestore = app.firestore();
    const settings = {/* your settings... */ timestampsInSnapshots: true};
    firestore.settings(settings);
    

  }
  // *** Auth API ***

  doCreateUserWithEmailAndPassword = (email, password) =>
    this.auth.createUserWithEmailAndPassword(email, password);
  doSignInWithEmailAndPassword = (email, password) =>
    this.auth.signInWithEmailAndPassword(email, password);
  doSignOut = () => this.auth.signOut();
  doPasswordReset = email => this.auth.sendPasswordResetEmail(email);
  doPasswordUpdate = password =>
    this.auth.currentUser.updatePassword(password);    
}




export default Firebase;