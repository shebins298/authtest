 // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyBpjcP6fn7G45SBE_CEPECkND_OIfA6Gh4",
    authDomain: "authtest-f29b6.firebaseapp.com",
    projectId: "authtest-f29b6",
    storageBucket: "authtest-f29b6.firebasestorage.app",
    messagingSenderId: "992949443911",
    appId: "1:992949443911:web:283a399eb9173bea05c062",
    measurementId: "G-KJX5CP98Y9"
  };



  // Initialize Firebase
firebase.initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
// Firebase Authentication
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();