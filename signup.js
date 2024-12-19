// JavaScript function to validate the form
function validateForm() {
    var fullName = document.getElementById("fullName").value;
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    var confirmPassword = document.getElementById("confirmPassword").value;
  
    // Check if fullName is empty
    if (fullName === "") {
      alert("Full Name is required.");
      return false;
    }
  
    // Check if email is empty or invalid
    if (email === "" || !validateEmail(email)) {
      alert("Please enter a valid email address.");
      return false;
    }
  
    // Check if password is empty
    if (password === "") {
      alert("Password is required.");
      return false;
    }
  
    // Check if passwords match
    if (password !== confirmPassword) {
      alert("Passwords do not match.");
      return false;
    }
  
    // If all validations pass, submit the form
    return true;
  }
  
  // Function to validate email format
  function validateEmail(email) {
    var emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    return emailPattern.test(email);
  }
  