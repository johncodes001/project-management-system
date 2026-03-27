// Get users from storage
export function getUsers() {
  return JSON.parse(localStorage.getItem("users")) || [];
}

// Save users
export function saveUsers(users) {
  localStorage.setItem("users", JSON.stringify(users));
}

// Seed default users (run once)
export function seedUsers() {
  const existing = getUsers();

  if (existing.length === 0) {
    const defaultUsers = [
        { name: "Admin", email: "admin@test.com", password: "1234", role: "admin" },
        { name: "User", email: "user@test.com", password: "1234", role: "user" }
    ];

    saveUsers(defaultUsers);
  }
}

// Find user
export function findUser(email) {
  return getUsers().find(u => u.email === email);
}
