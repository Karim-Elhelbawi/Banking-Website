function goToHome() {
    window.location.href = "../../HTML/Client/client.html";
  }
  
  document.getElementById("application-form").addEventListener("submit", function(event) {
    event.preventDefault();
    showSuccessMessage();
  });
  
  function showSuccessMessage() {
    var container = document.createElement("div");
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
    
    document.body.appendChild(container);
  }
  
  function updateSubcategoryOptions() {
    var categorySelect = document.getElementById("category");
    var subcategorySelect = document.getElementById("subcategory");
    var selectedCategory = categorySelect.value;

    // Clear existing options
    subcategorySelect.innerHTML = "";

    // Add new options based on the selected category
    if (selectedCategory === "12345678987654321") {
      var cardOptions = ["1111 1111 1111 1111", "2222 2222 2222 2222"];
      cardOptions.forEach(function(option) {
        var optionElement = document.createElement("option");
        optionElement.value = option;
        optionElement.text = option;
        subcategorySelect.appendChild(optionElement);
      });
    } else if (selectedCategory === "98765432123456789") {
      var card1Options = ["3333 3333 3333 3333", "4444 4444 4444 4444"];
      card1Options.forEach(function(option) {
        var optionElement = document.createElement("option");
        optionElement.value = option;
        optionElement.text = option;
        subcategorySelect.appendChild(optionElement);
      });
    }
  }

  function handleDropdownChange() {
    var selectedValue = document.getElementById("subcategory").value;
    var element1 = document.getElementById("element1");
    var element2 = document.getElementById("element2");
    var element3 = document.getElementById("element3");
    var element4 = document.getElementById("element4");
    
    // Reset elements
    element1.style.display = "none";
    element2.style.display = "none";
    element3.style.display = "none";
    element4.style.display = "none";

    // Update elements based on selected value
    if (selectedValue === "1111 1111 1111 1111") {
      element1.style.display = "block";
    } else if (selectedValue === "2222 2222 2222 2222") {
      element2.style.display = "block";
    }else if (selectedValue === "3333 3333 3333 3333") {
      element3.style.display = "block";}
      else if (selectedValue === "4444 4444 4444 4444") {
        element4.style.display = "block";}
  }

  
  