    document.getElementById("login-form").addEventListener("submit", function(event) {
        event.preventDefault();
        // Get the username and password input values
        var username = document.getElementById("username").value;
        var password = document.getElementById("password").value;
      
        // Redirect based on the username and password inputs
        if (username === "client" && password === "client") {
          window.location.href = "../HTML/Client/client.html"; // Redirect to admin.html for admin user
        } else if (username === "banker" && password === "banker") {
          window.location.href = "../HTML/Banker/banker.html"; // Redirect to user.html for regular user
        } else if (username === "admin" && password === "admin") {
            window.location.href = "../HTML/Admin/admin.html"; // Redirect to user.html for regular user
          } 
          else if (username === "Souna" && password === "sonson") {
            window.location.href = "../HTML/Admin/admin.html"; // Redirect to user.html for regular user
          } 
          else if (username === "Kamoola" && password === "chelsea") {
            window.location.href = "../HTML/banker/banker.html"; // Redirect to user.html for regular user
          } 
      });
/*
      function go(){
        var username = document.getElementById("username").value;
        var password = document.getElementById("password").value;
      
        // Redirect based on the username and password inputs
        if (username === "client" && password === "client") {
          window.location.href = "../HTML/Client/client.html"; // Redirect to admin.html for admin user
        } else if (username === "banker" && password === "banker") {
          window.location.href = "../HTML/Banker/banker.html"; // Redirect to user.html for regular user
        } else if (username === "admin" && password === "admin") {
            window.location.href = "../HTML/Admin/admin.html"; // Redirect to user.html for regular user
          } 
          else if (username === "Souna" && password === "sonson") {
            window.location.href = "../HTML/Admin/admin.html"; // Redirect to user.html for regular user
          } 
          else if (username === "Kamoola" && password === "chelsea") {
            window.location.href = "../HTML/banker/banker.html"; // Redirect to user.html for regular user
          } 
      }
 
      function goreg(){
        window.location.href = "../HTML/register.html"
      }
      */
    // Example: Validate credentials, redirect to dashboard, etc.

  