var magicians = ["Atif aslam", "Nusrat", "Rahat"];
function show_magicians(magicians) {
    console.log("Magicians performing tonight:");
    for (var _i = 0, magicians_1 = magicians; _i < magicians_1.length; _i++) {
        var magician = magicians_1[_i];
        console.log(magician);
    }
}
show_magicians(magicians);
