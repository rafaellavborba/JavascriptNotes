//Função passa por todos os elementos do array checando a informação
// sempre retorna um array com a mesma quantidade de elementos ou menos
// Ele não mexe no array original, ele cria um novo array

// Exemplo: retorne os números maiores que 10:
const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];
const numerosFiltrados = numeros.filter(valor => valor > 10);
//console.log(numerosFiltrados);

//Retorne pessoas que tem o nome com 5 letras ou mais
const pessoas = [
  { nome: 'Luiz', idade: 62 },
  { nome: 'Maria', idade: 23 },
  { nome: 'Eduardo', idade: 55 },
  { nome: 'Leticia', idade: 10 },
  { nome: 'Rosana', idade: 32 },
];
const nomeGrande = pessoas.filter(obj => obj.nome.length >= 5);
//console.log(nomeGrande);

//Retorne pessoas com mais de 50 anos:
const acimaIdade = pessoas.filter(obj => obj.idade > 50);
//console.log(acimaIdade);

// Retorne pessoas que o nome termina com a letra A:
const A = pessoas.filter(obj => {
  return obj.nome.toLowerCase().endsWith('a');
});
console.log(A);


