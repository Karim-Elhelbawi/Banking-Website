    document.getElementById("login-form").addEventListener("submit", function(event) {
        event.preventDefault();
        
        var username = document.getElementById("username").value;
        var password = document.getElementById("password").value;
    
        if (username === "client" && password === "client") {
          window.location.href = "client.html"; 
        } else if (username === "banker" && password === "banker") {
          window.location.href = "banker.html"; 
        } else if (username === "admin" && password === "admin") {
            window.location.href = "admin.html"; 
          } 
        else{
            alert("Username or Password Incorrect");
        }
      });


      /*function go(){
        var username = document.getElementById("username").value;
        var password = document.getElementById("password").value;
      
        
        if (username === "client" && password === "client") {
          window.location.href = "client.html"; 
        } else if (username === "banker" && password === "banker") {
          window.location.href = "banker.html"; 
        } else if (username === "admin" && password === "admin") {
            window.location.href = "admin.html"; 
          } 
      }
 
      function goreg(){
        window.location.href = "register.html"
      }*/


      
    

  
