// Создание переменных, которые можно перезаявить
let firstName = "John";
let age = 25;

console.log("Initial values:");
console.log("firstName:", firstName);
console.log("age:", age);

// Попытка перезаявить переменные
firstName = "Jane";
age = 30;

console.log("Reassigned values:");
console.log("firstName:", firstName);
console.log("age:", age);

// Создание переменных, которые нельзя перезаявить
const lastName = "Doe";
const birthYear = 1995;

console.log("Immutable values:");
console.log("lastName:", lastName);
console.log("birthYear:", birthYear);

// Попытка изменить значение переменной, которую нельзя перезаявить
// lastName = "Smith";