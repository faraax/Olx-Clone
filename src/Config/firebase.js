import firebase from "firebase/app"
import "firebase/auth"
import "firebase/database"


var firebaseConfig = {
    apiKey: "AIzaSyDoWdrsi_LlaY2BWn3jFd1x_beTzNcdofE",
    authDomain: "olx-clone-assignment-17a8e.firebaseapp.com",
    databaseURL: "https://olx-clone-assignment-17a8e.firebaseio.com",
    projectId: "olx-clone-assignment-17a8e",
    storageBucket: "olx-clone-assignment-17a8e.appspot.com",
    messagingSenderId: "32362241605",
    appId: "1:32362241605:web:b5185b2bdede42518f0d2c",
    measurementId: "G-HRN7XX7HTH"
  };



var fb = firebase.initializeApp(firebaseConfig);

export default fb
