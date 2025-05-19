// ======================================
// TASK SUMMARY SETUP AFTER CREATE TASK
// ======================================



// local storage for group name
document.addEventListener("DOMContentLoaded", function () {
  const groupName = localStorage.getItem("groupName");
  if (groupName) {
    document.querySelector(".group-title").textContent = `Group: ${groupName}`;
  }
});







// Attach click listener to Create Task button
const createTaskBtn = document.querySelector("#create-task-button");
if (createTaskBtn !== null) {
  createTaskBtn.addEventListener("click", showTaskSummary);
}

// Attach click listener to Split Cost button
const splitCostBtn = document.querySelector("#create-cost-button");
if (splitCostBtn !== null) {
  splitCostBtn.addEventListener("click", showCostSummary);
}

// Attach click listener to Share Tasks button
const shareTasksButton = document.querySelector("#share-tasks");
if (shareTasksButton) {
  shareTasksButton.addEventListener("click", showTaskSection);
}

// ========== Create and show task summary ==========
function showTaskSummary() {
  const title = document.querySelector("#task-title").value;
  const desc = document.querySelector("#task-desc").value;
  const deadline = document.querySelector("#task-deadline").value;
  const recurrence = document.querySelector("#task-recurrence").value;

  const checkboxes = document.querySelectorAll(".checkbox-list input[type='checkbox']");
  let selectedUsers = [];
  for (let i = 0; i < checkboxes.length; i++) {
    if (checkboxes[i].checked) {
      const name = checkboxes[i].nextSibling.nodeValue.trim();
      selectedUsers.push(name);
    }
  }

  const selectedPriority = document.querySelector(".priority.selected");
  let priorityColor = "transparent";
  if (selectedPriority) {
    const type = selectedPriority.classList;
    if (type.contains("critical")) priorityColor = "rgb(200, 0, 0)";
    else if (type.contains("important")) priorityColor = "rgb(255, 165, 0)";
    else if (type.contains("low")) priorityColor = "rgb(0, 180, 0)";
  }

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

// ========== Create and show cost summary ==========
function showCostSummary() {
  const amount = parseFloat(document.querySelector("#cost-amount").value);
  const desc = document.querySelector("#cost-desc").value;
  const deadline = document.querySelector("#cost-deadline").value;
  const recurrence = document.querySelector("#cost-recurrence").value;

  const checkboxes = document.querySelectorAll("#cost-section .checkbox-list input[type='checkbox']");
  let selectedUsers = [];
  for (let i = 0; i < checkboxes.length; i++) {
    if (checkboxes[i].checked) {
      const name = checkboxes[i].nextSibling.nodeValue.trim();
      selectedUsers.push(name);
    }
  }

  const perPersonCost = selectedUsers.length > 0 ? (amount / (selectedUsers.length + 1)).toFixed(2) : "—";

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

  document.querySelector("#summary-cost-amount").textContent = `GBP ${amount || "—"}`;
  document.querySelector("#summary-cost-desc").textContent = desc || "No description provided.";
  document.querySelector("#summary-cost-deadline").textContent = deadline || "—";
  document.querySelector("#summary-cost-priority").style.backgroundColor = priorityColor;

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

  let messagePara = document.querySelector("#summary-cost-priority-message");
  if (!messagePara) {
    messagePara = document.createElement("p");
    messagePara.id = "summary-cost-priority-message";
    document.querySelector("#cost-summary .summary-ass-date").appendChild(messagePara);
  }

  messagePara.textContent = priorityMessage;
  messagePara.style.marginTop = "1rem";
  messagePara.style.color = priorityColor;

  let recurrenceSpan = document.querySelector("#summary-cost-recurrence");
  if (!recurrenceSpan) {
    const p = document.createElement("p");
    p.className = "summary-recurrence";
    p.innerHTML = `<strong>Recurrence:</strong> <span id="summary-cost-recurrence">${recurrence || "—"}</span>`;
    document.querySelector("#cost-summary .summary-ass-date").appendChild(p);
  } else {
    recurrenceSpan.textContent = recurrence || "—";
  }

  document.querySelector("#cost-section").classList.remove("visible");
  document.querySelector("#cost-summary").classList.add("visible");
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

// ========== Show task form and hide others ==========
function showTaskSection() {
  const taskSection = document.querySelector("#task-section");
  const costSection = document.querySelector("#cost-section");
  const taskSummary = document.querySelector("#task-summary");
  const costSummary = document.querySelector("#cost-summary");

  if (taskSection) taskSection.classList.add("visible");
  if (costSection) costSection.classList.remove("visible");
  if (taskSummary) taskSummary.classList.remove("visible");
  if (costSummary) costSummary.classList.remove("visible");

  clearTaskForm();
}



function showCostSection() {
  const costSection = document.querySelector("#cost-section");
  const taskSection = document.querySelector("#task-section");
  const taskSummary = document.querySelector("#task-summary");
  const costSummary = document.querySelector("#cost-summary");

  if (costSection) costSection.classList.add("visible");
  if (taskSection) taskSection.classList.remove("visible");
  if (taskSummary) taskSummary.classList.remove("visible");
  if (costSummary) costSummary.classList.remove("visible");

  clearCostForm();
}

const splitCostsButton = document.querySelector("#split-costs");
if (splitCostsButton) {
  splitCostsButton.addEventListener("click", showCostSection);
}


// ========== Clear task form inputs ==========
function clearTaskForm() {
  document.querySelector("#task-title").value = "";
  document.querySelector("#task-desc").value = "";
  document.querySelector("#task-deadline").value = "";
  document.querySelector("#task-recurrence").value = "";

  const checkboxes = document.querySelectorAll("#task-section .checkbox-list input[type='checkbox']");
  for (let i = 0; i < checkboxes.length; i++) {
    checkboxes[i].checked = false;
  }

  clearPrioritySelection();
}

// ========== Clear cost form inputs ==========
function clearCostForm() {
  document.querySelector("#cost-amount").value = "";
  document.querySelector("#cost-desc").value = "";
  document.querySelector("#cost-deadline").value = "";
  document.querySelector("#cost-recurrence").value = "";

  const checkboxes = document.querySelectorAll("#cost-section .checkbox-list input[type='checkbox']");
  for (let i = 0; i < checkboxes.length; i++) {
    checkboxes[i].checked = false;
  }

  clearPrioritySelection();
}

