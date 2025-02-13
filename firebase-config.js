// Import Firebase modules (if using ES6 modules, else use script tags in HTML)
const firebaseConfig = {
  apiKey: "AIzaSyBpjcP6fn7G45SBE_CEPECkND_OIfA6Gh4",
  authDomain: "authtest-f29b6.firebaseapp.com",
  projectId: "authtest-f29b6",
  storageBucket: "authtest-f29b6.appspot.com", // ✅ Corrected
  messagingSenderId: "992949443911",
  appId: "1:992949443911:web:283a399eb9173bea05c062"
};

// ✅ Initialize Firebase
firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
const db = firebase.firestore();
console.log("Firebase initialized successfully!");
