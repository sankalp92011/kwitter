function sentbutton()
{
    var name=document.getElementById("sankalp").value;
localStorage.setItem("user_name",name);
window.location="kwitter_room.html";

}