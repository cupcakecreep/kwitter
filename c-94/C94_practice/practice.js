
  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  var firebaseConfig = {
    apiKey: "AIzaSyAQxN1KiNOEDHLUMZ-u3CPkjlbaNvsPPIs",
    authDomain: "kwitter-81cf8.firebaseapp.com",
    databaseURL: "https://kwitter-81cf8-default-rtdb.firebaseio.com",
    projectId: "kwitter-81cf8",
    storageBucket: "kwitter-81cf8.appspot.com",
    messagingSenderId: "12375851102",
    appId: "1:12375851102:web:1780d16f87a974ad6e34cf",
    measurementId: "G-B5JERW5V08"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();

function addUser() 
{
     user_name = document.getElementById("user_name").value;
      firebase.database().ref("/").child(user_name).update({ purpose : "adding user" });
     }