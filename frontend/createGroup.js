// ===============================
// CREATE GROUP VALIDATION LOGIC
// ===============================

//validity conditions for group name
function groupNameValid() {
  const groupName = document.querySelector("#group-name").value;
  if (groupName.length === 0) {
      alert("Group name is required.");
      return false;
  }
  if (groupName.length > 50) {
      alert("Group name must be less than 50 characters.");
      return false;
  };
  return true;
}

function  groupDescriptionValid() {
  const groupDesc = document.querySelector("#group-description").value;
  if (groupDesc.length > 200) {
      alert("description must be less than 200 characters.");
      return false;
  }
  return true;
}

function groupIdValid() {
  const groupId = document.querySelector("#group-id").value;
  if (groupId.length !== 5) {
      alert("Group ID must be exactly 5 digits.");
      return false;
  };
  const digits = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
  for (let i=0; i<groupId.length; i++){
      if (!digits.includes(groupId[i])) {
          alert("Group ID must contain only digits.");
          return false;
      };
  };
  return true;
}

function createGroupClick(event) {
  event.preventDefault();

  const groupName = document.querySelector("#group-name").value;
  const groupId = document.querySelector("#group-id").value;
  const groupDesc = document.querySelector("#group-description").value;
  const userId = localStorage.getItem("userId");

  if (!userId) {
    alert("You must be logged in to create a group.");
    return;
  }

  if (groupName.length === 0 || groupName.length > 50) {
    alert("Group name is required and must be under 50 characters.");
    return;
  }

  if (groupDesc.length > 200) {
    alert("Description must be under 200 characters.");
    return;
  }

  if (!/^[0-9]{5}$/.test(groupId)) {
    alert("Group ID must be exactly 5 digits.");
    return;
  }

  fetch("/api/create-group", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      name: groupName,
      description: groupDesc,
      code: groupId,
      userId: userId
    })
  })
    .then(res => res.text())
    .then(msg => {
      alert(msg);
      localStorage.setItem("groupName", groupName);
      localStorage.setItem("groupDescription", groupDesc);
      localStorage.setItem("groupId", groupId);
      window.location.href = "group.html";
    })
    .catch(err => {
      console.error("Group creation failed:", err);
      alert("Group creation failed.");
    });
}


const createBtn = document.querySelector("#cg-submit-button-link");
if (createBtn) {
  createBtn.addEventListener("click", createGroupClick);
}

function attachCreateGroupListener(){
  const button= document.querySelector ("#cg-submit-button-link");
  if (button !== null){
    button.addEventListener ("click", createGroupClick);
  };
};

attachCreateGroupListener()































































































