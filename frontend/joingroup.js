function groupIdValid(){
    const groupId= document.querySelector("#group-id").value;

    //group id required
    if (groupId.length === 0) {
        alert("Group ID is required.");
        return false;
    };

    //length must be 5
    if (groupId.length !== 5) {
        alert("ID must be exactly 5 digits");
        return false;
    }

    //must be digits
    const digits= ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

    for (let i=0; i<groupId.length; i++){
        if (!digits.includes(groupId[i])) {
            alert("Group ID must contain only digits.");
            return false;
        };
    };

    return true;
};



function joinGroupClick(event) {
  event.preventDefault();

  const groupId = document.querySelector("#group-id").value;
  const userId = localStorage.getItem("userId");

  if (!userId) {
    alert("You must be logged in to join a group.");
    return;
  }

  if (!groupIdValid()) {
    return;
  }

  fetch("/api/join-group", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ code: groupId, userId: userId })
  })
    .then(res => res.json())
    .then(data => {
      if (data.success) {
        localStorage.setItem("groupName", data.name);
        localStorage.setItem("groupDescription", data.description);
        localStorage.setItem("groupId", groupId);
        window.location.href = "group.html";
      } else {
        alert(data.message);
      }
    })
    .catch(err => {
      console.error("Error joining group:", err);
      alert("Could not join group.");
    });
}


// event listener for join group button
function attachJoinGroupListener() {
    const button = document.querySelector("#join-group-btn");
    if (button) {
      button.addEventListener("click", joinGroupClick);
    }
}

attachJoinGroupListener();


















