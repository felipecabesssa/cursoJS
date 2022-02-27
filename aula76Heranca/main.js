// Produto -> aumento, desconto
// Camiseta = cor, caneca = material
function Produto(nome, preco) {
    this.nome = nome;
    this.preco = preco;
}

Produto.prototype.aumento = function(quantia) {
    this.preco += quantia;
};
Produto.prototype.desconto = function(quantia) {
    this.preco -= quantia;
};

// Herdando Produto
function Camiseta(nome, preco, cor) {
    Produto.call(this, nome, preco);
}
Camiseta.prototype = Object.create(Produto.prototype);
Camiseta.prototype.constructor = Camiseta;

Camiseta.prototype.aumento = function(percentual) {
    this.preco = this.preco + (this.preco * (percentual / 100));
};

// Herdando Produto
function Caneca(nome, preco, material, estoque) {
    Produto.call(this, nome, preco);
    this.material = material; //Como no Produto não tem material a gente seta assim

    Object.defineProperty(this, 'estoque', {
        enumerable: true,
        configurable: false,
        get: function() {
            return estoque;
        },
        set: function(valor) {
            if (typeof valor !== 'number') return;
            estoque = valor;
        }
    });

}

Caneca.prototype = Object.create(Produto.prototype); // Linca os com produtos
Caneca.prototype.constructor = Caneca;

const caneca = new Caneca('Fla', 15, 'Vidro', 20);
const produto = new Produto('Gen', 111);
const camiseta = new Camiseta('Regata', 7.5, 'Preta');
camiseta.aumento(10);
console.log(camiseta);
console.log(caneca);
console.log(produto);


