function reply(applicationId) {
    alert('Reply Sent!');
    removeApplication(applicationId);
  }
  
  function requestrep() {
    alert('Card Replacement Requested');
  } 
    
  function goToHome() {
    window.location.href = "../../HTML/Banker/banker.html";
  }

  function removeApplication(applicationId) {
    var application = document.getElementById('application-' + applicationId);
    if (application) {
      application.remove();
    }
  }

  function Block() {
    alert('Credit Card Blocked!!');
  } 