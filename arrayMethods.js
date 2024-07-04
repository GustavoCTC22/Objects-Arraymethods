// //             0    1     2       3
const elementos = ["hola", "mundo", "estoy", "bien"];

// //accedemos al valor de un arreglo
// // console.log(elementos[1]);

// for (const elemento of elementos) {
//   console.log(elemento);
// }

const reversed = elementos.reverse(); // [ "bien", "estoy","mundo", "hola"] --> 4

function reverseElements(array) {
  const result = [];

  for (let elemento of array) {
    const reversed = elemento.split("").reverse().join("");
    result.push(reversed);
  }

  return result;
}
console.log(reverseElements(reversed));

// "hola" ----> "aloh";
