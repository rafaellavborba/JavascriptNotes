// IIFE -> Immediately invoked function expression
// Função executada assim que definida
// A variável definida dentro da expressão não pode ser acessada fora de seu escopo.
// Atribuir uma IIFE a uma variável não armazenará a função em si, mas o resultado da função.

(function (idade, peso, altura) {
  const sobrenome = 'Miranda';
  function criaNome(nome) {
    return nome + ' ' + sobrenome;
  }

  function falaNome() {
    console.log(criaNome('Luiz'));
  }

  falaNome();
  console.log(idade, peso, altura);
})(30, 80, 1.80);