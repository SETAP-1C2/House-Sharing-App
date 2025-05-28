document.querySelector("#split-costs-btn")?.addEventListener("click", () => {
  const description = document.querySelector("#payment-desc")?.value;
  const totalCost = document.querySelector("#payment-total")?.value;
  const groupId = localStorage.getItem("groupId");

  const assignedUsers = Array.from(document.querySelectorAll(".assign-user-checkbox:checked"))
    .map(cb => cb.value);

  if (!groupId || !totalCost) {
    alert("Missing cost or group ID.");
    return;
  }

  fetch("/api/payments", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      groupId,
      description,
      totalCost,
      assignedUsers
    })
  })
    .then(res => res.text())
    .then(msg => alert(msg))
    .catch(err => {
      console.error("Error submitting payment:", err);
      alert("Failed to submit payment.");
    });
});
