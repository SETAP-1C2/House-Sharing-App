// ===============================
// CREATE GROUP VALIDATION LOGIC
// ===============================

//length less than 50
function isGroupNameValid() {
  const groupName = document.querySelector("#group-name").value;

  if (groupName.length > 50) {
    alert("Group name must be less than 50 characters.");
    return false;
  }
  return true;
}


//name less than 50
function isGroupDescriptionValid() {
  const groupDesc = document.querySelector("#group-desc").value;

  if (groupDesc.length > 200) {
    alert("Group description must be less than 200 characters.");
    return false;
  }
  return true;
}



































































































