// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase";

const firebaseConfig = {
	apiKey: "AIzaSyBJp1-B3bw8jCLA8vPNWPNgNyBFtMeNgAA",
	authDomain: "clone-85deb.firebaseapp.com",
	projectId: "clone-85deb",
	storageBucket: "clone-85deb.appspot.com",
	messagingSenderId: "943058345337",
	appId: "1:943058345337:web:6e54362950799d015b23a8",
	measurementId: "G-GWF8JBN66Y",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
