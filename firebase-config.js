// ✅ Firebase Config
const firebaseConfig = {
  apiKey: "IzaSyBpjcP6fn7G45SBE_CEPECkND_OIfA6Gh4",
  authDomain: "authtest-f29b6.firebaseapp.com",
  projectId: "authtest-f29b6",
  storageBucket: "authtest-f29b6.firebasestorage.app",
  messagingSenderId: "992949443911",
  appId: "1:992949443911:web:283a399eb9173bea05c062"
};

// ✅ Initialize Firebase (Make sure it's defined globally)
firebase.initializeApp(firebaseConfig);
console.log("Firebase initialized successfully!");

// ✅ Firebase Auth
const auth = firebase.auth();
