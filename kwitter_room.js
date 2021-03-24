
//ADD YOUR FIREBASE LINKS HERE
var firebaseConfig = {
      apiKey: "AIzaSyBZRhVRLTKJ_DBO4M7X8e6OWn-lBzFTXtg",
      authDomain: "kwitter-df7a1.firebaseapp.com",
      projectId: "kwitter-df7a1",
      storageBucket: "kwitter-df7a1.appspot.com",
      messagingSenderId: "157434437425",
      appId: "1:157434437425:web:6b2c4904c69a80fa95da10",
      measurementId: "G-9WS3C9KR5B"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
    firebase.analytics();





    
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      console.log("Room name-"+Room_names);
      row="<div class='room_name' id="+Room_names+"onclick='redirectToRoomName(this.id)'>"+Room_names+"</div></hr>";
      document.getElementById("output").innerHTML+=row;
      //End code
      });});}
getData();

function addRoom(){
 room_name = document.getElementById("room_name").value;
 firebase.database().ref("/").child(room_name).update({purpose: "add room name"});
 localStorage.setItem("room_name", room_name);
 window.location("kwitter_room.html");
}

function redirectToRoomName(name){
      console.log(name);
      localStorage.setItem("room_name",name);
      window.location("kwitter_room.html");
}
