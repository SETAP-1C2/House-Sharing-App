// ===============================
// CREATE GROUP VALIDATION LOGIC
// ===============================

function isGroupNameValid() {
  const groupName = document.querySelector("#group-name").value;

  if (groupName.length > 50) {
    alert("Group name must be 50 or less characters.");
    return false;
  }
  return true;
}































































































