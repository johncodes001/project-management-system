import { findUser } from "./users.js";

document.getElementById("loginForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value.trim();

  // 🔍 Find user from storage
  const user = findUser(email);

  // ❌ User not found
  if (!user) {
    alert("User not found");
    return;
  }

  // ❌ Wrong password
  if (user.password !== password) {
    alert("Invalid password");
    return;
  }

  // ✅ Success
  localStorage.setItem("user", JSON.stringify(user));
  window.location.href = "dashboard.html";
});