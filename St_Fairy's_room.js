const firebaseConfig = {
    apiKey: "AIzaSyBxeZ15o2uC-6kYVv3UF8GZmuwvbWAcItM",
    authDomain: "kwitter-9e074.firebaseapp.com",
    databaseURL: "https://kwitter-9e074-default-rtdb.firebaseio.com",
    projectId: "kwitter-9e074",
    storageBucket: "kwitter-9e074.appspot.com",
    messagingSenderId: "281660741611",
    appId: "1:281660741611:web:9a644a0a9de66b73bb6bae"
  };

  const app = initializeApp(firebaseConfig);

  
  var username= localStorage.getItem("user");
  document.getElementById("u_name_display").innerHTML= "Welcome "+username+"!";
  function Add_Room() 
  {
   room= document.getElementById("add-room").value;
   firebase.database().ref("/").child(room).update
   ({
purpose: "addRoomName"
    });
    localStorage.setItem("my_room",room);
    window.location= "";
  }
  function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
    Room_names = childKey;
   //Start code

   //End code
   });});}
getData();

function Logout() {
    localStorage.removeItem("user");
    window.location= "St_Fairy's.html"
}