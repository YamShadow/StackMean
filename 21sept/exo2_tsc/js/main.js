// Déclaration de variables
var userName = "Julien";
var birthDate = 1979;
var isMajor = true;
var nawak = "test";
nawak = 12;
var skills = ["HTML", "CSS", 12, true];
// Fonction TS
var userAge = function (name, birth) {
    return "Name: " + name + ", Age: " + (2018 - birth);
};
;
var newUser = {
    age: 24,
    fullname: "Mathieu",
    isMajor: true
};
var sayHello = function (user) {
    console.log(user.fullname);
};
sayHello(newUser);
