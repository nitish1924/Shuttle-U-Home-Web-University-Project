import firebase from 'firebase/app';
import 'firebase/database';

const config = {
  apiKey: "AIzaSyCuZTDGuZnmh5VrzgEc3E8gs8EdhW-PHAo",
  authDomain: "shuttle-u-home.firebaseapp.com",
  databaseURL: "https://shuttle-u-home.firebaseio.com",
  storageBucket: "gs://shuttle-u-home.appspot.com",
};
firebase.initializeApp(config);
const db = firebase.database();

export default db;