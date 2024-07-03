// console.log(this);
// console.log(window);

const estudiante = {
  name: "Wendy",
  edad: 22,
  pais: "Bolivia",
  mascotas: ["Bobby", "Akira"],
  ciudad: null,
  estudia: true,
  miobjeto: function () {
    console.log(this);
  },
  info: function () {
    console.log(`Mi nombre es ${this.name} y tengo ${this.edad} años`);
  },
};

estudiante.miobjeto();
estudiante.info();

//
function saludo() {
  console.log("funcion basica", this);
}

saludo();

const prueba = () => {
  console.log("funcion flecha", this);
};

prueba();

const obj1 = {
  name: "funcion basica",
  thisone: function () {
    console.log(this);
  },
};

const arrow = () => {
  console.log(this);
};

const obj2 = {
  name: "arrow function",
  thistwo: arrow,
};

obj1.thisone();
obj2.thistwo();
