// Para declarar e criar um objeto basta coloca-lo dento do bloco {}
//ex

console.log('\n----- Forma literal de se declarar um objeto -----\n');

const pessoa = {
    nome: 'Felipe',
    sobrenome: 'Henrique'
//  chave       valor    
};

console.log(pessoa.nome);
console.log(pessoa.sobrenome);
//                anotação de ponto para acessar a chave

console.log('\n----- Forma não literal -----\n');

// Outra forma de se criar um objeto

const pessoa1 = new Object();
pessoa1.nome = 'Luiz';
pessoa1.sobrenome = 'Otavio';

console.log(pessoa1.nome);
console.log(pessoa1.sobrenome);

// Métodos são funções dentro do objeto que executam alguma ação
// ex

console.log('\n----- Métodos -----\n');

const pessoa2 = new Object();
pessoa2.nome = 'João';
pessoa2.sobrenome = ' Kleber';
pessoa2.falarNome = function() {
    console.log(`${this.nome + this.sobrenome} está falando seu nome.`);
}
pessoa2.falarNome();

// exemplo 2

console.log('\n----- Exemplo 2 -----\n');

const pessoa3 = new Object();
pessoa3.nome = 'João';
pessoa3.sobrenome = 'Kleber';
pessoa3.idade = 45;
pessoa3.getDataNascimento = function() {
    const dataAtual = new Date();
    return dataAtual.getFullYear() - this.idade;
}
console.log(`A idade de ${pessoa3.sobrenome} é: ${pessoa3.getDataNascimento()}\n`);

for (let chave in pessoa3) {
    console.log(chave);
    console.log(pessoa3[chave]);
}


// -----------------------------------------------------------------------

// Revisão Factory functions / Constructor functions / Classes

console.log('\n----- Criando o método e acessando com o get -----\n');

function criaPessoa(nome, sobrenome) {
    return {
        nome,
        sobrenome,
        get nomeCompleto() {
            return `${this.nome} ${this.sobrenome}`
        }
    };
}

const p1 = criaPessoa('Felipe', 'Henrique');
console.log(p1.nomeCompleto);


// -----------------------------------------------------------------------

// Revisão função construtora - Constructure function

console.log('\n----- Função construtora -----\n');

function Retangulo(nome, sobrenome) {
    this.nome = nome;
    this.sobrenome = sobrenome;
}

// {} <- this ->
const p5 = new Retangulo('Felipe', 'Andrade');
const p6 = new Retangulo('João', 'Andrade');

console.log(p5);
console.log(p6);

