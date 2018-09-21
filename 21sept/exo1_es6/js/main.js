"use strict";

console.log('coucou');

// Déclaration de variable ES6

var userName = "Mathieu"; //=> ES5
var name = "Yamishadow"; //=> ES6

// La valeur d'une constante ne peut pas etre modifiée
var birthDate = 1994;

var skills = ["JS", "HTML", "CSS"];
var softSkills = ["Social"];

// Utilisation du Spread Operator (...)
var allSkill = [].concat(skills, softSkills);

// Templating ES6

console.log("\n        Hello " + userName + ", ton \xE2ge est " + (2018 - birthDate) + " ans.\n    ");

// Les fonctions ES6

// const twice = (n) => {
//     return n * 2;
// };

var twice = function twice(n) {
    return n * 2;
};

var displayUserSkills = function displayUserSkills(name) {
    for (var _len = arguments.length, skills = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        skills[_key - 1] = arguments[_key];
    }

    console.log(name, skills);
};

displayUserSkills("Mathieu", "JS", "HTML", "CSS");

// valeur par defaut d'un paramètre de fonction
var helloUser = function helloUser() {
    var user = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "Foo";

    console.log("Hello " + user);
};

helloUser();
helloUser("Faa");

// Async

var test = 'hello';

// sans promesse
// const asyncFunction = () => {
//     setTimeout(() => {
//         test = `Ciao`;
//         console.log(test);
//     }, 1000);
// }

var asyncFunction = function asyncFunction() {
    var number = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;

    return new Promise(function (resolve, reject) {

        if (number > 0) {
            setTimeout(function () {
                test = "Ciao";
                resolve(test);
            }, 1000);
        } else {
            reject("Number = 0");
        }
    });
};

asyncFunction(1).then(function (data) {
    return console.log(data);
}).catch(function (error) {
    return console.error(error);
});
//console.log(test);

//