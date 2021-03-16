import firebase from "firebase";

// ☆各プロジェクトの設定を記述
const firebaseConfig = {
  apiKey: "AIzaSyArLhXGjDi8nz91vbyeLKTwsNFQogJWcIk",
  authDomain: "kadodenikki.firebaseapp.com",
  projectId: "kadodenikki",
  storageBucket: "kadodenikki.appspot.com",
  messagingSenderId: "983141389542",
  appId: "1:983141389542:web:18403f803c51afd2d89727",
  measurementId: "G-D8D1D51BEJ",
};

if (firebase.apps.length == 0) {
  firebase.initializeApp(firebaseConfig);
}
