


// for task section
function showTaskSection() {
  const taskSection = document.querySelector("#task-section");
  const costSection = document.querySelector("#cost-section");

  taskSection.classList.add("visible");
  costSection.classList.remove("visible");

}

const shareTasksButton = document.querySelector("#share-tasks");

if (shareTasksButton !== null) {
  shareTasksButton.addEventListener("click", showTaskSection);
}






//for cost section
function showCostSection() {
  const costSection = document.querySelector("#cost-section");
  const taskSection = document.querySelector("#task-section");
  
  costSection.classList.add("visible");
  taskSection.classList.remove("visible")
}

const splitCostsButton = document.querySelector("#split-costs");

if (splitCostsButton !== null) {
  splitCostsButton.addEventListener("click", showCostSection);
}

