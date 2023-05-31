  function acceptApplication(applicationId) {
    alert('Application ' + applicationId + ' accepted');
    removeApplication(applicationId);
  }
  
  function rejectApplication(applicationId) {
    alert('Application ' + applicationId + ' rejected');
    removeApplication(applicationId);
  } 
  
  function removeApplication(applicationId) {
    var application = document.getElementById('application-' + applicationId);
    if (application) {
      application.remove();
    }
  }
    
  function goToHome() {
    window.location.href = "../../HTML/Banker/banker.html";
  }