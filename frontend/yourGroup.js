document.addEventListener("DOMContentLoaded", displayUserGroups);

// ========== Display all stored groups ==========
function displayUserGroups() {
  const groupList = document.querySelector("#group-list");
  const groups = JSON.parse(localStorage.getItem("userGroups")) || [];

  groupList.innerHTML = "";

  groups.forEach((group, index) => {
    const row = document.createElement("section");
    row.classList.add("table-row");

    row.innerHTML = `
      <span>${group.name}</span>
      <span>${group.id}</span>
      <span>—</span> <!-- Placeholder for member count -->
      <button onclick="viewGroup(${index})" class="view-button">View</button>
    `;

    groupList.appendChild(row);
  });
}

// ========== View button logic ==========
function viewGroup(index) {
    const groups = JSON.parse(localStorage.getItem("userGroups")) || [];
    const group = groups[index];

    localStorage.setItem("groupName", group.name);
    localStorage.setItem("groupDescription", group.description);
    localStorage.setItem("groupId", group.id);

    window.location.href = "group.html";
}
