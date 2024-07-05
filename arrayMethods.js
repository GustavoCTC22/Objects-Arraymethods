const numeros = [1, 4, 5, 6, 2, 3, 10];

numeros.push(7); //agregar el elemento al final del array
// console.log(numeros);
numeros.pop(); //borrar el elemento al final del array
// console.log(numeros.length); //cantidad de elementos del array
numeros.unshift(9); //agregar el elemento al inicio del array
numeros.shift(); //borrar el elemento al inicio del array
// console.log(numeros);
//============================================================
const copia = [...numeros]; //copiar array
// const nuevoArray = copia.splice(0, 6); //modifica el array original
const nuevoArray = copia.slice(0, 6); //crea una copia
// console.log(nuevoArray);
// console.log(copia);
// console.log(nuevoArray);
const fusion = copia.concat(nuevoArray); //fusiona los arrays
// console.log(fusion);

//============================================================
//indexOf
const exampleIndexOf = [1, 3, 5, 7, 5];
console.log(exampleIndexOf.indexOf(5));
//lastIndexOf
console.log(exampleIndexOf.lastIndexOf(5));
//includes
const nombres = ["lucy", "liz", "rut", "diana"];
// console.log(nombres.includes("juana"));
// console.log(nombres.includes("lucy"));
//find
const cursos = ["matematica", "fisica", "quimica", "sociales"];
console.log(cursos.find((ele) => ele == "fisica"));
//findIndex
console.log(cursos.findIndex((ele) => ele == "quimica"));
//filter
const filtered = nombres.filter((ele) => ele.length > 3);
console.log(filtered);
//map
const numbers = [2, 4, 5, 6];
const arrayMapped = numbers.map((ele) => `<p>${ele}</p>`);
console.log(numbers);
console.log(arrayMapped);
//split
const actor = "jose";
const actorArray = actor.split("");
console.log(actorArray);
console.log(actorArray[0].toUpperCase());
//join
console.log(arrayMapped.join(""));
//reverse
const actoresBolivianos = ["Milton", "Jose"];
console.log(actoresBolivianos.reverse());
//reduce
console.log(numbers.reduce((a, b) => a + b, 0));
//sort
// "lucy" --> [ "l", "u", "c", "y"]
const question = "lucy navarro";
const arrayQuestion = question.split(" ");
console.log(arrayQuestion);
