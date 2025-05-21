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
        <span>
            <button onclick="viewGroup(${index})" class="view-button">View</button>
            <button onclick="deleteGroup(${index})" class="delete-button">Delete</button>
        </span>
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


// ======== To delete from group lists ========
function deleteGroup(index) {
  let groups = JSON.parse(localStorage.getItem("userGroups")) || [];

  // Remove group by index
  groups.splice(index, 1);

  // Update localStorage
  localStorage.setItem("userGroups", JSON.stringify(groups));

  // Refresh view
  displayUserGroups();
}








































