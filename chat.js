const messageForm = document.querySelector("#message-form");
const messageInput = document.querySelector("#message-input");
const messageContainer = document.querySelector("#message-container");

if (messageForm) {
  messageForm.addEventListener("submit", function (event) {
    event.preventDefault();
    const message = messageInput.value.trim();

    if (message) {
      const newMessage = document.createElement("div");
      newMessage.classList.add("message");
      newMessage.textContent = message;
      messageContainer.appendChild(newMessage);

      messageInput.value = "";
    } else {
      alert("Please enter a message");
    }
  });
}
