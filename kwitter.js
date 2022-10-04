var firebaseConfig = {
    apiKey: "AIzaSyDjTo_vce36HkYSJ0OlENBK-7e6JqL1HHk",
    authDomain: "my-practice-82a81.firebaseapp.com",
    databaseURL: "https://my-practice-82a81-default-rtdb.firebaseio.com",
    projectId: "my-practice-82a81",
    storageBucket: "my-practice-82a81.appspot.com",
    messagingSenderId: "416454583909",
    appId: "1:416454583909:web:16103fd9c0acd762ecc88c",
    measurementId: "G-PNZLFGRPJM"
  };
firebase.initializeApp(firebaseConfig);

function addUser() {
 
user_name = document.getElementById("user_name").value;

localStorage.setItem("user_name", user_name);

window.location = "kwitter_room.html";
}