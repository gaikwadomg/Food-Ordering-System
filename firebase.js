
    // Import the functions you need from the SDKs you need
    import { initializeApp } from "https://www.gstatic.com/firebasejs/10.14.1/firebase-app.js";
    import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.14.1/firebase-analytics.js";
    // TODO: Add SDKs for Firebase products that you want to use
    // https://firebase.google.com/docs/web/setup#available-libraries
  
    // Your web app's Firebase configuration
    // For Firebase JS SDK v7.20.0 and later, measurementId is optional
    const firebaseConfig = {
      apiKey: "AIzaSyDTD6I23Ai0O998ClSNM35O-oMTzPLcmFc",
      authDomain: "food-website-93507.firebaseapp.com",
      projectId: "food-website-93507",
      storageBucket: "food-website-93507.appspot.com",
      messagingSenderId: "176704240800",
      appId: "1:176704240800:web:1634287a4dc6daabcf9dc5",
      measurementId: "G-NWPWHHV2NS"
    };
  
    // Initialize Firebase
    const app = initializeApp(firebaseConfig);
    const analytics = getAnalytics(app);
 
