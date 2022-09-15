function Login() 
{
   username= document.getElementById("login").value;
   localStorage.setItem("user",username);
   window.location="St_Fairy's_room.html";
}