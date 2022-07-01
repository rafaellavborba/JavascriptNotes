// Usa o valor do array original para criar um novo array
// vai ter sempre o mesma quantidade de elementos do array original

// Dobre os números:
const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];
const numerosEmDobro = numeros.map(valor => valor * 2);
//console.log(numerosEmDobro);

//retorne apenas uma string com o nome da pessoa
const pessoas = [
  { nome: 'Luiz', idade: 62 },
  { nome: 'Maria', idade: 23 },
  { nome: 'Eduardo', idade: 55 },
  { nome: 'Leticia', idade: 10 },
  { nome: 'Rosana', idade: 32 },
];

const nomes = pessoas.map(obj => obj.nome);
//console.log(nomes);

// Remova apenas a chave 'nome' do objeto
const idades = pessoas.map(obj => ({ idade: obj.idade }));
//console.log(idades);

// Adicione uma chave 'id' em cada objeto
const comIds = pessoas.map(function (obj, indice) {
  const newObj = { ...obj };
  newObj.id = indice;
  return newObj;
});
//console.log(comIds);