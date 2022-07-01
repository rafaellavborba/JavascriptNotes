// A function tem uma variável especial que sustenta todos os argumentos enviados. Arguments.
function funcao() {
  let total = 0;
  for (let argumento of arguments) {
    total += argumento;
  }

  console.log(total)
}

funcao(1, 2, 3, 4, 5, 6, 7);

// Não tem argumentos em arrow function. Args sim.

const conta = (...args) => {
  console.log(args);
};
conta('+', 1, 20, 30, 40, 50);