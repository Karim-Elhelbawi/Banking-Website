function goToHome() {
    window.location.href = "client.html";
  }
  
  document.getElementById("application-form").addEventListener("submit", function(event) {
    event.preventDefault();
    
    
  });
  
  function showSuccessMessage() {

    alert('Points Redeemed as cash to your account!');
    /*
    var container = document.createElement("div");
    container.classList.add("message-container");
  
    var messageElement = document.createElement("p");
    messageElement.textContent = "Points Redeemed as cash to your account!";
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

  function showFailMessage() {

    alert('You Dont Have Enough Points!');

    /*
    var container = document.createElement("div");
    container.classList.add("message-container");
  
    var messageElement = document.createElement("p");
    messageElement.textContent = "You Dont Have Enough Points!";
    messageElement.classList.add("message");
    messageElement.style.fontSize = "20px";
    messageElement.style.color = "red";
    
    var closeButton = document.createElement("button");
    closeButton.textContent = "Close";
    closeButton.addEventListener("click", function() {
      container.remove();
    });

    
  
    container.appendChild(messageElement);
    container.appendChild(closeButton);
    
    document.body.appendChild(container);*/
  }
  
  
  