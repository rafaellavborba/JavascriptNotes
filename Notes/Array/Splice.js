// Splice adiciona e/ou remove elementos do array e consegue mostrar esses elementos em outro array

const nomes = ['Maria', 'João', 'Eduardo', 'Gabriel', 'Júlia'];

/*primeiro valor é do índice, o segundo é a quantidade de números que
serão removidos a partir do índice. 
índice negativo: a contagem é do final para o início <-  depois são removidos
os números na ordem correta -> */
const removidos = nomes.splice(-2, Number.MAX_VALUE);
console.log(nomes, removidos);

// para adicionar, sem remover nenhum elemento, é só colocar o 0 no segundo
// parâmetro e o elemento que vai ser adicionado no terceiro
const adicionados = nomes.splice(1, 0, 'Luiz');
console.log(nomes)

// para trocar um elemento pelo outro, você deve removê-lo
const troca = nomes.splice(3, 1, 'Mayra');
console.log(nomes, troca);
