import Rebase from 're-base'; // react firebase package
import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
	// Initialize Firebase
	apiKey: 'AIzaSyDEV3ZhiTTwikmjanopQhUTFHqaB-mYkkc',
	authDomain: 'catch-of-the-day-barb1776.firebaseapp.com',
	databaseURL: 'https://catch-of-the-day-barb1776.firebaseio.com'
});

// create your rebase bindings
const base = Rebase.createClass(firebaseApp.database()); //returns the database on the firebase site

//named export
export { firebaseApp };

export default base;
