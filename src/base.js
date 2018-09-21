import Rebase from 're-base'; // react firebase specific package mirrors state to firebaase
import firebase from 'firebase'; // include firebase package -- for not mirroring to state

const firebaseApp = firebase.initializeApp({
	// Initialize Firebase
	apiKey: 'AIzaSyDEV3ZhiTTwikmjanopQhUTFHqaB-mYkkc',
	authDomain: 'catch-of-the-day-barb1776.firebaseapp.com',
	databaseURL: 'https://catch-of-the-day-barb1776.firebaseio.com'
});

const base = Rebase.createClass(firebaseApp.database());

// This is a named export
export { firebaseApp };

// this is a default export
export default base;
