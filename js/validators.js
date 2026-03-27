// Validate email format
export function isValidEmail(email) {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(email);
}

// Get all users (centralised)
export function getUsers() {
  return [
    { email: "admin@test.com", role: "admin" },
    { email: "user@test.com", role: "user" }
  ];
}

// Check if email exists in system
export function findUserByEmail(email) {
  const users = getUsers();
  return users.find(user => user.email === email) || null;
}

// Validate login email
export function validateUserEmail(email) {
  if (!isValidEmail(email)) {
    return { valid: false, message: "Invalid email format" };
  }

  const user = findUserByEmail(email);

  if (!user) {
    return { valid: false, message: "User not found" };
  }

  return { valid: true, user };
}