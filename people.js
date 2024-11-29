/*
3 - people.js
1. Importa la tua funzione da names.js
2. Importa la tua funzione da hobbies.js
3. Crea una funzione che non ha parametri. La funzione dovrebbe restituire un oggetto con due proprietà: fullName ed hobbies. All'interno della tua funzione, usa le tue due funzioni precedenti per costruire l'oggetto.
*/

const userFullName = require("./names");
const userHobbies = require("./hobbies");

// function userInfos() {
//     const fullName = userFullName('Eleonora', 'Cappellesso');
//     const hobbies = userHobbies('volleyball', 'movies', 'travel');

//     return { fullName, hobbies };
// }

// console.log(userInfos());


function userInfos() {
    const firstName = process.argv[2] ?? 'Eleonora';
    const lastName = process.argv[3] ?? 'Cappellesso';
    const hobbyOne = process.argv[4] ?? 'volley';
    const hobbyTwo = process.argv[5] ?? 'movies';
    const hobbyThree = process.argv[6] ?? 'travel';

    const fullName = userFullName(firstName, lastName);
    const hobbies = userHobbies(hobbyOne, hobbyTwo, hobbyThree);

    return { fullName, hobbies };
}
console.log(userInfos());