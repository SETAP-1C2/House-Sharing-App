function joinGroupidValid(){
    const groupId= document.querySelector("#group-id").value;

    //group id required
    if (groupId.length === 0) {
        alert("Group ID is required.");
        return false;
    };

    //length must be 5
    if (groupId.length !== 5) {
        alert("Group Id is required");
        return false;
    }

    //must be digits
    const digits= ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

    for (let i=0; i<groupId.length; i++){
        if (!digits.includes(groupId[i])) {
            alert("Id must contain only digits");
            return false;
        }
    }

    return true;
};
















