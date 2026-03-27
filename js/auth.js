document.getElementById("loginForm").addEventListener("submit", function(e) {
  e.preventDefault();

  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  // Dummy users
  const users = [
    { email: "admin@test.com", password: "1234", role: "admin" },
    { email: "user@test.com", password: "1234", role: "user" }
  ];

  const user = users.find(u => u.email === email && u.password === password);

  if (user) {
    localStorage.setItem("user", JSON.stringify(user));
    window.location.href = "dashboard.html";
  } else {
    alert("Invalid login");
  }
});