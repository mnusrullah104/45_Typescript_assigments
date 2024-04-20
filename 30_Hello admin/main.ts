let usernames: string[] = ["user1", "admin", "user2", "user3", "Eric"]; // Array of usernames

for (const username of usernames) {
  if (username === "admin") {
    console.log(`Hello ${username}, would you like to see a status report?`);
  } else {
    console.log(`Hello ${username}, thank you for logging in again.`);
  }
}
