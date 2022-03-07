// defineProperty -> Getters e Setters
// Getter obtem o valor
// Setter define, seta o valor
console.log('\n--- Exemplo de get e set em função construtora ---\n');

function Produto(nome, preco, estoque) {
    this.nome = nome;
    this.preco = preco;


    Object.defineProperty(this, 'estoque', {
        enumerable: true, // mostra a chave
        configurable: true, // configuravel
        get: function() {
            return estoque;
        },
        set: function(valor) {
            console.log(valor);
        }
    });
}

const p1 = new Produto('tenis', 500, 10);
console.log(p1);
p1.estoque = 'O valor que eu quero'
console.log(p1.estoque);


// -----------------------------------------------------

console.log('\n--- Exemplo 2 ---\n');

function Produto2(nome, preco, estoque) {
    this.nome = nome;
    this.preco = preco;

    let estoquePrivado = estoque
    Object.defineProperty(this, 'estoque', {
        enumerable: true, // mostra a chave
        configurable: true, // configuravel
        get: function() {
            return estoquePrivado;
        },
        set: function(valor) {
            estoquePrivado = valor;
        }
    });
}

const p2 = new Produto2('bermuda', 200, 25);
console.log(p2);
p2.estoque = 'O valor que eu quero'
console.log(p2.estoque);


// -----------------------------------------------------

console.log('\n--- Exemplo 3 ---\n');

function Produto3(nome, preco, estoque) {
    this.nome = nome;
    this.preco = preco;

    let estoquePrivado = estoque
    Object.defineProperty(this, 'estoque', {
        enumerable: true, // mostra a chave
        configurable: true, // configuravel
        get: function() {
            return estoquePrivado;
        },
        set: function(valor) {
            if (typeof valor !== 'number') {
                // exemplo de exceção com throw
                throw new TypeError('Bad value');
                // console.log('Bad value');
                // return;
            }
//          esse if verifica se é diferente de nº, geralmente retornamos uma exceção aqui caso não atenda a condição.
            estoquePrivado = valor;
        }
    });
}

const p3 = new Produto3('camiseta', 20, 3);
// console.log(p3);
p3.estoque = 500 // Se colocar string aqui da bad value por causa do if no set
console.log(p3.estoque);

// -----------------------------------------------------------

console.log('\n--- Exemplo de get e set em função fabrica - factory ---\n');

function criaProduto(nome) {
    return {
        get nome() {
            return nome;
        },
        set nome(valor) {
            valor = valor.replace('sou ', '');
            nome = valor;
        }
    };
}

const p5 = criaProduto('Shape');
console.log(p5.nome);
p5.nome = 'Agora sou um Truck';
console.log(p5.nome);

