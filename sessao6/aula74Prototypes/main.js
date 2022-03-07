/*
Javascript é baseado em protótipos para passar propeiedades e métodos
de um objeto para o outro

Definição de protótipo (é tipo uma classe, um molde)
Protótipo é o termo usado para se referir ao que foi criado pela
primeira vez, servindo de modelo ou molde para futuras produções.

Todos os objetos tem uma referencia interna para um prototipo (__proto__)
que vem da propriedade prototype da função construtoea que foi usada para
cria-lo. Quando tentamos acessar um membro de um objeto, primeiro o motor
do JS vai tentar encontrar este membro no próprio objeto e depois a cadeia
de prototipos é usada até o topo (null) até encontrar (ou não tal membro.)
*/

// Construtora -> molde (classe)

function Pessoa(nome, sobrenome) {
    this.nome = nome;
    this.sobrenome = sobrenome;
//  this.nomeCompleto = () => 'ORIGINAL: ' + this.nome + ' ' + this.sobrenome;
}

// Pessoa.prototype.estouAqui = 'hahahahha';

// Aqui isolamos o código pra não ficar chamando ele toda vez dentro do objeto e
// com isso melhorar a performance.
Pessoa.prototype.nomeCompleto = function() {
    return this.nome + ' ' + this.sobrenome
};

// instancia
const pessoa1 = new Pessoa('Felipe', 'H.'); // <- Pessoa = Função construtora (qndo tem new geralmente é construtora)
const pessoa2 = new Pessoa('Luiz', 'O.'); // <- pessoa = Função construtora
const data = new Date(); // <- Date = Função construtora

console.dir(pessoa1);
console.dir(pessoa2);
console.dir(data);
