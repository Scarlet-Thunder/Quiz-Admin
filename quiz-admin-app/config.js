import * as firebase from "firebase";

 var firebaseConfig = {
    apiKey: "AIzaSyD__X0OjiRbuVohCGC_zmxGcNTWc9_0nFk",
    authDomain: "buzzer-app-21ced.firebaseapp.com",
    databaseURL: "https://buzzer-app-21ced-default-rtdb.firebaseio.com",
    projectId: "buzzer-app-21ced",
    storageBucket: "buzzer-app-21ced.appspot.com",
    messagingSenderId: "875532149571",
    appId: "1:875532149571:web:a1b69768fb47dcfb1a85f6",
    measurementId: "G-D8QQVMCNZE"
  };
  // Initialize Firebase
  if(!firebase.apps.length){firebase.initializeApp(firebaseConfig);}
  
  export default firebase.database()