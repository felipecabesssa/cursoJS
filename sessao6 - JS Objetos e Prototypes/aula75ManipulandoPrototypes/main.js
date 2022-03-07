console.log('\n--- Manipulando o prototype *CUIDADO ---\n');

function Produto(nome, preco) {
    this.nome = nome;
    this.preco = preco;
}

Produto.prototype.desconto = function(percentual) {
    this.preco = this.preco - (this.preco * (percentual / 100));
};

Produto.prototype.aumento = function(percentual) {
    this.preco = this.preco + (this.preco * (percentual / 100))
};

const p1 = new Produto('Camiseta', 500);
p1.desconto(10);
p1.aumento(5);
console.log(p1);

//--------------------------------------------------------------

console.log('\n--- Usando Objeto literal ---\n');

// Literal
const p2 = {
    nome: 'Caneca',
    preco: 15
};
Object.setPrototypeOf(p2, Produto.prototype);

p2.aumento(10);

console.log(p2);


//--------------------------------------------------------------

console.log('\n--- Criando objetos com o Prototype ---\n');

const p3 = Object.create(Object.prototype); // Cria um objeto

console.log(p3);

console.log('\n--- Criando objetos com objetos literais dentro ---\n');

const p4 = Object.create(Produto.prototype, {
    preco: {
        writable: true,
        configurable: true,
        enumerable: true,
        value: 113
    },
    tamanho: {
        writable: true,
        configurable: true,
        enumerable: true,
        value: 42
    },
}); 
// Cria um objeto ja setando algumas configurações nele

p4.aumento(10);
console.log(p4);

