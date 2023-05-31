function goToHome() {
    window.location.href = "../../HTML/Client/client.html";
  }
  
  document.getElementById("application-form").addEventListener("submit", function(event) {
    event.preventDefault();
    showSuccessMessage();
  });
  
  function showSuccessMessage() {
    
    
    alert('Application Sent Successfully');
    
    
    /*var container = document.createElement("div");
    container.classList.add("message-container");
  
    var messageElement = document.createElement("p");
    messageElement.textContent = "Application Sent Successfully!";
    messageElement.classList.add("message");
    messageElement.style.fontSize = "20px";
    messageElement.style.color = "green";
    
    var closeButton = document.createElement("button");
    closeButton.textContent = "Close";
    closeButton.addEventListener("click", function() {
      container.remove();
    });
  
    container.appendChild(messageElement);
    container.appendChild(closeButton);
    
    document.body.appendChild(container);*/
  }
  
  
  