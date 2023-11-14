// This Js method will be called when the user clicks on the images to open the modal
// The modal will be opened and the image will be displayed in fullscreen
// The user can close the modal by clicking outside the modal content, this is intuitive for both desktop & mobile users
// This script is used for both about.html & shop.html pages to avoid code duplication

function openModal(modalId) {
    var modal = document.getElementById(modalId);
    modal.style.display = "block";
  }
  
  // Method to close a modal
  function closeModal(modalId) {
    var modal = document.getElementById(modalId);
    modal.style.display = "none";
  }
  
  // This will close the modal when the user clicks outside the modal content
  window.onclick = function (event) {
    if (event.target.className === "modal") {
      event.target.style.display = "none";
    }
  };