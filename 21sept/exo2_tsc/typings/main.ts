// Déclaration de variables

let userName: String = `Julien`;
const birthDate: number = 1979;
const isMajor: Boolean = true;

let nawak: any = `test`;
nawak = 12;

const skills: Array<String | Number | Boolean> = [`HTML`, `CSS`, 12, true]

// Fonction TS

const userAge = (name: String, birth: number): String => {
    return `Name: ${name}, Age: ${2018 - birth}`;
}

// typer un objet en TS

interface User {
    fullname: String;
    age: number;
    isMajor: Boolean
};

let newUser: User = {
    age: 24,
    fullname: `Mathieu`,
    isMajor: true
}

const sayHello = (user: User) => {
    console.log(user.fullname);
}

sayHello(newUser);