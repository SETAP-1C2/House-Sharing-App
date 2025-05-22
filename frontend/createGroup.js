// ===============================
// CREATE GROUP VALIDATION LOGIC
// ===============================

//validity conditions for group name
function groupNameValid() {
  const groupName = document.querySelector("#group-name").value;

  // check if nothing is entered
  if (groupName.length === 0) {
      alert("Group name is required.");
      return false;
  }

  //length less than 50
  if (groupName.length > 50) {
      alert("Group name must be less than 50 characters.");
      return false;
  };
  return true;
}


//name less than 50
function  groupDescriptionValid() {
  const groupDesc = document.querySelector("#group-description").value;

  if (groupDesc.length > 200) {
      alert("description must be less than 200 characters.");
      return false;
  }
  return true;
}


//characters must be numbers and 5 digits
function groupIdValid() {
  const groupId = document.querySelector("#group-id").value;

  //must be 5 digits
  if (groupId.length !== 5) {
      alert("Group ID must be exactly 5 digits.");
      return false;
  };


  //characters must be numbers
  const digits = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
  for (let i=0; i<groupId.length; i++){
      if (!digits.includes(groupId[i])) {
          alert("Group ID must contain only digits.");
          return false;
      };
  };

  return true;
}
// Uniqueness check: implement this to the databse constrauint, dont forget
  "DO NOT FORGET"
  "You shoukd have a database for the check"
//   for (let i = 0; i < usedGroupIds.length; i++) {
//     if (groupId === usedGroupIds[i]) {
//       alert("Group ID already exists. Please choose another.");
//       return false;
//     }
//   }

//   return true;
// }




//valid for clicking (local storage added)
function createGroupClick(){
    if (!groupNameValid()) {
      return;
    }

    if (!groupDescriptionValid()) {
      return;
    }

    if (!groupIdValid()) {
      return;
    }

    const groupName = document.querySelector("#group-name").value;
    const groupId = document.querySelector("#group-id").value;
    const groupDesc = document.querySelector("#group-description").value;

    const createdGroup= {
      name: groupName,
      id: groupId,
      description: groupDesc,
      role: "creator"
    };

    //get the existing group 
    const yourGroups= JSON.parse(localStorage.getItem("userGroups")) || [];
    yourGroups.push (createdGroup);

    localStorage.setItem("userGroups", JSON.stringify (yourGroups));


    //stored the group in a local storage to display in group.html.
    localStorage.setItem("groupName", groupName);
    localStorage.setItem("groupDescription", groupDesc);
    localStorage.setItem("groupId", groupId);

    window.location.href = "group.html";
}



//event listener
function attachCreateGroupListener(){
  const button= document.querySelector ("#cg-submit-button-link");
  if (button !== null){
    button.addEventListener ("click", createGroupClick);
  };
};


attachCreateGroupListener()






























































































