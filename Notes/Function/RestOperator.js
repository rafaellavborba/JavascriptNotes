/*Se o último argumento nomeado de uma função tiver prefixo com  ..., 
ele irá se tornar um array em que os elemento de 0 (inclusive) até theArgs.length (exclusivo) são disponibilizados
pelos argumentos atuais passados à função.*/


function conta(operador, acumulador, ...numeros) {
  for (let numero of numeros) {
    if (operador === '+') acumulador += numero;
    if (operador === '-') acumulador -= numero;
    if (operador === '*') acumulador *= numero;
    if (operador === '/') acumulador /= numero;

  }
  console.log(acumulador);
}
conta('*', 1, 20, 30, 40, 50);