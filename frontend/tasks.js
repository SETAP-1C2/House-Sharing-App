document.querySelector("#share-tasks-btn")?.addEventListener("click", () => {
  const title = document.querySelector("#task-title")?.value;
  const description = document.querySelector("#task-desc")?.value;
  const recurrence = document.querySelector("#task-recurrence")?.value;
  const priority = document.querySelector("#task-priority")?.value;
  const deadline = document.querySelector("#task-deadline")?.value;
  const groupId = localStorage.getItem("groupId");

  const assignedUsers = Array.from(document.querySelectorAll(".assign-user-checkbox:checked"))
    .map(cb => cb.value);

  if (!groupId || !title || !deadline) {
    alert("Missing required fields or group info.");
    return;
  }

  fetch("/api/tasks", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      groupId,
      title,
      description,
      recurrence,
      priority,
      deadline,
      assignedUsers
    })
  })
    .then(res => res.text())
    .then(msg => alert(msg))
    .catch(err => {
      console.error("Error submitting task:", err);
      alert("Failed to submit task.");
    });
});
