// console.log(global);
// global.myGlobalVar = "Hello, world!";
// console.log(global);
// console.log(global.myGlobalVar);

//navegador ---> window    nodejs -----> global == globalThis

// global.saludo = "Holaaaaa";
// console.log(globalThis.saludo);

// console.log(window.innerWidth);

// alert("lucy"); //solo funciona en el navegador
// console.log(globalThis.process);

//Dentro de una función regular ===========================================
// function printThis() {
//   console.log(this);
// }
// printThis();

//Dentro de un objeto
const obj = {
  name: "Alice",
  pais: "Bolivia",
  getName: function () {
    console.log(`${this.name} es de ${this.pais}`); // Se refiere al objeto `obj`
  },
};
// obj.getName();

//========================================

function usingCall() {
  console.log(this); //----> el this de esa función ahora es obj
}

// usingCall.call(obj);
// usingCall();

function showName() {
  console.log(this.name); // `this` se refiere al objeto pasado con `call`, `apply` o `bind`
}

const anotherObj = { name: "Bob" };

showName.call(anotherObj); // `this` se refiere a `anotherObj`
showName.apply(anotherObj); // `this` se refiere a `anotherObj`
