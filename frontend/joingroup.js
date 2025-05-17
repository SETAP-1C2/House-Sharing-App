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
  if (groupIdValid()) {
    window.location.href = "group.html";
  };
};

function attachJoinGroupListener() {
  const button = document.querySelector("#join-group-btn"); // your button ID
  if (button !== null) {
    button.addEventListener("click", joinGroupClick);
  };
};


attachJoinGroupListener();
















