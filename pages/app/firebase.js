import { initializeApp } from "firebase/app";
import {

    getFirestore,
 
  } from "firebase/firestore";


const firebaseConfig = {
    apiKey: "AIzaSyD1Oj5lNdU2V15D_HwtrxJlWV2prXMQt9E",
    authDomain: "olap-c0d1e.firebaseapp.com",
    projectId: "olap-c0d1e",
    storageBucket: "olap-c0d1e.appspot.com",
    messagingSenderId: "568052557238",
    appId: "1:568052557238:web:189f7efb0ce1a4a98f0d17",
    measurementId: "G-GTQW4TV45C",
  };
  
  const app = initializeApp(firebaseConfig);
  const db = getFirestore(app);
  export {app,db}
  