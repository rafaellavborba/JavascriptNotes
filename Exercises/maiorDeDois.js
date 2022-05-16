// Escreva uma função que recebe 2 números e retorne o maior.

function max(x, y) {
  return x > y ? x : y;
}
console.log(max(10, 4));

// Com arrow function:

const maxArr = (x, y) => x > y ? x : y;
console.log(maxArr(20, 10));