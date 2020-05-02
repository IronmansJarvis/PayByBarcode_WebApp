import app from 'firebase/app';
import 'firebase/auth';

const config = {
  apiKey: "AIzaSyBBKkJNtl_S1-pPbuW_mdMWnhPRbjf_ICs",
  authDomain: "barcode-test-682fc.firebaseapp.com",
  databaseURL: "https://barcode-test-682fc.firebaseio.com/",
  projectId: "barcode-test-682fc",
  storageBucket: "barcode-test-682fc.appspot.com",
  messagingSenderId: "695189332163",
  appId: "1:695189332163:web:c6eed7b47add98ac31c276"
};

class Firebase {
  constructor() {
    app.initializeApp(config);

    this.auth = app.auth();

   

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
