import * as firebase from "firebase/app";
import "firebase/database";
import "firebase/storage";
// Initialize Firebase
// var config = {
//   apiKey: "AIzaSyBX0_-nZvga0fp52r9UIPA_4FJek160aAY",
//   authDomain: "expensify-a0563.firebaseapp.com",
//   databaseURL: "https://expensify-a0563.firebaseio.com",
//   projectId: "expensify-a0563",
//   storageBucket: "expensify-a0563.appspot.com",
//   messagingSenderId: "424400787990"
// };
// firebase.initializeApp(config);

const database = firebase.database();
export const storage = firebase.storage();
export default database;
