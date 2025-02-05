const userTable = document.querySelector("#user-table");
const addUserButton = document.querySelector("#add-user-button");
const addUserForm = document.querySelector("#add-user-form");
const usernameInput = document.querySelector("#new-username");
const roleInput = document.querySelector("#new-role");

if (addUserButton) {
  addUserButton.addEventListener("click", function () {
    addUserForm.classList.toggle("active");
  });
}

if (addUserForm) {
  addUserForm.addEventListener("submit", function (event) {
    event.preventDefault();
    const username = usernameInput.value.trim();
    const role = roleInput.value.trim();

    if (username && role) {
      const newRow = document.createElement("tr");
      newRow.innerHTML = `<td>${username}</td><td>${role}</td><td><button class="delete-btn">Delete</button></td>`;
      userTable.appendChild(newRow);
      usernameInput.value = "";
      roleInput.value = "";
    } else {
      alert("Please enter both username and role");
    }
  });
}

const tickets = document.querySelectorAll(".ticket");
const resolveButtons = document.querySelectorAll(".resolve-btn");

resolveButtons.forEach(function (button) {
  button.addEventListener("click", function () {
    const ticketRow = this.closest(".ticket");
    ticketRow.classList.add("resolved");
    alert("Ticket resolved!");
  });
});
