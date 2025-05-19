// for task section
function showTaskSection() {
    const taskSection = document.querySelector("#task-section");
    const costSection = document.querySelector("#cost-section");
    const taskSummary = document.querySelector("#task-summary");
    const costSummary = document.querySelector("#cost-summary"); 

    if (taskSection) taskSection.classList.add("visible");
    if (costSection) costSection.classList.remove("visible");
    if (taskSummary) taskSummary.classList.remove("visible");
    if (costSummary) costSummary.classList.remove("visible"); 
}



const shareTasksButton = document.querySelector("#share-tasks");

if (shareTasksButton) {
    shareTasksButton.addEventListener("click", showTaskSection);
}









//for cost section
function showCostSection() {
    const costSection = document.querySelector("#cost-section");
    const taskSection = document.querySelector("#task-section");
    const taskSummary = document.querySelector("#task-summary"); 

    // Show cost form
    costSection.classList.add("visible");

    // Hide task form and summary
    taskSection.classList.remove("visible");
    taskSummary.classList.remove("visible"); // hides task summary
}



//hiding forms when called simultaneously
const splitCostsButton = document.querySelector("#split-costs");

if (splitCostsButton !== null) {
    splitCostsButton.addEventListener("click", showCostSection);
}







function showTaskForm() {
    // Hide all others
    document.querySelector("#cost-section").classList.remove("visible");
    document.querySelector("#task-summary").classList.remove("visible");

    // Show task section
    document.querySelector("#task-section").classList.add("visible");
}










// ========== Create and show task summary ==========
function showTaskSummary() {
    const title = document.querySelector("#task-title").value;
    const desc = document.querySelector("#task-desc").value;
    const deadline = document.querySelector("#task-deadline").value;
    const recurrence = document.querySelector("#task-recurrence").value;

    // ========== Get assigned users ==========
    const checkboxes = document.querySelectorAll(".checkbox-list input[type='checkbox']");
    let selectedUsers = [];
    for (let i = 0; i < checkboxes.length; i++) {
      if (checkboxes[i].checked) {
        const label = checkboxes[i].parentElement;
        const name = label.textContent;
        selectedUsers.push(name);
      }
    }

    // ========== Get priority color ==========
    const selectedPriority = document.querySelector(".priority.selected");
    let priorityColor = "transparent";
    if (selectedPriority) {
      const type = selectedPriority.classList;
      if (type.contains("critical")) priorityColor = "rgb(200, 0, 0)";
      else if (type.contains("important")) priorityColor = "rgb(255, 165, 0)";
      else if (type.contains("low")) priorityColor = "rgb(0, 180, 0)";
    }

    // ========== Update the task summary section ==========
    document.querySelector("#summary-task-title").textContent = title || "[Untitled]";
    document.querySelector("#summary-task-desc").textContent = desc || "No description provided.";
    document.querySelector("#summary-deadline").textContent = deadline || "—";
    document.querySelector("#summary-recurrence").textContent = recurrence || "—";
    document.querySelector("#summary-priority-box").style.backgroundColor = priorityColor;

    const assigneeList = document.querySelector("#summary-assignees");
    assigneeList.innerHTML = "";

    if (selectedUsers.length > 0) {
      for (let j = 0; j < selectedUsers.length; j++) {
        const li = document.createElement("li");
        li.textContent = selectedUsers[j];
        assigneeList.appendChild(li);
      }
    } else {
      const li = document.createElement("li");
      li.textContent = "None";
      assigneeList.appendChild(li);
    }

    document.querySelector("#task-section").classList.remove("visible");
    document.querySelector("#task-summary").classList.add("visible");
  } 

  // ========== Toggle selected class for priority buttons ==========
  const priorityButtons = document.querySelectorAll(".priority");
  for (let i = 0; i < priorityButtons.length; i++) {
    priorityButtons[i].addEventListener("click", function () {
      clearPrioritySelection();
      priorityButtons[i].classList.add("selected");
    });
  }

  // ========== Clear selected class from all priority buttons ==========
  function clearPrioritySelection() {
    for (let i = 0; i < priorityButtons.length; i++) {
      priorityButtons[i].classList.remove("selected");
    }
}








//event listener for task section to task summary
const createTaskButton = document.querySelector("#create-task-button");

if (createTaskButton !== null) {
    createTaskButton.addEventListener("click", showTaskSummary);
}

//event listener for cost section
const splitCostButton = document.querySelector("#create-cost-button");

if (splitCostButton !== null) {
    splitCostButton.addEventListener("click", showCostSummary);
}




function showCostSummary() {
    const amount = parseFloat(document.querySelector("#cost-amount").value);
    const desc = document.querySelector("#cost-desc").value;
    const deadline = document.querySelector("#cost-deadline").value;

  // Assigned users
  const checkboxes = document.querySelectorAll("#cost-section .checkbox-list input[type='checkbox']");
  let selectedUsers = [];
  for (let i = 0; i < checkboxes.length; i++) {
      if (checkboxes[i].checked) {
          const name = checkboxes[i].parentElement.textContent;
          selectedUsers.push(name);
      }
  }

  const perPersonCost = selectedUsers.length > 0 ? (amount / selectedUsers.length).toFixed(2) : "—";

  // Priority logic
  const selectedPriority = document.querySelector("#cost-section .priority.selected");
  let priorityColor = "transparent";
  let priorityMessage = "";

  if (selectedPriority) {
      const type = selectedPriority.classList;
      if (type.contains("critical")) {
        priorityColor = "rgb(200, 0, 0)";
        priorityMessage = " Urgent: You must pay immediately.";
      } else if (type.contains("important")) {
        priorityColor = "rgb(255, 165, 0)";
        priorityMessage = " Important: Payment is due soon.";
      } else if (type.contains("low")) {
        priorityColor = "rgb(0, 180, 0)";
        priorityMessage = " Reminder: You have a pending payment.";
      }
  }

  // Update summary display
  document.querySelector("#summary-cost-amount").textContent = `GBP ${amount || "—"}`;
  document.querySelector("#summary-cost-desc").textContent = desc || "No description provided.";
  document.querySelector("#summary-cost-deadline").textContent = deadline || "—";
  document.querySelector("#summary-cost-priority").style.backgroundColor = priorityColor;

  // Fill assignees with amounts and priority colors
  const costAssigneeList = document.querySelector("#summary-cost-assignees");
  costAssigneeList.innerHTML = "";

  if (selectedUsers.length > 0) {
      for (let j = 0; j < selectedUsers.length; j++) {
        const li = document.createElement("li");
        li.innerHTML = `${selectedUsers[j]} — <span style="color:${priorityColor}">GBP ${perPersonCost}</span>`;
        costAssigneeList.appendChild(li);
      }
    } else {
        const li = document.createElement("li");
        li.textContent = "None";
        costAssigneeList.appendChild(li);
    }

  // Add or update priority message
  let messagePara = document.querySelector("#summary-cost-priority-message");
  if (!messagePara) {
      messagePara = document.createElement("p");
      messagePara.id = "summary-cost-priority-message";
      document.querySelector("#cost-summary .summary-ass-date").appendChild(messagePara);
    }

    messagePara.textContent = priorityMessage;
    messagePara.style.marginTop = "1rem";
    messagePara.style.color = priorityColor;

    // Show summary, hide form
    document.querySelector("#cost-section").classList.remove("visible");
    document.querySelector("#cost-summary").classList.add("visible");
}



