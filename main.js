/* NOME */
let currentText = document.getElementById('username').innerHTML;
console.log(currentText);

const userName = prompt('Inserisci il tuo nome');

currentText = `${currentText} ${userName}`;

console.log(currentText);

document.getElementById('username').innerHTML = currentText;

/* COGNOME */
let currentText1 = document.getElementById('userlastname').innerHTML;
console.log(currentText1);

const userLastName = prompt('Inserisci il tuo cognome');

currentText1 = `${currentText1} ${userLastName}`;

console.log(currentText1);

document.getElementById('userlastname').innerHTML = currentText1;

/* ETA' */
let currentText2 = document.getElementById('age').innerHTML;
console.log(currentText2);

const age = prompt('Inserisci la tua età');

currentText2 = `${currentText2} ${age}`;

console.log(currentText2);

document.getElementById('age').innerHTML = currentText2;

/* COLORE PREFERITO */
let currentText3 = document.getElementById('color').innerHTML;
console.log(currentText3);

const color = prompt('Il tuo colore preferito è');

currentText3 = `${currentText3} ${color}`;

console.log(currentText3);

document.getElementById('color').innerHTML = currentText3;

