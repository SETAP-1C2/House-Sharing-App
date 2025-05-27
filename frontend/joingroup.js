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



function joinGroupClick() {
    if (!groupIdValid()) {
      return;
    }

    const inputId = document.querySelector("#group-id").value;
    const groups = JSON.parse(localStorage.getItem("userGroups")) || [];

    // Check if the ID exists
    let found = false;
    let existingGroup=null;

    for (let i = 0; i < groups.length; i++) {
        if (groups[i].id === inputId) {
          found = true;
          existingGroup = groups[i];
          break;
        }
    }

    if (!found) {
        alert(`Group ID "${inputId}" does not exist.`);
        return;
    }


    // To check if the group is already in the user's list
    const joinedGroups = JSON.parse(localStorage.getItem("userGroups")) || [];
    let alreadyJoined = false;

    for (let j = 0; j < joinedGroups.length; j++) {
      if (joinedGroups[j].id === existingGroup.id) {
          alreadyJoined = true;
          break;
      }
    }

    // Add to your groups list if not already there
    if (!alreadyJoined) {
        const joinedAsMember = {
            name: existingGroup.name,
            id: existingGroup.id,
            description: existingGroup.description,
            role: "member"
        };

        joinedGroups.push(joinedAsMember);
        localStorage.setItem("userGroups", JSON.stringify(joinedGroups));
    }

    //Store selected group in localStorage before redirecting
    localStorage.setItem("groupName", existingGroup.name);
    localStorage.setItem("groupDescription", existingGroup.description);
    localStorage.setItem("groupId", existingGroup.id);


    // Proceed to group.html
    window.location.href = "group.html";
}


// event listener for join group button
function attachJoinGroupListener() {
    const button = document.querySelector("#join-group-btn");
    if (button) {
      button.addEventListener("click", joinGroupClick);
    }
}

attachJoinGroupListener();


















