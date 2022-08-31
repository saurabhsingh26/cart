import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { initializeApp } from "firebase/app";
import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyDIdJosB-ihBPBDcDFGTj_1PJlIFpxAXs0",
  authDomain: "cart-e62a5.firebaseapp.com",
  projectId: "cart-e62a5",
  storageBucket: "cart-e62a5.appspot.com",
  messagingSenderId: "954125621505",
  appId: "1:954125621505:web:488de5dedee17d7f6a2300"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);


