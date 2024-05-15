document.addEventListener('DOMContentLoaded', function() {
  const emailInput = document.getElementById('email');
  const emailError = document.getElementById('email-error');

  emailInput.addEventListener('blur', function() {
    const email = emailInput.value;
    if (!isValidEmail(email)) {
      emailError.textContent = 'Invalid email format';
    } else {
      emailError.textContent = '';
    }
  });

  function isValidEmail(email) {
    // Basic email validation regex
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }
});
