// Reduz um array a um único elemento

//Soma todos os números 
const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];
const total = numeros.reduce(function (acumulador, valor) {
  acumulador += valor;
  return acumulador;
});

//console.log(total);

// Somar só os pares
const totalPares = numeros.reduce(function (acumulador, valor) {
  if (valor % 2 === 0) acumulador += valor;
  return acumulador;
}, 0);
//console.log(totalPares);

// Somar os impares
const totalImpares = numeros.reduce(function (acumulador, valor) {
  if (valor % 2 !== 0) acumulador += valor;
  return acumulador;
}, 0);
//console.log(totalImpares);

// Retorne a pessoa mais velha
const pessoas = [
  { nome: 'Luiz', idade: 62 },
  { nome: 'Maria', idade: 23 },
  { nome: 'Eduardo', idade: 55 },
  { nome: 'Leticia', idade: 10 },
  { nome: 'Rosana', idade: 32 },
];
const maisVelha = pessoas.reduce(function (acumulador, valor) {
  if (acumulador.idade > valor.idade) return acumulador;
  return valor;
});
//console.log(maisVelha);

