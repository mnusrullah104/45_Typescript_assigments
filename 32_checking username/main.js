var Current_users = ["Nasrullah", "Ali", "Aslam", "Akram", "Atif"];
var new_users = ["Ali", "Atif", "Tasleem", "Aqeel", "Raheem"];
var _loop_1 = function (i) {
    // Convert both the current username and new username to lowercase for case insensitivity
    var new_username_lower = new_users[i].toLowerCase();
    // Check if the new username exists in the current_users list (case insensitive)
    if (Current_users.some(function (user) { return user.toLowerCase() === new_username_lower; })) {
        console.log("Sorry, the username \"".concat(new_users[i], "\" is already taken. Please enter a new username."));
    }
    else {
        console.log("Congratulations! The username \"".concat(new_users[i], "\" is available."));
    }
};
// Loop through new_users list
for (var i = 0; i < new_users.length; i++) {
    _loop_1(i);
}
