function addUser(){
    username = document.getElementById("username").value;
    localStorage.setItem("username",username);
    window.location="Kwitter_room.html";
}
// Your web app's Firebase configuration
