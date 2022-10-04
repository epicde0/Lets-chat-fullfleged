var firebaseConfig = {
      apiKey: "AIzaSyAUU9WDj1FlMTNDcSmDJCtQV431BvW8NGw",
      authDomain: "kwitter-a6c81.firebaseapp.com",
      databaseURL: "https://kwitter-a6c81-default-rtdb.firebaseio.com",
      projectId: "kwitter-a6c81",
      storageBucket: "kwitter-a6c81.appspot.com",
      messagingSenderId: "490891445809",
      appId: "1:490891445809:web:514730b479df2b525cf710",
      measurementId: "G-0QN7TEGVZP"
    };
   
firebase.initializeApp(firebaseConfig);
user_name = localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!";
function addRoom()
{

   room_name = document.getElementById("room_name").value;

   firebase.database().ref("/").child(room_name).update({
purpose : "adding room name"
});
   localStorage.setItem("room_name", room_name);
   window.location = "kwitter_page.html";

}



function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
       console.log("room_name ="+ Room_names);
       row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
      document.getElementById("output").innerHTML += row;

      });});}
getData();
function redirectToRoomName(name)
{
console.log(name);
 localStorage.setItem("room_name",name);
  window.location="kwitter_page.html";
}