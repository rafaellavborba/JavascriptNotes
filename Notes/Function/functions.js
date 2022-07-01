// Formas de declarar uma função em JS

// Function hoisting = pode ser chamada antes de ser declarada:
falaOi();
function falaOi() {
  console.log('Oi');
}

// Function expression:
const souUmDado = function () {
  console.log('Sou um dado.');
};
souUmDado();

// Arrow function:
const funcaoArrow = () => {
  console.log('Sou uma arrow function');
};
funcaoArrow();

// Dentro de um objeto
const obj = {
  falar() {
    console.log('Estou falando...');
  }
};
obj.falar();







