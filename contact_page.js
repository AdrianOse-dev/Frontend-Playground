// Wait for the DOM (HTML) to fully load before running the script
document.addEventListener("DOMContentLoaded", function () {
  // 1. Select the "Send" button and the input fields
  const sendButton = document.getElementById("contact_page_button");
  const nameInput = document.getElementById("name");
  const emailInput = document.getElementById("email");
  const messageInput = document.getElementById("message");

  // 2. Add an 'event listener' for the click event
  sendButton.addEventListener("click", function (event) {
    event.preventDefault();

    // 4. Get the current values from the boxes
    const nameValue = nameInput.value.trim();
    const emailValue = emailInput.value.trim();
    const messageValue = messageInput.value.trim();

    // 5. Validation Logic
    // Check if Name is empty
    if (nameValue === "") {
      alert("Error: Please enter your name.");
      return; // Stop the function here
    }

    // Check if Email is valid (using a simple Regular Expression)

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(emailValue)) {
      alert("Error: Please enter a valid email address.");
      return;
    }

    // Check if Message is empty
    if (messageValue === "") {
      alert("Error: Please write a message.");
      return;
    }

    // 6. Success
    // If we passed all checks above, we show success
    alert("Success! Thank you, " + nameValue + ". Your message has been sent.");

    nameInput.value = "";
    emailInput.value = "";
    messageInput.value = "";
  });
});
