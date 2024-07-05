//SCOPE
//Es el alcance que tiene una variable o funcion en js
const fruta = "sandia"; //variable global
const saludo = "hola";

function sayHello() {
  // const saludo = "hola"; //variable de block
  console.log(saludo);

  function sayBye() {
    const saludo = "adios";
    console.log(saludo);
  }

  sayBye();
}

sayHello();

//Necesarios para hacer proyectos en js sin problemas a futuro
//SCOPE
//CALLSTACK
//EVENTLOOP
//PROGRAMACION ASINCRONA
