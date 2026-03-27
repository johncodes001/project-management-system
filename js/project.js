import { renderProjectModal } from "../components/projectModal.js";

    const user = JSON.parse(localStorage.getItem("user"));

if (!user) {
  window.location.href = "index.html";
}

// Show user email
window.onload = function () {
  document.getElementById("userEmail").innerText = user.email;
};

// Get project
const projectIndex = localStorage.getItem("currentProjectIndex");
const projects = JSON.parse(localStorage.getItem("projects")) || [];

if (projectTitleEl && projectIndex === null) {
  window.location.href = "dashboard.html";
}

const project = projects[projectIndex];

// Set project title
const projectTitleEl = document.getElementById("projectTitle");

if (projectTitleEl && project) {
  projectTitleEl.innerText = project.name;
}

// Tab switching
function openTab(tabName) {
  const content = document.getElementById("tabContent");

  content.innerHTML = `
    <h2>${tabName.toUpperCase()}</h2>
    <p>This section will handle ${tabName} data.</p>
  `;
}

// Default tab
openTab("onpage");

// Navigation
function goToDashboard() {
  window.location.href = "dashboard.html";
}

// Logout
function logout() {
  localStorage.removeItem("user");
  window.location.href = "index.html";
}

//Open Project Modal
document.addEventListener("click", function (e) {
  if (e.target.id === "addProjectBtn") {
    document.body.insertAdjacentHTML("beforeend", renderProjectModal());
  }
});

// Handle project form submission
document.addEventListener("submit", function (e) {
  if (e.target.id === "projectForm") {
    e.preventDefault();

    const formData = new FormData(e.target);

    const projects = JSON.parse(localStorage.getItem("projects")) || [];

    const newProject = {
      id: "proj_" + Date.now(),
      name: formData.get("name"),
      url: formData.get("url"),
      folder: formData.get("folder"),
      dam: formData.get("dam"),
      priority: formData.get("priority"),
      contentPriority: formData.get("contentPriority"),
      assignedTo: formData.get("assignedTo"),
      status: "active",
      workflows: {
        onPage: [],
        offPage: [],
        technical: []
      }
    };

    projects.push(newProject);
    localStorage.setItem("projects", JSON.stringify(projects));

    document.getElementById("projectModal").remove();

    location.reload(); // simple for now
  }
});

// Close modal
document.addEventListener("click", function (e) {
  if (
    e.target.id === "closeModalBtn" ||
    e.target.id === "cancelProjectBtn"
  ) {
    document.getElementById("projectModal")?.remove();
  }
});