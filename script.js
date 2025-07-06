// Requirement 1: Show "Hello, [name]" after successful login
function login() {
  const user = document.getElementById("username").value;
  const pass = document.getElementById("password").value;

  if (user === "admin" && pass === "1234") {
    document.getElementById("greeting").innerText = "Hello, " + user;
    document.getElementById("greeting").style.display = "block";
    document.getElementById("error-message").innerText = "";
  } else {
    // Requirement 2: Show error message and clear inputs
    document.getElementById("error-message").innerText = "Incorrect username or password.";
    document.getElementById("username").value = "";
    document.getElementById("password").value = "";
    document.getElementById("greeting").style.display = "none";
  }
}

// Requirement 3: Show fields based on dropdown
function displayFields() {
  document.getElementById("computerFields").style.display = "none";
  document.getElementById("softwareFields").style.display = "none";
  document.getElementById("networkFields").style.display = "none";

  const type = document.getElementById("ticketType").value;
  if (type === "computer") {
    document.getElementById("computerFields").style.display = "block";
  } else if (type === "software") {
    document.getElementById("softwareFields").style.display = "block";
  } else if (type === "network") {
    document.getElementById("networkFields").style.display = "block";
  }
}

// Requirement 4: Automatically add timestamp on form submit
function submitTicket() {
  const now = new Date();
  document.getElementById("timestamp").value = now.toISOString();
  alert("Ticket submitted at: " + now.toLocaleString());
  return true;
}
