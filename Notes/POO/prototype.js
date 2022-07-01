/* Protótipo é o termo usado para se referir ao que foi criado pela
primeira vez, servindo de modelo ou molde para futuras produções.

Todos os objetos tem uma referência interna para um protótipo (_proto_)
que vem da propriedade prototype da função construtora que foi usada para
criá-lo. Quando tentamos acessar um membro de um objeto, primeiro o motor do JS
vai tentar encontrar este membro no próprio objeto e depois a cadeia de protótipos
é usada até o topo (null) até encontrar (ou não) tal membro.
*/

const objA = {
  chaveA: 'A'
  //_proto_: Object.prototype
};

const objB = {
  chaveB: 'B'
  //_proto_: ObjA (?)
};

Object.setPrototypeOf(objB, objA);


