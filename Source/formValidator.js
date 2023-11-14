document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('contact-form');
    const nameInput = document.getElementById('name');
    const emailInput = document.getElementById('email');

    // Clear text fields of the initial value when clicked
    nameInput.addEventListener('click', function () {
      if (nameInput.value === 'Your Name') {
        nameInput.value = '';
      }
    });

    emailInput.addEventListener('click', function () {
      if (emailInput.value === 'Your Email') {
        emailInput.value = '';
      }
    });

    form.addEventListener('submit', function (event) {
      if (nameInput.value === '' || nameInput.value === 'Your Name') {
        alert('Please enter your name.');
        event.preventDefault(); // Prevent form submission
      }
    });
  });