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
        { name: "User", email: "user@test.com", password: "1234", role: "user" },
        { name: "Durga Ma'am", email: "dina@webmarketingguru.com.au", password: "4D0Bq^g/*6", role: "admin" },
        { name: "Harshil", email: "jackwilson.wmg@gmail.com", password: "Y08T.ze6*;", role: "user" },
        { name: "Twinkle", email: "tiana.wmg@gmail.com", password: "9L]}r23,Y", role: "user" },
        { name: "Dishank", email: "damian.wmg@gmail.com", password: "G2UC#9Za6", role: "user" },
        { name: "Jaimin", email: "george.wmg07@gmail.com", password: "Vf59&8kG]F", role: "user" },
        { name: "Riddhi", email: "rachelwalker2711@gmail.com", password: "8z6.2Et'0", role: "user" },
        { name: "Raval", email: "shaun.wmg@gmail.com", password: "5~u6|g'2*K", role: "user" },
        { name: "Dipen", email: "darwin.wmg@gmail.com", password: "{2dT5agJ4c", role: "user" },
        { name: "Pratik", email: "baylen.wmg@gmail.com", password: "14[7qV5^v_", role: "user" },
        { name: "Prerak", email: "johnny.wmg@gmail.com", password: ";PD143:~1QGb", role: "user" },
        { name: "Kushal", email: "benjamin.wmg@gmail.com", password: "w!3%;r7G3)", role: "user" },
        { name: "Rohan", email: "addy.wmg@gmail.com", password: "cV,AG140>", role: "user" }
    ];

    saveUsers(defaultUsers);
  }
}

// Find user
export function findUser(email) {
  return getUsers().find(u => u.email === email);
}