document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("guest-form");
  const nameInput = document.getElementById("guest-name");
  const categorySelect = document.getElementById("guest-category");
  const guestList = document.getElementById("guest-list");

  form.addEventListener("submit", function (event) {
    event.preventDefault();

    const name = nameInput.value.trim();
    const category = categorySelect.value;

    if (!name) return;

    if (guestList.children.length >= 10) {
      alert("Guest list is full. Maximum of 10 guests allowed.");
      return;
    }

    const li = document.createElement("li");

    const guestInfo = document.createElement("div");
    guestInfo.innerHTML = `
      <strong>${name}</strong>
      <span class="badge ${category}">${category}</span>
      <div class="timestamp">${new Date().toLocaleString()}</div>
    `;

    const buttonsDiv = document.createElement("div");
    buttonsDiv.className = "buttons";

    const rsvpBtn = document.createElement("button");
    rsvpBtn.textContent = "RSVP: Not Attending";
    rsvpBtn.addEventListener("click", () => {
      rsvpBtn.textContent =
        rsvpBtn.textContent === "RSVP: Attending"
          ? "RSVP: Not Attending"
          : "RSVP: Attending";
    });

    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Remove";
    deleteBtn.addEventListener("click", () => {
      li.remove();
    });

    buttonsDiv.appendChild(rsvpBtn);
    buttonsDiv.appendChild(deleteBtn);

    li.appendChild(guestInfo);
    li.appendChild(buttonsDiv);
    guestList.appendChild(li);

    form.reset();
  });
});
