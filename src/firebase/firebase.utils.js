import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = 
    {
    apiKey: "AIzaSyBAuVEl6V3PPRMqf_dXYoJDR3kMBaIHD_c",
    authDomain: "clothing-ecommerce-store-db.firebaseapp.com",
    databaseURL: "https://clothing-ecommerce-store-db.firebaseio.com",
    projectId: "clothing-ecommerce-store-db",
    storageBucket: "clothing-ecommerce-store-db.appspot.com",
    messagingSenderId: "930184406962",
    appId: "1:930184406962:web:6e1531a30afc85676726ab",
    measurementId: "G-8PDGF02CG0"
  };

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({
    prompt: 'select_account' 
});

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;

