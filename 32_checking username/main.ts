let Current_users:string[]=["Nasrullah","Ali","Aslam","Akram","Atif"];

let new_users:string[]=["Ali","Atif","Tasleem","Aqeel","Raheem"];

// Loop through new_users list
for (let i = 0; i < new_users.length; i++) {
    // Convert both the current username and new username to lowercase for case insensitivity
    let new_username_lower = new_users[i].toLowerCase()

    // Check if the new username exists in the current_users list (case insensitive)
    if (Current_users.some(user => user.toLowerCase() === new_username_lower)) {
        console.log(`Sorry, the username "${new_users[i]}" is already taken. Please enter a new username.`);
    } else {
        console.log(`Congratulations! The username "${new_users[i]}" is available.`);
    }
}