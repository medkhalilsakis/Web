let tasks = [];
console.log("Bienvenue");

const taskInput = document.getElementById("taskInput");
const addBtn = document.getElementById("addBtn");
const taskList = document.getElementById("taskList");
const clearAllBtn = document.getElementById("clearAll");
const counter = document.getElementById("counter");
const searchInput = document.getElementById("searchInput");

window.onload = () => {
  const savedTasks = localStorage.getItem("tasks");
  if (savedTasks) {
    tasks = JSON.parse(savedTasks);
  }
  renderTasks();
};

function ajouterTache(text) {
  if (text.trim() === "") return;
  tasks.push({ texte: text, terminee: false });
  saveTasks();
  renderTasks();
  taskInput.value = "";
}

function supprimerTache(index) {
  tasks.splice(index, 1);
  saveTasks();
  renderTasks();
}

function terminerTache(index) {
  tasks[index].terminee = !tasks[index].terminee;
  saveTasks();
  renderTasks();
}

function renderTasks(filter = "") {
  taskList.innerHTML = "";
  tasks
    .filter(task => task.texte.toLowerCase().includes(filter.toLowerCase()))
    .forEach((task, index) => {
      const li = document.createElement("li");
      if (task.terminee) li.classList.add("completed");

      const span = document.createElement("span");
      span.textContent = task.texte;

      const buttons = document.createElement("div");
      buttons.className = "task-buttons";

      const btnTerminer = document.createElement("button");
      btnTerminer.textContent = task.terminee ? "Annuler" : "Terminer";
      btnTerminer.className = "terminer";
      btnTerminer.onclick = () => terminerTache(index);

      const btnSupprimer = document.createElement("button");
      btnSupprimer.textContent = "Supprimer";
      btnSupprimer.className = "supprimer";
      btnSupprimer.onclick = () => supprimerTache(index);

      buttons.appendChild(btnTerminer);
      buttons.appendChild(btnSupprimer);

      li.appendChild(span);
      li.appendChild(buttons);
      taskList.appendChild(li);
    });

  updateCounter();
}

function saveTasks() {
  localStorage.setItem("tasks", JSON.stringify(tasks));
}

function updateCounter() {
  const total = tasks.length;
  const terminees = tasks.filter(t => t.terminee).length;
  counter.textContent = `Total : ${total} | Terminees : ${terminees} | En cours : ${total - terminees}`;
}

addBtn.addEventListener("click", () => ajouterTache(taskInput.value));
taskInput.addEventListener("keydown", e => {
  if (e.key === "Enter") ajouterTache(taskInput.value);
});
clearAllBtn.addEventListener("click", () => {
  tasks = [];
  saveTasks();
  renderTasks();
});
searchInput.addEventListener("input", e => renderTasks(e.target.value));
