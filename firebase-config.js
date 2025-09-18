// firebase-config.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.9.1/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/11.9.1/firebase-analytics.js";
import { getDatabase } from "https://www.gstatic.com/firebasejs/11.9.1/firebase-database.js";

const firebaseConfig = {
  apiKey: "AIzaSyDjkGtoHPyxnDSVHoOMdDqrS7oKEb62joo",
  authDomain: "check-ef6de.firebaseapp.com",
  databaseURL: "https://check-ef6de-default-rtdb.firebaseio.com",
  projectId: "check-ef6de",
  storageBucket: "check-ef6de.firebasestorage.app",
  messagingSenderId: "720434125812",
  appId: "1:720434125812:web:df833050971ec31e4137a1",
  measurementId: "G-XVC0R1J8LV"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getDatabase(app);

// Export the initialized services
export { app, analytics, db };