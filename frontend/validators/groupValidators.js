function groupNameValid(name) {
  if (!name) return "Group name is required.";
  if (name.length > 50) return "Group name must be less than 50 characters.";
  return "valid";
}

function groupDescriptionValid(desc) {
  if (desc.length > 200) return "Description must be less than 200 characters.";
  return "valid";
}

function groupIdValid(id) {
  if (id.length !== 5) return "Group ID must be exactly 5 digits.";
  if (!/^[0-9]+$/.test(id)) return "Group ID must contain only digits.";
  return "valid";
}

module.exports = { groupNameValid, groupDescriptionValid, groupIdValid };
