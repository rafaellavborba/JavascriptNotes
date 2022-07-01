// concatenando arrays:

const a1 = [1, 2, 3];
const a2 = [4, 5, 6];

const a3 = a1.concat(a2);
console.log(a3);

// Para adicionar mais elementos junto, é só adicionar com virgulas
const a4 = a1.concat(a2, [7, 8, 9], 'Mayra');
console.log(a4);

// Com o spread ...
const a5 = [...a1, ...a2, ...[7, 8, 9], 'Mayra'];
console.log(a5);
