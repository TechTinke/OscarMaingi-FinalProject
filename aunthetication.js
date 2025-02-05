const loginForm = document.querySelector("#login-form");
const usernameField = document.querySelector("#username");
const passwordField = document.querySelector("#password");

if (loginForm) {
  loginForm.addEventListener("submit", function (event) {
    event.preventDefault();
    const username = usernameField.value.trim();
    const password = passwordField.value.trim();

    if (username && password) {
      alert("Login successful!");
    } else {
      alert("Please enter a valid username and password");
    }
  });
}

const registerForm = document.querySelector("#register-form");
const agentNameField = document.querySelector("#agent-name");
const agentEmailField = document.querySelector("#agent-email");

if (registerForm) {
  registerForm.addEventListener("submit", function (event) {
    event.preventDefault();
    const agentName = agentNameField.value.trim();
    const agentEmail = agentEmailField.value.trim();

    if (agentName && agentEmail) {
      alert("Agent registration successful!");
    } else {
      alert("Please fill in all the required fields");
    }
  });
}
