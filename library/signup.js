// Function to handle form submission
function submitForm(event) {
    event.preventDefault();
  
    // Get form values
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
  
    // Validate form
    if (name === "" || email === "" || password === "") {
      document.getElementById("message").textContent = "Please fill in all fields.";
      return;
    }
  
    // Add your authentication logic here (e.g., checking if email is already registered, etc.)
  
    // Display success message
    document.getElementById("message").textContent = "Signup successful!";

    redirectToLoginPage();
    }



// Function to redirect to the login page
function redirectToLoginPage() {
  // Replace "login.html" with the actual URL or filename of your login page
  window.location.href = "library management.html";
}
  // Attach event listener
  document.getElementById("signupForm").addEventListener("submit", submitForm);
  