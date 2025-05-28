document.addEventListener("DOMContentLoaded", () => {
  fetchUserGroups();
  loadYourGroups();
});

// Fetches user's groups from the server
function fetchUserGroups() {
  const userId = localStorage.getItem("userId");

  if (!userId) {
    alert("You need to be logged in to view your groups.");
    return;
  }

  fetch(`/api/user-groups?userId=${userId}`)
    .then(res => res.json())
    .then(groups => displayUserGroups(groups))
    .catch(err => {
      console.error("Failed to load groups:", err);
      alert("Could not load your groups.");
    });
}

// Displays the list of user groups on the page
function displayUserGroups(groups) {
  const groupList = document.querySelector("#group-list");
  const emptyText = document.querySelector("#empty-group-text");

  groupList.innerHTML = "";

  if (groups.length === 0) {
    emptyText.style.display = "block";
    return;
  }

  emptyText.style.display = "none";

  groups.forEach((group, index) => {
    const row = document.createElement("section");
    row.className = "table-row";
    row.innerHTML = `
      <span>${group.name || group.group_name}</span>
      <span>${group.code || group.id}</span>
      <span>${group.role || "—"}</span>
      <span>—</span>
      <section class="action-buttons">
        <button onclick="viewGroup(${index})" class="view-button">View</button>
        <button onclick="deleteGroup(${index})" class="delete-button">Delete</button>
      </section>
    `;
    groupList.appendChild(row);
  });

  localStorage.setItem("userGroups", JSON.stringify(groups));
}

// When a user clicks "View", this stores info and redirects
function viewGroup(index) {
  const groups = JSON.parse(localStorage.getItem("userGroups")) || [];
  const group = groups[index];
  localStorage.setItem("groupName", group.name || group.group_name);
  localStorage.setItem("groupDescription", group.description || "");
  localStorage.setItem("groupId", group.code || group.id);
  window.location.href = "group.html";
}

// Deletes a group from localStorage display (not from DB)
function deleteGroup(index) {
  let groups = JSON.parse(localStorage.getItem("userGroups")) || [];
  const group = groups[index];
  const confirmed = confirm(`Delete group "${group.name}"?`);
  if (!confirmed) return;
  groups.splice(index, 1);
  localStorage.setItem("userGroups", JSON.stringify(groups));
  displayUserGroups(groups);
}

// Legacy function if another view section needs a backup load
function loadYourGroups() {
  const userId = localStorage.getItem("userId");

  if (!userId) {
    alert("You need to be logged in to view your groups.");
    return;
  }

  fetch(`/api/user-groups?userId=${userId}`)
    .then(response => response.json())
    .then(groups => {
      const container = document.querySelector("#your-groups");
      if (container) {
        container.innerHTML = "";

        if (groups.length === 0) {
          container.textContent = "No groups joined yet.";
          return;
        }

        groups.forEach(group => {
          const p = document.createElement("p");
          p.textContent = `Group ID: ${group.id}, Name: ${group.group_name}`;
          container.appendChild(p);
        });
      }
    })
    .catch(err => {
      console.error(err);
      alert("Could not load your groups");
    });
}
