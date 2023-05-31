function gologin(){

    var username = document.getElementById("username").value;
    var username1 = document.getElementById("username1").value;
    var username2 = document.getElementById("username2").value;
    var username3 = document.getElementById("username3").value;
    var username4 = document.getElementById("username4").value;
    var password = document.getElementById("password").value;
  
    // Redirect based on the username and password inputs
    if (username!=="" && password !== "" && username1 !== "" && username2 !== null && username3 !== null && username4 !== "") {
      alert ("Registration Successful");
      window.location.href = "../HTML/login.html";
      console.log("working");
}}

function goback(){
    window.location.href = "../HTML/login.html";
}