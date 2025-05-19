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




//valid for clicking
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




// adding group name to local storage
function createGroupClick() {
    if (!groupNameValid()) return;
    if (!groupDescriptionValid()) return;
    if (!groupIdValid()) return;

    const groupName = document.querySelector("#group-name").value;
    localStorage.setItem("groupName", groupName); //Save group name

    window.location.href = "group.html";
}




























































































