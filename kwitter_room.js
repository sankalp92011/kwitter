// Your web app's Firebase configuration
const firebaseConfig = {
      apiKey: "AIzaSyDaoI3i6LBc98wPNfjCaxPPvL5ABuhZc1g",
      authDomain: "kwitter2-af106.firebaseapp.com",
      databaseURL: "https://kwitter2-af106-default-rtdb.firebaseio.com",
      projectId: "kwitter2-af106",
      storageBucket: "kwitter2-af106.appspot.com",
      messagingSenderId: "975652318354",
      appId: "1:975652318354:web:21c5f94e350cd10d7f8a4b"
    };
    
    
    firebase.initializeApp(firebaseConfig);
//ADD YOUR FIREBASE LINKS HERE
ravi=localStorage.getItem("user_name");
document.getElementById("minecraft").innerHTML="Welcom to the room "+ravi;
function addroom()
{
      roomname=document.getElementById("plane").value;
      firebase.database().ref("/").child(roomname).update({
         purpes: "adding room" 
      });
      localStorage.setItem("sankalp",roomname);
      window.location="kwitter_page.html";
}

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
console.log(Room_names);
row="<div class='room_names' id="+Room_names+" onclick='nextroom(this.id)'>"+Room_names+"</div> </hr>";
document.getElementById("output").innerHTML+=row;
      //End code
      });});}
getData();
function logout()
{
localStorage.removeItem("user_name");
localStorage.removeItem("sankalp");
window.location="index.html";

}