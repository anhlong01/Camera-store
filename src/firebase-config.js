// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAfzQ2czotsIFv6Inpa_NC3sTeB8zKA8ns",
  authDomain: "camera-store-60351.firebaseapp.com",
  databaseURL: "https://camera-store-60351-default-rtdb.firebaseio.com",
  projectId: "camera-store-60351",
  storageBucket: "camera-store-60351.appspot.com",
  messagingSenderId: "190187591941",
  appId: "1:190187591941:web:8e1120aafd7549953aff6c",
  measurementId: "G-N7N6FJDSHZ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);