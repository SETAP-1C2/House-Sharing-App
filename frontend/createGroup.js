// ===============================
// CREATE GROUP VALIDATION LOGIC
// ===============================

//Import validators
import {
  groupNameValid,
  groupDescriptionValid,
  groupIdValid
} from './validators/groupValidators.js';


function createGroupClick() {
  const groupName = document.querySelector("#group-name").value;
  const groupDesc = document.querySelector("#group-description").value;
  const groupId = document.querySelector("#group-id").value;

  const nameCheck = groupNameValid(groupName);
  const descCheck = groupDescriptionValid(groupDesc);
  const idCheck = groupIdValid(groupId);

  if (nameCheck !== "valid") {
    alert(nameCheck);
    return;
  }

  if (descCheck !== "valid") {
    alert(descCheck);
    return;
  }

  if (idCheck !== "valid") {
    alert(idCheck);
    return;
  }

  // If all validations pass, continue with creating the group
  const createdGroup = {
    name: groupName,
    id: groupId,
    description: groupDesc,
    role: "creator"
  };

  const yourGroups = JSON.parse(localStorage.getItem("userGroups")) || [];
  yourGroups.push(createdGroup);
  localStorage.setItem("userGroups", JSON.stringify(yourGroups));

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






























































































