//YOUR FIREBASE LINKS
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
    username=localStorage.getItem("user_name");
room_name=localStorage.getItem("sankalp");
console.log(room_name);
function send()
{
      messege=document.getElementById("cod").value;
      firebase.database().ref(room_name).push({
            user_name: username,
            message:message,
            like:0
      });
      document.getElementById("cod").value="";

}
function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code
yourname=message_data['user_name'];
message=message_data['message'];
like=message_data['like'];
displayname="<h3>"+yourname+"<img src='tick.png'></h3>";
displaymeassage="<h4>"+message+"</h4>";
displaylike="button id='"+ firebase_message_id+"' value="+like+" onclick=' updatelike(this.id)'>";
button="<span class='glyphicon glyphicon-thumbs-up'>like="+like+"</span></button>";
row=displayname+displaymeassage+displaylike+button;
document.getElementById("output").innerHTML=row;
//End code
      } });  }); }
getData();
