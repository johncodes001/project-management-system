// Get logged in user
const user = JSON.parse(localStorage.getItem("user"));
if (!user) {
  window.location.href = "index.html";
}

// Get project
const projectIndex = localStorage.getItem("currentProjectIndex");
const projects = JSON.parse(localStorage.getItem("projects")) || [];

if (projectIndex === null) {
  window.location.href = "dashboard.html";
}

const project = projects[projectIndex];

// Set project title
document.getElementById("projectTitle").innerText = project.name;

// Tab switching function
function openTab(tabName) {
  const content = document.getElementById("tabContent");

  content.innerHTML = `
    <h2>${tabName.toUpperCase()}</h2>
    <p>Content for ${tabName} will be added here.</p>
  `;
}

// Default tab
openTab("onpage");

// Back button
function goBack() {
  window.location.href = "dashboard.html";
}