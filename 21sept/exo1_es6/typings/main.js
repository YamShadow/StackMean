console.log('coucou');

// Déclaration de variable ES6

var userName = "Mathieu"; //=> ES5
let name = "Yamishadow"; //=> ES6

// La valeur d'une constante ne peut pas etre modifiée
const birthDate = 1994;

const skills = ["JS", "HTML", "CSS"];
const softSkills = ["Social"];

// Utilisation du Spread Operator (...)
const allSkill = [...skills, ...softSkills];


// Templating ES6

console.log(`
        Hello ${userName}, ton âge est ${2018 - birthDate} ans.
    `);


// Les fonctions ES6

// const twice = (n) => {
//     return n * 2;
// };

const twice = n => n * 2;

const displayUserSkills = (name, ...skills) => {
    console.log(name, skills);
};

displayUserSkills(`Mathieu`, `JS`, `HTML`, `CSS`);

// valeur par defaut d'un paramètre de fonction
const helloUser = (user = `Foo`) => {
    console.log(`Hello ${user}`);
};

helloUser();
helloUser(`Faa`);

// Async

let test = 'hello';

// sans promesse
// const asyncFunction = () => {
//     setTimeout(() => {
//         test = `Ciao`;
//         console.log(test);
//     }, 1000);
// }

const asyncFunction = (number = 0) => {
    return new Promise((resolve, reject) => {

        if (number > 0) {
            setTimeout(() => {
                test = `Ciao`;
                resolve(test);
            }, 1000);
        }
        else {
            reject(`Number = 0`)
        }
    });
}

asyncFunction(1)
    .then(data => console.log(data))
    .catch(error => console.error(error));
//console.log(test);

//





