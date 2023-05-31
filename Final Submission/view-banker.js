function reply(applicationId) {
    alert('Reply Sent!');
    removeApplication(applicationId);
  }
  
  function goToHome() {
    window.location.href = "Admin.html";
  }

  function removeApplication(applicationId) {
    var application = document.getElementById('application-' + applicationId);
    if (application) {
      application.remove();
    }
  }